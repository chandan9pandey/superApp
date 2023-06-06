import React from "react";
import MoviesList from "../components/Movies/MoviesList";
import UserCircle from "../assets/userCircle.png";
const Movies = () => {
	const movies = JSON.parse(window.localStorage.getItem("genres"));
	return (
		<div style={{ backgroundColor: "#000000" }}>
			<p
				className="banner"
				style={{
					fontFamily: "Single Day",
					fontWeight: "400",
					fontSize: "32px",
					color: "#72db73",
					margin: "0",
					position: "relative",
					top: "30px",
					left: "50px",
				}}
			>
				Super App
			</p>
			<img
				src={UserCircle}
				alt="usercircle"
				style={{
					height: "50px",
					width: "50px",
					position: "absolute",
					fontSize: "28px",
					top: "40px",
					right: "50px",
				}}
			/>
			<p
				style={{
					fontFamily: "Roboto",
					fontStyle: "normal",
					color: "white",
					fontSize: "26px",
					margin: "0px",
					position: "relative",
					top: "50px",
					left: "70px",
				}}
			>
				Entertainment according to your choice
			</p>
			<div style={{ position: "relative", top: "60px" }}>
				{movies.map((movie) => (
					<MoviesList genre={movie} />
				))}
			</div>
		</div>
	);
};

export default Movies;
