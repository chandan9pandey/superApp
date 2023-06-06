import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./News.css";

const News = () => {
	const [news, setNews] = useState("");
	var todayDate = new Date().toISOString().split("T")[0];
	console.log(news);
	useEffect(() => {
		const fetchNews = async () => {
			await fetch(
				`https://newsapi.org/v2/everything?q=india&from=${todayDate}&sortBy=popularity&apiKey=6e6ba9d8f1714b8fa9905cfeeefae6a4`
			) //extracting the data here
				.then(async (data) => await data.json()) //here data is coming in json format
				.then((result) => setNews(result.articles[0])); // finally using the data to display on the app
		};
		fetchNews();
	}, []);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/movies");
	};

	var dateTime = new Date(news.publishedAt);
	var date = dateTime.toLocaleDateString();
	var time = dateTime.toLocaleTimeString();
	return (
		<div className="news-box">
			<img src={news.urlToImage} alt="news" className="news-image" />
			<div className="shade">
				<p className="heading">{news.title}</p>
				<span
					className="date"
					style={{ fontSize: "13px", marginLeft: "20px", letterSpacing: "1px" }}
				>
					{date} |
				</span>
				<span
					className="time"
					style={{ fontSize: "13px", marginLeft: "2px", letterSpacing: "1px" }}
				>
					{time}
				</span>
			</div>
			<div className="description">{news.content}</div>
			<button
				style={{
					position: "absolute",
					backgroundColor: "#148A08",
					border: "none",
					borderRadius: "20px",
					height: "30px",
					width: "100px",
					color: "#ffffff",
					textAlign: "center",
					right: "60px",
					bottom: "10px",
					cursor: "pointer",
				}}
				onClick={handleClick}
			>
				Browse
			</button>
		</div>
	);
};

export default News;
