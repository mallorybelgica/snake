import styled from "styled-components";
import { SnakeType } from "../../types/types";

interface Props {
  position?: SnakeType;
}

export const SnakePiece = styled.span<Props>`
  position: absolute;
  background-color: #a0c431;
  width: 20px;
  height: 20px;
  top: ${(props) => props.position?.top};
  left: ${(props) => props.position?.left};
  z-index: 1;
`;
