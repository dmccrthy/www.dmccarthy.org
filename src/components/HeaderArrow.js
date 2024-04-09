import React from "react"
import styled from "styled-components"
import arrow from "../img/arrow.png"

const ArrowContainer = styled.div`
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
        animation: tweenDown 1s;
    }
`

const HeaderArrow = () => {
    const scrollHandler = () => {
        const element = document.getElementById({ArrowContainer});
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <ArrowContainer>
            <img id="header-arrow" src={arrow} onClick={scrollHandler()}/>
        </ArrowContainer>
    )
}

export default HeaderArrow