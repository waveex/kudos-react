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
  .DraftEditor-editorContainer {
    overflow: auto !important;
  }
  .selectGroup .css-yt9ioa-option,
  .selectGroup .css-1n7v3ny-option {

    display: grid;
    align-items: center;
    gap: 8px;
    grid-template-columns: 30px 1fr;

  }
  .selectGroup .css-1n7v3ny-option::before,
  .selectGroup .css-yt9ioa-option::before {
    content:"";
    display: block;

    width: 24px;
    height: 24px;
    background: url('https://raw.githubusercontent.com/waveex/kudos-react/6fe75857c6c0bbcf7b729b0aef78264c542552c1/src/assets/img/icons/city-solid.svg') no-repeat;
    background-size: cover;
     position: relative;

  }
`;
