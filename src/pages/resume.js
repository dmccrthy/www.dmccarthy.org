import React from "react";
import styled from "styled-components";

import DefaultHead from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-color: #191919;
`;

const ResumePage = () => {
  return (
    <main>
      <Navbar />
      <div>
        <TempContainer>
          <h1>Under Construction...</h1>
        </TempContainer>
      </div>
      <Footer />
    </main>
  );
};

export default ResumePage;

export const Head = () => <DefaultHead title={"Resume | Dan McCarthy"} />;
