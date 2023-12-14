import styled from "styled-components";

export const FooterWrap = styled.div`
    display: flex;
    align-items: center;

    height: 5vw;
    width: 100vw;

    background-color: #001b4c;
    color: #ffffff;

    a {
      color: #ffffff;
    }

    .logo {
      margin-right: auto;
      margin-left: 2vw;
    }

    img {
      max-width: 4vw;
      min-width: 30px;
      filter: invert(15%) sepia(42%) saturate(3817%) hue-rotate(209deg) brightness(88%) contrast(83%);
    }
`

export const FooterItems = styled.div`
    display: flex;

    margin-right: 1vw;
    
    p {
      margin-right: 1vw;
    }
`