import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
