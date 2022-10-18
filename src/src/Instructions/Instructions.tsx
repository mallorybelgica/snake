import {
  ListWrapper,
  Wrapper,
  KeyboardShortcut,
  ListItem,
} from "./IntructionsStyles";

const Instructions = () => {
  return (
    <Wrapper>
      <ListWrapper>
        <ListItem>
          <KeyboardShortcut>spacebar</KeyboardShortcut>Play/Pause
        </ListItem>
        <ListItem>
          <KeyboardShortcut>1</KeyboardShortcut>1x speed
        </ListItem>
        <ListItem>
          <KeyboardShortcut>2</KeyboardShortcut>2x speed
        </ListItem>
        <ListItem>
          <KeyboardShortcut>3</KeyboardShortcut>3x speed
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

export default Instructions;
