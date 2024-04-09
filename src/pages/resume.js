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

const ResumePage = () => {
    return (
        <main>
            <GlobalStyle />
            <Navbar />
            <ContentWrapper>
                <TempContainer>
                    <h1>
                        Under Construction...  
                    </h1>
                </TempContainer>
            </ContentWrapper>
            <Footer />
        </main>
    )
}

export default ResumePage

export const Head = () => <DefaultHead title={"Resume | Dan McCarthy"}/>