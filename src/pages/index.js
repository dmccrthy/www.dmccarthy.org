// Packages
import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

// Components
import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/SEO"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { ContentWrapper } from "../components/ContentWrapper"
import HeaderArrow from "../components/HeaderArrow"

// Images
import linkedin from "../img/icons/linkedin.svg"
import github from "../img/icons/github.svg"
import me from "../img/danmc.jpg"
import arrow from "../img/arrow.png"
import projects from "../img/projects.png"
import games from "../img/games.png"
import construction from "../img/construction.png"

// Styles
const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #191919;

  height: 100vh;
  width: 100vw;
  padding: 1vw;
  min-width: 400px;
  

  h1 {
    font-size:calc(2em + 4vw);
    font-weight: bold;
    margin-bottom: 1vh;
  }

  p {
    font-size:calc(1em + 1vw);
    margin-top: 5vh;
  }

  hr {
    max-height: 15px;
    height: 1vw;
    width: 45vw;
    background: linear-gradient(103deg, rgba(255,147,0,1) 0%, rgba(243,34,89,1) 40%, rgba(205,75,208,1) 59%, rgba(132,47,167,1) 74%);
    border: 0;
  }

  h1, p, hr {
    margin-left: 1vw;
  }

  #header-arrow {
    position: absolute;
    bottom: 3vw;
    left: 45vw;
    width: 10vw;
    height: 10vh;
    cursor: pointer;
    transition: 1s;
  }

  #header-arrow:hover {
    bottom: 2vw;
  }

  @media all and (orientation: portrait) {
    h1 {
      font-size:calc(3em + 4vw);
    }

    hr {
      width: 90vw;
      height: 1vh;
      margin-bottom: 1vh;
    }

    padding: 2vh;
  }
`

const Socials = styled.div`
  display: flex;
  margin-left: 1vw;

  a {
    margin: .5vw;
    padding: .5vw;
  }

  img {
    max-width: 2vw;
    min-width: 20px;
    filter: invert(100%) sepia(0%) saturate(7441%) hue-rotate(152deg) brightness(114%) contrast(103%);
    transition: .5s, filter 0s;
  }

  img:hover {
    transform: scale(1.05)
  }

  .linkedin:hover {
    filter: invert(51%) sepia(38%) saturate(1745%) hue-rotate(3deg) brightness(110%) contrast(102%);
  }

  .git:hover {
    filter: invert(18%) sepia(93%) saturate(2131%) hue-rotate(270deg) brightness(95%) contrast(89%);
  }

  @media all and (orientation: portrait) {
    img {
      max-width: 8vw;
    }
  }
`

const AboutBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 75vh;
  z-index: -3;
  overflow: hidden;
  background-color: #111111;

  h1, h2 {
    margin: 2vw;
  }

  p {
    margin-left: 2vw;
    margin-bottom: 2vw;
  }
`

const AboutMe = styled.div`
  position: fixed;
  z-index: -1;
  left: 5vw;
  top: 30vh;

  display: flex;

  transform: skewY(-2deg);
  background-color: #191919;
  border-radius: 1vw;
  box-shadow: #303030 1vw 1vw;
  height: 40vh;
  width: 90vw;

  @media all and (orientation: portrait) {
    padding: 1vh;
  }
`
const AboutText = styled.div`
  width: 45vw;
  overflow: hidden;

  p {
    font-size:calc(1em + .5vw);
  }

  @media all and (orientation: portrait) {
    width: 100%;

    p {
      font-size: 1em;
    }
  }
`

const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  overflow: hidden;

  img {
    width: 230px;
    height: 20vh;
    border-radius: 50%;
    border: 5px solid #f8f8f8;
    overflow: hidden;
    margin: 0;
    background-color: #f8f8f8;
  }
`

const MoreContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 800px;
  height: 50vh;
  background-color: #191919;
  
  @media all and (orientation: portrait) {
    flex-direction: column
  }
`
const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 40vh;
  background-color: #111111;
  border-radius: 1vw;
  box-shadow: #303030 1vh 1vh;
  margin-right: 2vw;
  overflow-y: hidden;

  h1 {
    position: absolute;
  }

  .image {
    display: flex;
    justify-content: center;
    allign-items: center;
    opacity: .2;
    transition: .5s;
  }

  .image:hover {
    opacity: .6;

    .down {
      pointer-events: none;
    }
  }

  @media all and (orientation: portrait) {
    width: 90vw;
    height: 40vh;
    margin-bottom: 2vh;

    h1 {
      font-size: 1em;
    }
  }
`

// *rename
const TextBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 10vh;
  background-color: #191919;
`

const TextBox = styled.div`
  height: 8vh;
  width: 20vw;
  margin-left: 2vw;
  background-color: #303030;
  border-radius: 1vw;
  box-shadow: #111111 1vh 1vh;
`
//

const TopSlant = styled.div`
  position: absolute;

  top: 85%;

  x-overflow: hidden;

  width: 120vw;
  height: 20vh;
  margin-left: -1vw;
  background-color: #191919;
  transform: skewY(-2deg);
  z-index: -1;
`

const BottomSlant = styled.div`
  position: absolute;

  top: 170%;

  x-overflow: hidden;

  width: 120vw;
  height: 20vh;
  background-color: #191919;
  transform: skewY(-2deg);
  z-index: -1;
`

// const SideImage = styled.div`
//   height: 92vh;
//   width: 45vw;
//   background-image: url(${side});
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-size: 92vh 45vw;
// `


// Main Webpage
const IndexPage = () => {
  // Function scrolls page on click
  const scrollHandler = () => {
    const element = document.getElementById("header-arrow");
    if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return ( //This all the HTML stuff :)
    <main>
      <GlobalStyle />
      <Navbar />
      <ContentWrapper>
        <PageHeader>
          <p>Hi, I'm</p>
          <h1>Dan McCarthy</h1>
          <hr></hr>
          <Socials>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dmccrthy/">
              <img className="linkedin" src={linkedin} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/dmccrthy">
              <img className="git" src={github} />
            </a>
          </Socials>
          {/* <img id="header-arrow" src={arrow} onClick={scrollHandler}/> */}
          <TopSlant />
        </PageHeader>
        <AboutBackground>
          <AboutMe>
            <AboutText>
              <h1>About Me:</h1>
              <p>
                Hi, I'm Dan. I'm a student passionate about Computer Science and IT. I’m currently working towards a CCNA and am going study Computer Science next year. In my free time I like to build projects which I sometimes post to my github, and itch accounts. If you'd like to check those out, links can be found below.
              </p>
            </AboutText>
            <AboutImage>
              {/* <img src={me} /> */}
            </AboutImage>
          </AboutMe>
        </AboutBackground>

        <BottomSlant />
        <MoreContent>
          <PageBox> 
            <h1>Projects</h1>
            <Link className="image" to="/projects"> 
              <img src={projects}/>
            </Link>
          </PageBox>
          <PageBox> 
            <h1>Games</h1>
            <a className="image" target="_blank" rel="noreferrer" href="https://danmc.itch.io/"> 
              <img src={games}/>      
            </a>
          </PageBox>
          <PageBox> 
            <h1>Under Construction...</h1>
            <a className="image down">
              <img src={construction}/> 
            </a>
          </PageBox>
        </MoreContent>

        <hr />


        <TextBar>
          <TextBox>

          </TextBox>
          <TextBox>

          </TextBox>
          <TextBox>

          </TextBox>
          <TextBox>

          </TextBox>
        </TextBar>
      </ContentWrapper>
      <Footer />
    </main>
  )
}

export default IndexPage

// Header Contents
export const Head = () => <DefaultHead title={"Dan McCarthy - About Me"} />

