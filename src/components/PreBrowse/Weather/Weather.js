import React, { useState, useEffect } from "react";
import "./Weather.css";
import {
	BsThermometerHalf,
	BsWind,
} from "../../../../node_modules/react-icons/bs";
import { MdWaterDrop } from "../../../../node_modules/react-icons/md";
const Weather = () => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [weather, setWeather] = useState(false);
	useEffect(() => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const morneve = hours >= 12 ? "PM" : "AM";
		const twelveHourFormat = hours % 12 || 12;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const strTime = `${twelveHourFormat}:${formattedMinutes} ${morneve}`;
		setTime(strTime);
	}, [setTime]);

	useEffect(() => {
		const today = new Date();
		const yyyy = today.getFullYear();
		let mm = today.getMonth() + 1; // Months start at 0!
		let dd = today.getDate();

		const month = mm < 10 ? `0${mm}` : mm;
		const date = dd < 10 ? `0${dd}` : dd;

		const Curr = date + "-" + month + "-" + yyyy;
		setDate(Curr);
	}, [setDate]);
	useEffect(() => {
		const fetchWeather = async () => {
			await fetch(
				`http://api.weatherapi.com/v1/current.json?key=2cfecd9328894ea28d1190330233105&q=India&aqi=no`
			)
				.then(async (data) => await data.json())
				.then((data) => setWeather(data));
		};
		fetchWeather();
	}, []);
	return (
		<div className="weather-box">
			<div className="date-time">
				<div className="date">{date}</div>
				<div className="time">{time}</div>
			</div>
			{weather ? (
				<div
					className="forecast"
					style={{
						display: "inline-flex",
						margin: "0px 10px",
						justifyContent: "space-evenly",
					}}
				>
					<div
						className="present-weather"
						style={{
							height: "80px",
							left: "0px",
							width: "100px",
							verticalAlign: "center",
						}}
					>
						<img
							alt=""
							src={weather.current.condition.icon}
							style={{
								margin: "0",
								width: "50px",
								height: "50px",
							}}
						/>
						<p
							style={{
								margin: "5px auto",
								textAlign: "center",
								fontSize: "13px",
								width: "80%",
							}}
						>
							{weather.current.condition.text}
						</p>
					</div>
					<div
						className="temperature-pressure"
						style={{
							height: "80px",
							width: "130px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<div className="temperature">
							<p
								style={{
									marginBottom: "0px",
									fontSize: "32px",
									fontWeight: "700",
									marginTop: "10px",
									textAlign: "center",
									verticalAlign: "center",
								}}
							>
								<span>{weather.current.temp_c}</span>
								°C
							</p>
						</div>
						<div className="pressure" style={{ display: "flex" }}>
							<span
								style={{
									display: "inline-flex",
									alignItems: "center",
								}}
							>
								<BsThermometerHalf />
							</span>
							<p style={{ margin: "0", width: "70%" }}>
								{weather.current.pressure_mb} mbar Pressure
							</p>
						</div>
					</div>
					<div
						className="wind-humidity"
						style={{
							marginTop: "10px",
							height: "80px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
						}}
					>
						<div className="wind" style={{ display: "flex" }}>
							<BsWind style={{ margin: "auto 2px" }} />
							<p
								style={{
									fontSize: "12px",
									width: "60px",
									justifyContent: "center",
								}}
							>
								{weather.current.wind_kph} km/h Wind
							</p>
						</div>
						<div
							className="humidity"
							style={{ display: "flex", alignItems: "center" }}
						>
							<MdWaterDrop style={{ margin: "auto 2px" }} />
							<p
								style={{
									fontSize: "12px",
									width: "60px",
									justifyContent: "center",
								}}
							>
								{weather.current.humidity}% Humidity
							</p>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Weather;
