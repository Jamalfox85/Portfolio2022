import React from "react";

import ThreeHero from "../scenes/ThreeHero";

const Hero = () => {
	return (
		<div className="hero-wrapper">
			<div className="hero-text">
				<h1>Jamal Fox</h1>
				<h2>Front End Developer</h2>
				<button className="contact-button">Contact</button>
			</div>
			<ThreeHero />
		</div>
	);
};

export default Hero;
