import styled from "styled-components";
import { gameBoardSize, mobileGameBoardSize } from "../../constants/constants";

interface Props {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  margin: 2.5px 0;
`;

export const GameBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;
  width: ${gameBoardSize}px;
  height: ${gameBoardSize}px;
  border: 1px solid #000;
  overflow: hidden;
  background-color: #fff;
  @media (max-width: 480px) {
    width: ${mobileGameBoardSize}px;
    height: ${mobileGameBoardSize}px;
  }
`;

export const SpeedText = styled.p`
  margin-top: 0;
  margin-bottom: 2.5px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-self: center;
  width: ${gameBoardSize}px;
  @media (max-width: 480px) {
    width: ${mobileGameBoardSize}px;
  }
`;

export const Score = styled.div`
  display: flex;
  align-self: center;
`;

export const ScoreKey = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Button = styled.button<Props>`
  color: #fff;
  background: ${(props) => (props.isActive ? "#4C6085" : "#39A0ED")};
  border: none;
  padding: 5px 10px;
  border-radius: 2.5px;
  margin: 5px;
  cursor: pointer;
`;

export const GameplayButton = styled.button`
  color: #fff;
  background: #f96e46;
  border: none;
  text-align: center;
  padding: 5px 10px;
  border-radius: 2.5px;
  margin: 5px;
  width: 75px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
`;
