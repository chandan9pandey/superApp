import React, { useState, useEffect } from "react";
import "./MoviesList.css";
const MoviesList = ({ genre }) => {
	const [movies, setMovies] = useState([]);
	console.log(movies);
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "4023d29d0bmsh1155fd6077ed810p17df59jsn58e423ad041f",
				"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
			},
		};
		const fetchMovies = async () => {
			await fetch(
				`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2021`,
				options
			)
				.then((response) => response.json())
				.then((response) => setMovies(response.results.splice(4, 4)))
				.catch((err) => console.error(err));
		};
		fetchMovies();
	});
	return (
		<div style={{ backgroundColor: "#000000" }}>
			<p className="movie-genre">{genre}</p>
			<div className="movie-container">
				{movies.map((movie, idx) => {
					console.log(movie?.primaryImage?.url);
					return (
						<div key={idx} className="item">
							<img src={movie?.primaryImage?.url} alt={movie.title} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MoviesList;
