import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

import "./styles/project.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Project = (props) => {
	const {
		logo,
		productKey,
		title,
		description,
		linkText,
		link,
		links,
		isDown,
		linkType,
		showPage,
		languages,
		logoLanguages,
		descriptionTech,
	} = props;

	const [isHovered, setIsHovered] = React.useState(false);

	const truncateText = (text, limit) => {
		const words = text.split(" ");
		if (words.length > limit) {
			return words.slice(0, limit).join(" ") + "...";
		}
		return text;
	};

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	return (
		<React.Fragment>
			<div className="project">
				<Link to={showPage ? `/project?type=${productKey}` : link}>
					<div className="project-container">
						{isDown ? (
							<span className="is-down-text">
								This site is down and is being switched to a new
								domain and will be back soon
							</span>
						) : null}
						<div className="project-logo-wrapper">
							{logoLanguages?.map((logoLanguage, index) => {
								let linkTemp = `https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/${logoLanguage}/${logoLanguage}_32x32.png`;
								return (
									<div key={index} className="project-logo">
										<img src={linkTemp} alt="logo" />
									</div>
								);
							})}
						</div>
						<div className="project-body">
							<div className="project-title">{title}</div>
							<div className="project-description">
								{description}
							</div>

							<div className={"project-languages"}>
								{languages?.map((langauge, key) => {
									return (
										<div
											key={key}
											className="project-language"
										>
											{langauge}
										</div>
									);
								})}
							</div>

							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon
										icon={
											linkType === "GITHUB"
												? faGithub
												: faLink
										}
									/>
								</div>

								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
