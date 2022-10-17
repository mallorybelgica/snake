import React from "react";
import { SnakePiece } from "./SnakeStyles";

interface SnakeProps {
  snakePieces: Array<Array<number>>;
}

const Snake = (props: SnakeProps) => {
  return (
    <div>
      {props.snakePieces.map((piece, index) => {
        const position = {
          left: `${piece[0]}px`,
          top: `${piece[1]}px`,
        };
        return <SnakePiece key={index} position={position}></SnakePiece>;
      })}
    </div>
  );
};

export default Snake;
