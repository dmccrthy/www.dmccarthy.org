import React from "react";
import logo from "/src/img/footer.png"
import { GradientBar } from "../GradientBar";
import { FooterWrap, FooterItems } from "./Footer.style";

const Footer = () => {
    return (
        <FooterWrap>
            <FooterItems>
                <img className="logo" src={logo} alt="danmc" />
                <p>© Dan McCarthy 2023-24</p>
                <p>|</p>
                <p>Hosted on <a target="_blank" rel="noreferrer" href="https://github.com/dmccrthy/dmccrthy.github.io">GitHub</a></p>
            </FooterItems>
            <GradientBar  />
        </FooterWrap>
    )
}

export default Footer