
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: baseline;
    
    h1 {
      color: #FFF;
    }
    
    p {
      margin: 0;
    }
  }
`