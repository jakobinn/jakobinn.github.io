import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import ProjectPage from "./pages/projectPage";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				{/* <Route path="/contact" element={<Contact />} /> */}
				<Route path="/project" element={<ProjectPage />} />
				{/* <Route path="*" element={<Notfound />} /> */}
			</Routes>
		</div>
	);
}

export default App;
