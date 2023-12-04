import styled from "styled-components";

export const FooterWrap = styled.div`
    display: flex;
    
    height: 8vh;
    width: 100vw;

    background-color: #2c282c;
    color: #ffffff;

    a {
      color: #ffffff;
    }

    .logo {
        margin-right: auto;
    
        img {
          max-width: 75px;
        }
      }
`

export const FooterItems = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1vw;
    
    p {
      margin-right: 1vw;
    }
`