// Packages
import * as React from "react"
import styled from "styled-components"

// Components
import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/Head"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

// Images
import temp from "../img/bg1.jpg"
import linkedin from "../img/icons/linkedin.svg"
import github from "../img/icons/github.svg"

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
`

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 92vh;
  width: 45vw;
  padding: 1vw;
  min-width: 200px;


  h1 {
    font-size: 4em;
    margin-bottom: 2vh;
  }

  p {
    font-size: 2em;
    margin-top: 5vh;
  }
`

const Socials = styled.div`
  display: flex;

  a {
    margin: 1vw;

    img {
      max-width: 2vw;
    }
  }
`

const AboutMe = styled.div`
  width: 100vw;
  background-color: #323332;
  color: #ffffff;
`

const ImageGal = styled.div`
  display: flex;

  height: 92vh;
  width: 45vw;

  img {
    max-width: 50vw;
    max-height: 80vh;
    margin: 5vw;
  }
`

const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <Navbar />
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

export const Head = () => <DefaultHead title={"Dan McCarthy - Student & Developer"} />

