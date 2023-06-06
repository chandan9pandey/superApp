import React from "react";

const UserGenre = ({ categories, color }) => {
	return (
		<div style={{ width: "250px" }}>
			{categories.map((category) => (
				<button
					style={{
						background: `${color}`,
						borderRadius: "20px",
						width: "70px",
						color: "white",
						border: "none",
						padding: "6px",
						height: "30px",
						flexShrink: 0,
						margin: "5px",
						fontFamily: "Roboto, sans-serif",
						fontSize: "12px",
					}}
				>
					{category}{" "}
				</button>
			))}
		</div>
	);
};

export default UserGenre;
