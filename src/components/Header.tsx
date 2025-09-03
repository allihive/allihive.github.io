import React from 'react';
import "./Header.css"

const Header: React.FC = () => {
    return (
        <div>
            <h1>Alice Li Maunumäki</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}

export default Header;