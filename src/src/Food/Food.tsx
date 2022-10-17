import React from "react";
import { FoodElement } from "./FoodStyles";

interface FoodProps {
  food: Array<number>;
}

const Food = (props: FoodProps) => {
  const position = {
    left: `${props.food[0]}px`,
    top: `${props.food[1]}px`,
  };
  return <FoodElement position={position}></FoodElement>;
};

export default Food;
