import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;

`

export const  NavItems = styled.nav`
  display: flex;
  position: absolute;
  top: 3vh;
  right: 0vw;


  .logo {
    cursor: pointer;

    img {
      max-width: 4vw;
      min-width: 30px;
      filter: invert(0%) sepia(72%) saturate(4950%) hue-rotate(106deg) brightness(82%) contrast(87%);
    }
  }

  a {
    margin-right: 2vw;
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px;
    margin-top: 0vh;
    font-size:calc(.5em + 1vw);
    transition: 1s;
  }

  a:hover {
    margin-top: .5vh;
  }

  .orange:hover {
    color: #ff9300;
  }
  
  .red:hover {
    color: #f32259;
  }

  .purple:hover {
    color: #842fa7;
  }
`
