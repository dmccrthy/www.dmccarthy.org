import styled from "styled-components";


export const NavWrapper = styled.div`
    display: flex;
    
    height: 8vh;
    width: 100vw;

    .logo {
        margin-right: auto;
        cursor: pointer;
    
        img {
          max-width: 82px;
        }
      }
`

export const  NavItems = styled.nav`
      display: flex;
      align-items: center;

      a {
        margin-right: 3vw;
        font-size: 1.5em;
      }
`
