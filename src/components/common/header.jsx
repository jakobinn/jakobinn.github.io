import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/header.css";

const Header = ({ title }) => {
	return (
		<React.Fragment>
			<div className="header-container">
				{/* <div className="header-icon">
					<FontAwesomeIcon icon={icon} />
				</div> */}
				<h3 className="header-title">{title}</h3>
				<div className="header-line" />
			</div>
		</React.Fragment>
	);
};

export default Header;
