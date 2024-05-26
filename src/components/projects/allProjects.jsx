import React from "react";

import Project from "./project";

import INFO from "../../data/site";

import "./styles/allProjects.css";

import Header from "../common/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const AllProjects = () => {
	return (
		<div>
			<Header title="Projects" />
			<div className="projects-up">
				<div className="subtitle homepage-subtitle-projects">
					{INFO.homepage.aboutProjects}
				</div>
			</div>
			<div className="all-projects-container">
				{Object.keys(INFO.projects).map((projectKey, index) => {
					const project = INFO.projects[projectKey];

					return (
						<div className="all-projects-project" key={index}>
							<Project
								productKey={projectKey}
								logo={project.logo}
								title={project.title}
								logoLanguages={project.logoLanguages}
								description={project.description}
								isDown={project.isDown}
								descriptionTech={project.descriptionTech}
								linkText={project.linkText}
								showPage={project.showPage}
								link={project.link}
								links={project.links}
								languages={project.languages}
								linkType={project.linkType}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllProjects;
