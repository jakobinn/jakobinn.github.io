import React, { useEffect } from "react";
// import BackButton from "../components/buttons/backButton"; //
import BackButton from "../components/buttons/backButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ImageList from "../components/images/imageList";
import PageContainer from "../components/containers/paperContainer"; // Import the PageContainer component
import { useLocation, useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import INFO from "../data/site";

import "./styles/projects.css";

const Projects = () => {
	const [project, setProject] = React.useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	const getQueryParams = (query) => {
		return new URLSearchParams(query);
	};

	const query = getQueryParams(location.search);
	const type = query.get("type");

	useEffect(() => {
		if (type) {
			const projectTemp = INFO.projects[type];
			if (projectTemp) {
				setProject(projectTemp);
			} else {
				navigate("/");
			}
		} else {
			navigate("/");
		}
	}, [type, navigate]);

	if (!project || !project?.title) {
		return <div></div>;
	}

	return (
		<React.Fragment>
			<div className="whole-page">
				<PageContainer noPadding={true}>
					<img
						src={project ? project.image : ""}
						className="project-image"
						alt={"project cover"}
					/>
					<BackButton />

					<div className="projects-container">
						<div className="title projects-title">
							{project ? project.title : "Project"}
						</div>

						<div className="subtitle projects-subtitle">
							{project ? project.description : ""}
						</div>
						<div className="subtitle projects-subtitle">
							{project ? project.descriptionTech : ""}
						</div>

						<div className={"project-languages"}>
							{project?.languages?.map((langauge) => {
								return (
									<div className="project-language">
										{langauge}
									</div>
								);
							})}
						</div>

						<div className={"image-list"}>
							<ImageList
								photos={project?.photos ? project.photos : []}
							/>
						</div>

						{project?.links ? (
							project?.links.map((link) => {
								return (
									<Link
										rel="noopener noreferrer"
										target="_blank"
										className="project-href"
										to={link.link ? link.link : ""}
									>
										<div className="project-link">
											<div className="project-link-icon-big">
												<FontAwesomeIcon
													icon={faLink}
												/>
											</div>

											<div className="project-link-text-big">
												{link.text}
											</div>
										</div>
									</Link>
								);
							})
						) : (
							<Link
								target="_blank"
								rel="noopener noreferrer"
								className="project-href"
								to={project.link ? project.link : ""}
							>
								<div className="project-link">
									<div className="project-link-icon-big">
										<FontAwesomeIcon
											icon={
												project.linkType === "GITHUB"
													? faGithub
													: faLink
											}
										/>
									</div>

									<div className="project-link-text-big">
										{project.linkText}
									</div>
								</div>
							</Link>
						)}

						{/* <div className="projects-list">
						<AllProjects />
					</div> */}
					</div>
				</PageContainer>
			</div>
		</React.Fragment>
	);
};

export default Projects;
