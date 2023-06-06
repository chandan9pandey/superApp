import React, { useState } from "react";
import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
	GoTriangleUp,
	GoTriangleDown,
} from "../../../../node_modules/react-icons/go";
const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [playing, setPlaying] = useState(false);
	const increaseSecond = () => {
		if (seconds == 59) {
			return;
		}
		setSeconds((sec) => sec + 1);
	};
	const increaseMinute = () => {
		if (minutes == 59) {
			return;
		}
		setMinutes((min) => min + 1);
	};
	const increaseHour = () => {
		setHours((hours) => hours + 1);
	};
	const decreaseSecond = () => {
		if (seconds == 0) {
			return;
		}
		setSeconds((sec) => sec - 1);
	};
	const decreaseMinute = () => {
		if (minutes == 0) {
			return;
		}
		setMinutes((min) => min - 1);
	};
	const decreaseHour = () => {
		if (hours == 0) {
			return;
		}
		setHours((hours) => hours - 1);
	};
	function conversion(totalSeconds) {
		const totalMinutes = Math.floor(totalSeconds / 60);

		const seconds = totalSeconds % 60;
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return `${hours}:${minutes}:${seconds}`;
	}
	return (
		<div className="timer-box">
			<div
				style={{
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50px",
					width: "115px",
					margin: "21px auto",
					boxShadow:
						"-3px -7px 16px  rgba(95, 88, 88, 0.23), inset 0px 6px 26px rgba(0, 0, 0, 0.61)",
				}}
			>
				<CountdownCircleTimer
					isPlaying={playing}
					duration={seconds + minutes * 60 + hours * 60 * 60}
					colors={["#FF6A6A"]}
					size={100}
					strokeWidth={5}
					trailStrokeWidth={5}
				>
					{({ remainingTime }) => (
						<span style={{ color: "white", fontSize: "1.5rem" }}>
							{conversion(remainingTime)}
						</span>
					)}
				</CountdownCircleTimer>
			</div>
			<div className="numbers">
				<div
					style={{
						width: "400px",
						height: "110px",
						display: "flex",
						justifyContent: "space-evenly",
						color: "#949494",
					}}
				>
					<div style={{ height: "90px" }}>
						<p>Hours</p>
						<GoTriangleUp onClick={increaseHour} />
						<p style={{ fontSize: "25px", color: "#ffffff" }}>{hours}</p>
						<GoTriangleDown onClick={decreaseHour} />
					</div>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							fontSize: "50px",
							marginTop: "40px",
						}}
					>
						:
					</span>
					<div>
						<p>Minutes</p>
						<GoTriangleUp onClick={increaseMinute} />
						<p style={{ fontSize: "25px", color: "#ffffff" }}>{minutes}</p>
						<GoTriangleDown onClick={decreaseMinute} />
					</div>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							fontSize: "50px",
							marginTop: "40px",
						}}
					>
						:
					</span>
					<div>
						<p>Seconds</p>
						<GoTriangleUp onClick={increaseSecond} />
						<p style={{ fontSize: "25px", color: "#ffffff" }}>{seconds}</p>
						<GoTriangleDown onClick={decreaseSecond} />
					</div>
				</div>
				<div className="start-stop" onClick={() => setPlaying((prev) => !prev)}>
					{playing ? <p>Pause</p> : <p>Start</p>}
				</div>
			</div>
		</div>
	);
};

export default Timer;
