import styled from "styled-components";
import { font } from "../../assets/styles/mixins.js";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;

  h2 {
    ${font("8rem", "1rem", "700", "#0F172A")};
    margin: 50px 0;
  }

  p {
    ${font("24px", "1rem", "600", "#0F172A")};
  }

  button {
    ion-icon {
      font-size: 22px;
      margin-right: 10px;
    }
  }
`;
