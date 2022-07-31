import React from "react";

import github from "../../assets/images/github.png";
import youtube from "../../assets/images/youtube.png";
import dribbble from "../../assets/images/dribbble.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

const exploreMore = () => {
	const externalLinks = [
		{
			name: "Github",
			image: github,
			color: "rgb(124, 0, 124)",
		},
		{
			name: "Youtube",
			image: youtube,
			color: "rgb(247, 0, 0)",
		},
		{
			name: "Blog",
			image: youtube,
			color: "rgb(0, 0, 0)",
		},
		{
			name: "Dribbble",
			image: dribbble,
			color: "rgb(224, 75, 133)",
		},
		{
			name: "LinkedIn",
			image: linkedin,
			color: "rgb(10, 99, 188)",
		},
		{
			name: "Instagram",
			image: instagram,
			color:
				"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
		},
		{
			name: "Twitter",
			image: twitter,
			color: "rgb(28, 155, 233)",
		},
	];

	return (
		<div>
			<h1 className="grid-title">Explore More</h1>
			<div className="external-links">
				{externalLinks.map((item, index) => {
					return (
						<div
							key={item.name}
							className="external-link-square"
							style={{ backgroundColor: item.color }}
						>
							<img src={item.image} className="external-link-image" />
							<p>{item.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default exploreMore;
