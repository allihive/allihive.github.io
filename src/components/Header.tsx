import React from 'react';
import "./Header.css"
import Logo from "../assets/Logo.svg"

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Software/Web</a>
                    <img width="150px" src={Logo} alt="ALM logo"/>
                    <a href="#uxProjects">UX/UI</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;