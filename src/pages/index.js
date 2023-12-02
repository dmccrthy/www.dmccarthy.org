import * as React from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/Head"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const ContentWrapper = styled.div`
  display: flex;
`

const AboutMe = styled.div`
  flex-direction: column;
  width: 50vw;
`

const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <Navbar />
      <ContentWrapper>
        <AboutMe>
          <h1>Hi, I'm Dan</h1>
          <p>I'm a student passionate about working in Computer Science and IT. I’m in my 3rd year of Computer Networking and currently serve as the Captain of our CyberPatriot team. Through these endeavors and many more, I have learned both technical and teamwork skills which I hope to develop further. In the future, I hope to continue learning and plan to focus on my interest in Computer Science as I go on to higher education.</p>
        </AboutMe>
     </ContentWrapper>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => (
    <DefaultHead>
      <title>
        Home
      </title>
    </DefaultHead>

)
