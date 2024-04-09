import { createGlobalStyle } from "styled-components";

import "@fontsource/montserrat";
import "@fontsource/karla";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;

    color-scheme: dark;
  }

  html {
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", Arial;
    color: #ffffff;
  }

  p {
    font-family: "Karla", Arial;
    color: #ffffff;
  }

  a {
    color: white
  }
`

export default GlobalStyle