import { createGlobalStyle } from 'styled-components';
import './fonts.css'
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  a, button {
    font-family: 'Poppins', sans-serif;
    transition: .3s all ease-in-out;
  }
  * {
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .auto {
    overflow: auto;
  }
  .hidden {
    overflow: hidden;
  }
`;
