import React from "react"
import port from "../assets/logo/Portfolio.svg"
import folio from "../assets/logo/folio.svg"
import portrait from "../assets/IMG_3152.jpg"
import "./Hero.css"

const Hero: React.FC = () => {
	return (
		<section id="hero" className="hero">
			<img src={port}></img>
			<div className="hero-image">
				<img src={portrait}></img>
			</div>
			<img src={folio}></img>
		</section>
	)
}

export default Hero