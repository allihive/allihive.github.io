import React from "react";
import alice from "../assets/logo/alice.svg";
import port from "../assets/logo/port.svg";
import folio from "../assets/logo/folio.svg";
// import portrait from "../assets/IMG_3152.jpg"
// import darkPortrait from "../assets/IMG_3153.jpg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
          <img src={port} className="port"></img>
          <div className="hero-image">
			<img src={alice} className="alice"></img>
          </div>
          <img src={folio} className="folio"></img>
    </section>
  );
};

export default Hero;
