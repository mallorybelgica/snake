import React, { useState, useEffect } from "react";
import { foodSize, gameBoardSize } from "../../constants/constants";
import Alert from "../Alert/Alert";
import Food from "../Food/Food";
import Snake from "../Snake/Snake";
import {
  Wrapper,
  Title,
  GameBoard,
  GameplayButton,
  ButtonWrapper,
  Score,
  ScoreKey,
  Button,
} from "./BoardStyles";

const Board = () => {
  const initialState = {
    speed: 75,
    foodPosition: [0, 0],
    scenario: "GAMEPLAY",
    snakeDirection: "RIGHT",
    snakePieces: [
      [0, 0],
      [20, 0],
    ],
  };
  const [scenario, setScenario] = useState("GAMEPLAY");
  const [isPaused, setIsPaused] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(initialState.speed);
  const [foodPosition, setFoodPosition] = useState(initialState.foodPosition);
  const [snakeDirection, setSnakeDirection] = useState(
    initialState.snakeDirection
  );
  const [snakePieces, setSnakePieces] = useState(initialState.snakePieces);

  const generateFood = () => {
    const randomTop = Math.random() * (gameBoardSize - foodSize);
    const randomLeft = Math.random() * (gameBoardSize - foodSize);
    const top = randomTop - (randomTop % 20);
    const left = randomLeft - (randomLeft % 20);
    setFoodPosition([left, top]);
  };

  const keyHandler = (ev: KeyboardEvent) => {
    let newDirection = snakeDirection;

    switch (ev.key) {
      case " ":
        if (scenario === "GAMEPLAY" || scenario === "PAUSE") {
          setIsPaused(!isPaused);
        }
        break;
      case "Enter":
        if (scenario === "GAME OVER") {
          window.location.reload();
        }
        break;
      case "1":
        if (scenario === "GAMEPLAY" || scenario === "PAUSE") {
          setSpeed(75);
        }
        break;
      case "2":
        if (scenario === "GAMEPLAY" || scenario === "PAUSE") {
          setSpeed(50);
        }
        break;
      case "3":
        if (scenario === "GAMEPLAY" || scenario === "PAUSE") {
          setSpeed(25);
        }
        break;
      case "Right":
      case "ArrowRight":
        if (snakeDirection === "LEFT") {
          setAlertMessage("OUCH! You just ate your own body.");
          gameOver();
        } else {
          newDirection = "RIGHT";
        }
        break;
      case "Down":
      case "ArrowDown":
        if (snakeDirection === "UP") {
          setAlertMessage("OUCH! You just ate your own body.");
          gameOver();
        } else {
          newDirection = "DOWN";
        }
        break;
      case "Left":
      case "ArrowLeft":
        if (snakeDirection === "RIGHT") {
          setAlertMessage("OUCH! You just ate your own body.");
          gameOver();
        } else {
          newDirection = "LEFT";
        }
        break;
      case "Up":
      case "ArrowUp":
        if (snakeDirection === "DOWN") {
          setAlertMessage("OUCH! You just ate your own body.");
          gameOver();
        } else {
          newDirection = "UP";
        }
        break;
    }
    setSnakeDirection(newDirection);
  };

  const moveSnake = () => {
    const snakeBody = [...snakePieces.slice(0, snakePieces.length - 1)];
    let pieces = [...snakePieces];
    let snakeHead = pieces[pieces.length - 1];

    if (
      snakeHead[0] >= gameBoardSize ||
      snakeHead[1] >= gameBoardSize ||
      snakeHead[0] < 0 ||
      snakeHead[1] < 0
    ) {
      setAlertMessage("OUCH! You just hit a wall.");
      gameOver();
    }

    snakeBody.map((bodyPart) => {
      if (bodyPart[0] === snakeHead[0] && bodyPart[1] === snakeHead[1]) {
        setAlertMessage("OUCH! You just ate your own body.");
        gameOver();
      }
    });

    switch (snakeDirection) {
      case "RIGHT":
        snakeHead = [snakeHead[0] + 20, snakeHead[1]];
        break;
      case "DOWN":
        snakeHead = [snakeHead[0], snakeHead[1] + 20];
        break;
      case "LEFT":
        snakeHead = [snakeHead[0] - 20, snakeHead[1]];
        break;
      case "UP":
        snakeHead = [snakeHead[0], snakeHead[1] - 20];
        break;
    }
    pieces.push(snakeHead);
    pieces.shift();
    setSnakePieces(pieces);
  };

  const feedSnake = () => {
    let pieces = [...snakePieces];
    let snakeHead = pieces[pieces.length - 1];
    let newScore = score;

    switch (snakeDirection) {
      case "RIGHT":
        snakeHead = [snakeHead[0] + 20, snakeHead[1]];
        break;
      case "DOWN":
        snakeHead = [snakeHead[0], snakeHead[1] + 20];
        break;
      case "LEFT":
        snakeHead = [snakeHead[0] - 20, snakeHead[1]];
        break;
      case "UP":
        snakeHead = [snakeHead[0], snakeHead[1] - 20];
        break;
    }
    pieces.push(snakeHead);
    setSnakePieces(pieces);
    setScore((newScore += 20));
    generateFood();
  };

  const gameOver = () => {
    if (alertMessage) {
      setScenario("GAME OVER");
    }
  };

  useEffect(() => {
    if (isPaused) {
      setScenario("PAUSE");
    } else {
      setScenario("GAMEPLAY");
    }
  }, [isPaused]);

  useEffect(() => {
    if (
      snakePieces[snakePieces.length - 1][0] === foodPosition[0] &&
      snakePieces[snakePieces.length - 1][1] === foodPosition[1]
    ) {
      feedSnake();
    }
  }, [snakePieces, foodPosition]);

  useEffect(() => {
    if (scenario === "GAMEPLAY") {
      const interval = setInterval(() => {
        moveSnake();
      }, speed);
      return () => clearInterval(interval);
    }
  }, [scenario, snakeDirection, snakePieces]);

  useEffect(() => {
    generateFood();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  return (
    <Wrapper>
      <Title>Feed the Snake</Title>
      <ButtonWrapper>
        <div>
          <Button isActive={speed === 75} onClick={() => setSpeed(75)}>
            x1
          </Button>
          <Button isActive={speed === 50} onClick={() => setSpeed(50)}>
            x2
          </Button>
          <Button isActive={speed === 25} onClick={() => setSpeed(25)}>
            x3
          </Button>
        </div>
        <Score>
          <ScoreKey>SCORE:</ScoreKey> {score}
        </Score>
        <GameplayButton onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "PLAY" : "PAUSE"}
        </GameplayButton>
      </ButtonWrapper>
      <GameBoard>
        {(scenario === "GAMEPLAY" || scenario === "PAUSE") && (
          <>
            <Snake snakePieces={snakePieces} />
            <Food food={foodPosition} />
          </>
        )}
      </GameBoard>
      {scenario === "GAME OVER" && <Alert message={alertMessage} />}
    </Wrapper>
  );
};

export default Board;
