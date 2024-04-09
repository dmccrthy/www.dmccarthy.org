import React from "react";
import { Link } from "gatsby";
import { GradientBar } from "../GradientBar";
import { NavWrapper, NavItems } from "./Navbar.style";


const Navbar = () => {
    return (
        <NavWrapper>
            <GradientBar />
            <NavItems>
                <Link to="/">
                    <h1 className="orange">
                        Home |
                    </h1>
                </Link>
                <Link to="/resume">
                    <h1 className="red">
                        Resume |
                    </h1>
                </Link>
                <Link to="/projects">
                    <h1 className="purple">
                        Projects |
                    </h1>
                </Link>
            </NavItems>
        </NavWrapper>
    )
}

export default Navbar