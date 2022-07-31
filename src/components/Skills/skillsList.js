import React from "react";

import htmlIcon from "../../assets/icons/html.png";
import bootstrapIcon from "../../assets/icons/bootstrap.png";
import cssIcon from "../../assets/icons/css.png";
import sassIcon from "../../assets/icons/sass.png";
import jsIcon from "../../assets/icons/js.png";
import tsIcon from "../../assets/icons/ts.png";
import jqueryIcon from "../../assets/icons/jquery.png";
import reactIcon from "../../assets/icons/react.png";
import vueIcon from "../../assets/icons/vue.png";
import nodeIcon from "../../assets/icons/node.png";
import threeIcon from "../../assets/icons/three.png";
import gitIcon from "../../assets/icons/git.png";
import figmaIcon from "../../assets/icons/figma.png";
import canvaIcon from "../../assets/icons/canva.png";
import interfaceIcon from "../../assets/icons/interface.png";

const skillsList = () => {
	const skills = [
		{
			name: "HTML5",
			icon: htmlIcon,
		},
		{
			name: "Bootstrap",
			icon: bootstrapIcon,
		},
		{
			name: "CSS3",
			icon: cssIcon,
		},
		{
			name: "Sass",
			icon: sassIcon,
		},
		{
			name: "JavaScript",
			icon: jsIcon,
		},
		{
			name: "TypeScript",
			icon: tsIcon,
		},
		{
			name: "jQuery",
			icon: jqueryIcon,
		},
		{
			name: "React.js",
			icon: reactIcon,
		},
		{
			name: "Vue.js",
			icon: vueIcon,
		},
		{
			name: "Node.js",
			icon: nodeIcon,
		},
		{
			name: "Three.js",
			icon: threeIcon,
		},
		{
			name: "Git",
			icon: gitIcon,
		},
		{
			name: "Figma",
			icon: figmaIcon,
		},
		{
			name: "Canva",
			icon: canvaIcon,
		},
		{
			name: "Interface Design",
			icon: interfaceIcon,
		},
	];

	return (
		<div>
			<h1 className="grid-title">Skills</h1>
			<ul className="skills-list">
				{skills.map((index, item) => {
					return (
						<li key={index.name}>
							{skills[item].name}
							<img src={index.icon} className="skill-list-icon" />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default skillsList;
