import React from "react";
import logo from "/src/img/logo2.png"
import { FooterWrap, FooterItems } from "./Footer.style";

const Footer = () => {
    return (
        <FooterWrap>
            <img className="logo" src={logo} alt="danmc" />
            <FooterItems>
                <p>© Dan McCarthy 2023</p>
                <p>|</p>
                <p>Hosted on <a target="_blank" rel="noreferrer" href="https://github.com/dmccrthy/dmccrthy.github.io">GitHub</a></p>
            </FooterItems>
        </FooterWrap>
    )
}

export default Footer