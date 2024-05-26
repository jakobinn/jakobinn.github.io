import React from "react";
import "./styles/backButton.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<div className="back-button" onClick={() => navigate("/")}>
			<FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
		</div>
	);
};

export default BackButton;
