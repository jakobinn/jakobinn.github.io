import React from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faStackOverflow,
	faLinkedin,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import Article from "../components/homepage/article";
import PaperContainer from "../components/containers/paperContainer";
import AllProjects from "../components/projects/allProjects";
import Header from "../components/common/header";

import INFO from "../data/user";
import myArticles from "../data/articles";
import { motion } from "framer-motion";

import "./styles/homepage.css";

const Homepage = () => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const socialLinks = [
		{ social: INFO.socials.github, icon: faGithub },
		{ social: INFO.socials.stackoverflow, icon: faStackOverflow },
		{ social: INFO.socials.linkedin, icon: faLinkedin },
		{ social: INFO.socials.medium, icon: faMedium },
		{ social: `mailto:${INFO.main.email}`, icon: faMailBulk },
	];

	return (
		<React.Fragment>
			<div className="whole-page">
				<PaperContainer>
					{/* <NavBar active="home" /> */}
					{/* <div className="content-wrapper">
						<div className="homepage-container"> */}
					<div className="homepage-first-area">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="homepage-first-area-left-side"
						>
							<div className="title homepage-title">
								{INFO.homepage.title}
							</div>

							<div className="subtitle homepage-subtitle">
								{INFO.homepage.description}
							</div>
						</motion.div>

						<motion.div
							initial="hidden"
							animate="visible"
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="homepage-first-area-right-side"
						>
							<div className="homepage-image-container">
								<div className="homepage-image-wrapper">
									<img
										src="avatar.png"
										alt="Avatar"
										className="homepage-image"
									/>
								</div>
							</div>
						</motion.div>
					</div>

					<div className="homepage-socials">
						{socialLinks.map((link, index) => {
							return (
								<motion.div
									initial="hidden"
									animate="visible"
									variants={fadeInUp}
									transition={{
										duration: (index + 3) * 0.1,
										delay: 0.2,
									}}
									className="homepage-first-area-right-side"
								>
									<a
										href={link.social}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={link.icon}
											className="homepage-social-icon"
										/>
									</a>
								</motion.div>
							);
						})}
					</div>

					<div className="homepage-projects">
						<AllProjects />
					</div>
				</PaperContainer>
				<PaperContainer>
					<div className="bottom-container">
						<Header title="Articles" />

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={article().link}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					<Footer />
				</PaperContainer>
			</div>
		</React.Fragment>
	);
};

export default Homepage;

// {
// 	/* <div className="homepage-works">
// 							<Works />
// 						</div> */
// }
// {
// 	/*
// 						<div className="page-footer">
// 							<Footer />
// 						</div> */
// }
