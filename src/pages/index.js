// Packages
import * as React from "react"
import styled from "styled-components"

// Components
import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/SEO"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { ContentWrapper } from "../components/ContentWrapper"

// Images
import temp from "../img/bg1.jpg"
import linkedin from "../img/icons/linkedin.svg"
import github from "../img/icons/github.svg"

// Styles

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 84vh;
  width: 45vw;
  padding: 1vw;
  min-width: 200px;


  h1 {
    font-size: 6em;
    font-weight: bold;
    margin-bottom: 1vh;
    background: linear-gradient(139deg, rgba(0,199,254,1) 0%, rgba(0,115,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  p {
    font-size: 2em;
    color: #1D3C74;
    margin-top: 5vh;
  }

  hr {
    height: 1vh;
    background: linear-gradient(139deg, rgba(0,199,254,1) 0%, rgba(0,115,255,1) 100%);
    border: 0;
  }
`

const Socials = styled.div`
  display: flex;

  a {
    margin: 1vw;

    img {
      max-width: 2vw;
      filter: invert(19%) sepia(94%) saturate(614%) hue-rotate(183deg) brightness(97%) contrast(96%);
    }
  }
`

const AboutMe = styled.div`
  width: 100vw;
  background: linear-gradient(217deg, rgba(58,59,78,1) 0%, rgba(29,60,116,1) 100%);
  color: #ffffff;

  h1, h2 {
    margin: 2vw;
  }

  p {
    margin-left: 2vw;
    margin-bottom: 2vw;
  }
`

const ImageGal = styled.div`
  display: flex;

  height: 92vh;
  width: 45vw;

  img {
    max-width: 50vw;
    max-height: 80vh;
    margin: 5vw;
    border-style: solid;
    border-width: 4px;
    border-color: #1D3C74;
    border-radius: 10%;
  }
`

// Webpage
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <Navbar />
      {/* <hr></hr> */}
      <ContentWrapper>
        <AboutHeader>
          <p>Hi, I'm</p>
          <h1>Dan McCarthy</h1>
          <hr></hr>
          <Socials>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dmccrthy/">
              <img src={linkedin} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/dmccrthy">
              <img src={github} />
            </a>
          </Socials>
        </AboutHeader>
        <ImageGal>
          <img src={temp} alt=""/>
        </ImageGal>
        <AboutMe>
          <h2>
            About Me:
          </h2>
          <p>
          Hi, I'm Dan. I'm a student passionate about working in Computer Science and IT. I’m in my 3rd year of Computer Networking and currently serve as the Captain of our CyberPatriot team. Through these endeavors and many more, I have learned both technical and teamwork skills which I hope to develop further. In the future, I hope to continue learning and plan to focus on my interest in Computer Science as I go on to higher education.
          </p>
        </AboutMe>
      </ContentWrapper>
      <Footer />
    </main>
  )
}

export default IndexPage

// Header Contents
export const Head = () => <DefaultHead title={"Dan McCarthy - Student & Developer"} />

