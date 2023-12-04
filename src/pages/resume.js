import React from "react";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/Head"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84vh;
`

const ResumePage = () => {
    return (
        <main>
            <GlobalStyle />
            <Navbar />
            <ContentWrapper>
                <h1>
                    Under Construction...  
                </h1>
            </ContentWrapper>
            <Footer />
        </main>
    )
}

export default ResumePage

export const Head = () => <DefaultHead title={"Resume | Dan McCarthy"}/>