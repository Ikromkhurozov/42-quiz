import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    padding:0;
    margin:0;
    overflow: hidden;
    
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: inherit;
    }

    &::-webkit-scrollbar-thumb {
      background: #0F172A;
      height: 80px;
      border-radius: 25px;
    }

    .ant-modal-content {
      border-radius: 10px;
    }
  }
  
  a{
    text-decoration: none;
  }
`;

export const RootWrapper = styled.div`
  background-color: inherit;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;