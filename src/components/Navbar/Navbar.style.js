import styled from "styled-components";

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    
    height: 60px;
    width: 100vw;

    .logo {
        margin-right: 10px;
        cursor: pointer;
    
        img {
          max-width: 10vw;
        }
      }
`

export const  NavItems = styled.nav`
      display: flex;
      justify-content: space-around;
`