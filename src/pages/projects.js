import React from "react";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/SEO"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { ContentWrapper } from "../components/ContentWrapper"

const TempContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
    background-color: #191919;
`

const ProjectPage = () => {
    return (
        <main>
            <GlobalStyle />
            <Navbar />
            <ContentWrapper>
                <TempContainer>
                    <h1>
                        I'm Working on it...
                    </h1>
                </TempContainer>
            </ContentWrapper>
            <Footer />
        </main>
    )
}

export default ProjectPage

export const Head = () => <DefaultHead title={"Projects | Dan McCarthy"}/>