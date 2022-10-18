import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #575757;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const KeyboardShortcut = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
