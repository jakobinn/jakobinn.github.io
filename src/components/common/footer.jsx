import React from "react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/footer.css";

const Footer = () => {
	return (
		<div className="footer">
			Created by Jakob with{" "}
			<FontAwesomeIcon icon={faReact} className="footer-react-icon" />{" "}
			with the help of{" "}
			<span role="img" aria-label="hot beverage">
				☕
			</span>
			<span
				role="img"
				aria-label="smiling face with smiling eyes and hot beverage"
			>
				😊
			</span>
		</div>
	);
};

export default Footer;
