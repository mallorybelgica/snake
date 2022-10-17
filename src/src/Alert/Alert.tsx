import React from "react";
import { Wrapper, Header, Popup, Button, Message } from "./AlertStyles";

interface AlertProps {
  message: string;
}

const Alert = (props: AlertProps) => {
  return (
    <Wrapper>
      <Popup>
        <Header>Game Over!</Header>
        <Message>{props.message}</Message>
        <Button onClick={() => window.location.reload()}>Restart</Button>
      </Popup>
    </Wrapper>
  );
};

export default Alert;
