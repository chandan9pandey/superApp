import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Genre.css";
import Chips from "../Chips/Chips.js";
import Box from "..//Box/Box";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import { AiFillWarning } from "react-icons/ai";

const genres = [
	{
		id: "Action",
		color: "#FF5209",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={action}
				alt="action"
			/>
		),
	},
	{
		id: "Drama",
		color: "#D7A4FF",
		image: (
			<img style={{ width: "120px", height: "90px" }} src={drama} alt="drama" />
		),
	},
	{
		id: "Romance",
		color: "#11B800",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={romance}
				alt="romance"
			/>
		),
	},
	{
		id: "Thriller",
		color: "#84C2FF",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={thriller}
				alt="thriller"
			/>
		),
	},
	{
		id: "Western",
		color: "#912500",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={western}
				alt="western"
			/>
		),
	},
	{
		id: "Horror",
		color: "#7358FF",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={horror}
				alt="horror"
			/>
		),
	},
	{
		id: "Fantasy",
		color: " #FF4ADE",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={fantasy}
				alt="fantasy"
			/>
		),
	},
	{
		id: "Music",
		color: "#E61E32",
		image: (
			<img style={{ width: "120px", height: "90px" }} src={music} alt="music" />
		),
	},
	{
		id: "Fiction",
		color: "#6CD061",
		image: (
			<img
				style={{ width: "120px", height: "90px" }}
				src={fiction}
				alt="fiction"
			/>
		),
	},
];
const Genre = () => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const signUp = (e) => {
		e.preventDefault();
		validation();
		window.localStorage.setItem("genres", JSON.stringify([...categories]));
		navigate("/prebrowse");
	};
	const validation = () => {
		if (categories.length < 3) {
			setError(true);
		} else {
			setError(false);
		}
	};
	return (
		<div className="content">
			<div className="left">
				<p className="head">Super App</p>
				<p className="subHead">Choose your entertainment category</p>
				<div className="chips">
					<Chips categories={categories} setCategories={setCategories} />
				</div>
				{error ? (
					<label className="error-msg">
						<AiFillWarning
							style={{
								margin: "2px",
								fontSize: "20px",
								fontWeight: "400",
								display: "inline-flex",
							}}
						/>
						Minimum 3 category required
					</label>
				) : (
					""
				)}
			</div>
			<div className="right">
				{genres.map((data, ids) => (
					<Box
						data={data}
						ids={ids}
						categories={categories}
						setCategories={setCategories}
					/>
				))}
			</div>
			<button className="sign-up" onClick={signUp}>
				Next Page
			</button>
		</div>
	);
};

export default Genre;
