import { motion } from "framer-motion";

const PageContainer = ({ children, noPadding }) => {
	const pageVariants = {
		hidden: { opacity: 0, scale: 1.1 },
		visible: { opacity: 1, scale: 1 },
	};

	const pageTransition = {
		duration: 0.25,
		ease: "easeIn",
	};

	return (
		<motion.div
			className={
				noPadding ? "page-content page-content-project" : "page-content"
			}
			initial="hidden"
			animate="visible"
			variants={pageVariants}
			transition={pageTransition}
		>
			<div className="page-container">{children}</div>
		</motion.div>
	);
};

export default PageContainer;
