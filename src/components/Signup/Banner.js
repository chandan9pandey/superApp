import React from "react";
import BannerImg from "../../assets/image 13.png";
import "./Banner.css";

const Banner = () => {
	return (
		<div style={{ height: "100vh" }}>
			<div className="bottomText">Discover new things on SuperApp</div>
			<img src={BannerImg} alt="Banner" />
		</div>
	);
};

export default Banner;
