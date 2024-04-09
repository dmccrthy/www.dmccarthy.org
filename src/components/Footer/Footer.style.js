import styled from "styled-components";

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;

    background-color: #111111;
    color: #ffffff;

`

export const FooterItems = styled.div`
    display: flex;
    align-items: center;
    height: 5vw;
    min-height: 75px;
    margin-right: 1vw;
    
    p {
      margin-right: 1vw;
    }

    a {
      color: #ffffff;
      transition: 1s;
    }

    a:hover {
      position: relative;
      background: linear-gradient(103deg, rgba(255,147,0,1) 0%, rgba(243,34,89,1) 40%, rgba(205,75,208,1) 59%, rgba(132,47,167,1) 74%);;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .logo {
      margin-right: auto;
      margin-left: 2vw;
    }

    img {
      max-width: 4vw;
      min-width: 50px;
      filter: invert(0%) sepia(9%) saturate(25%) hue-rotate(331deg) brightness(89%) contrast(81%);
    }

    @media all and (orientation: portrait) {
      img {
        display: none;
      }

      display: flex;
      justify-content: center;
    }
`

