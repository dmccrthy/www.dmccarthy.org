import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat"
  }

  p {
    font-family: "Karla"
  }

  a {
    color: black
  }
`

export default GlobalStyle