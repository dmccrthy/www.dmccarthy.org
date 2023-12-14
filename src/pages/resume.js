import React from "react";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle"
import DefaultHead from "../components/SEO"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { ContentWrapper } from "../components/ContentWrapper"

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