import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import rebilliaSS from "../../assets/images/project-rebillia.png";
import lolSS from "../../assets/images/project-lol.png";
import goalSS from "../../assets/images/project-goals.png";
import bruiserSS from "../../assets/images/project-bruiser.png";

const ProjectCarousel = () => {
	const [slideData, setSlideData] = useState(0);
	const projectData = [
		{
			name: "Rebillia",
			image: rebilliaSS,
			description: "this is a test description #1",
		},
		{
			name: "League of Legends",
			image: lolSS,
			description: "this is another test description #2",
		},
		{
			name: "Goals",
			image: goalSS,
			description: "this is a test description #1",
		},
		{
			name: "Bruiser Outdoors",
			image: bruiserSS,
			description: "this is another test description #2",
		},
	];

	return (
		<div className="carousel-wrapper">
			<Carousel
				// axis={"vertical"}
				infiniteLoop={true}
				autoPlay={true}
				interval={1000}
				centerMode={true}
				centerSlidePercentage={"95%"}
			>
				{projectData.map((index, item) => {
					return (
						<div className="carousel-item" key={index.name}>
							<img src={index.image} />
							<p className="legend">{index.name}</p>
							<p>{index.name}</p>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default ProjectCarousel;
