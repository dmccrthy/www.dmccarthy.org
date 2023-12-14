import { createGlobalStyle } from "styled-components";

import "@fontsource/montserrat";
import "@fontsource/karla";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat";
  }

  p {
    font-family: "Karla";
  }

  a {
    color: black
  }
`

export default GlobalStyle