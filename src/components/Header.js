import React from "react";

const Header = () => {
	return (
		<div className="nav-wrapper">
			<div className="expand-menu">
				<div className="expand-menu-line" id="line-1"></div>
				<div className="expand-menu-line" id="line-2"></div>
				<div className="expand-menu-line" id="line-3"></div>
			</div>
			<button className="contact-button">Contact</button>
		</div>
	);
};

export default Header;
