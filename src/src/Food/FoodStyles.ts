import styled from "styled-components";
import { FoodType } from "../../types/types";

interface Props {
  position?: FoodType;
}

export const FoodElement = styled.span<Props>`
  position: absolute;
  top: ${(props) => props.position?.top};
  left: ${(props) => props.position?.left};
  height: 20px;
  width: 20px;
  border-radius: 100px;
  background-color: #95190c;
  z-index: 0;
`;
