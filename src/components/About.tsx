import React from "react"
import "./About.css"

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                <h2>About Me</h2>
                <p>
                    Hello, my name is Alice!
                </p>
                <p>
                    I love software development especially when it comes to designing and coding websites! I recently finished the curriculum from Hive Helsinki (a 42 school) where we studied low level languages, C and C++, to understand how the software and hardware communicate.
                </p>
                <p>
                    When I'm not coding, I enjoy knitting, crocheting, fashion styling, swimming in the Baltic Sea, and biking!
                </p>
                </div>
                {/* <div className="about-image">
                    <img src={} alt="Alice's face"></img>
                </div> */}
            </div>
        </section>
    )
}

export default About