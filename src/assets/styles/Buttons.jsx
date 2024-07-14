import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "5px 25px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "45px"};
  background-color: ${(props) => props.bgcolor || "#0F172A"};
  color: ${(props) => props.color || "#fff"};
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  border: none;
  font-weight: 500;
  line-height: 20px;
`;
