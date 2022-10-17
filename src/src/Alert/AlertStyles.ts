import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 200px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Header = styled.h2`
  color: #575757;
  font-size: 36px;
  margin: 15px 0;
`;

export const Button = styled.button`
  background-color: #39a0ed;
  color: #fff;
  height: 40px;
  width: 100px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
`;

export const Message = styled.p`
  color: #8a8a8a;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
