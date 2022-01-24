import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
  }

  body, input, textarea, button, select {
    font: 400 1rem 'Montserrat', sans-serif;
  }
`;
