import React from "react";
import Banner from "../components/Signup/Banner";
import Signupform from "../components/Signup/Signupform";

const Signup = () => {
	return (
		<div style={{ display: "flex" }}>
			<Banner />
			<Signupform />
		</div>
	);
};

export default Signup;
