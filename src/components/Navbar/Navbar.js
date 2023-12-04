import React from "react";
import { Link } from "gatsby";
import logo from '/src/img/logo1.png';
import { NavWrapper, NavItems } from "./Navbar.style";


const Navbar = () => {
    return (
        <NavWrapper>
            <Link className="logo" to="/">
                <img className="logo" src={logo} alt="" />
            </Link>
            <NavItems>
                <Link to="/">
                    <h1>
                        Home
                    </h1>
                </Link>
                <Link to="/resume">
                    <h1>
                        Resume
                    </h1>
                </Link>
                <Link to="/projects">
                    <h1>
                        Projects
                    </h1>
                </Link>
            </NavItems>
        </NavWrapper>
    )
}

export default Navbar