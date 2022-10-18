import styled from "styled-components";
import Board from "./src/Board/Board";
import Instructions from "./src/Instructions/Instructions";

function App() {
  return (
    <Wrapper>
      <Board />
      <Instructions />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
