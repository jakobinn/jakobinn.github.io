import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/");
	}, [navigate]);

	return <div></div>;
};

export default Notfound;
