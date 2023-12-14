import styled from "styled-components";


export const NavWrapper = styled.div`
    display: flex;
    align-items: center;

    height: 6vw;
    width: 100vw;

    .logo {
        margin-right: auto;
        margin-left: 1vw;
        cursor: pointer;
    
        img {
          max-width: 4vw;
          min-width: 30px;
        }
      }
`

export const  NavItems = styled.nav`
      display: flex;
      align-items: center;

      a {
        margin-right: 3vw;
        color: #1D3C74;
        text-decoration: none;
        padding: 10px;
        font-size: 1.5em;
      }

      a:hover {
        background-color: #caf4ff;
        border-radius: 10px;
      }
`
