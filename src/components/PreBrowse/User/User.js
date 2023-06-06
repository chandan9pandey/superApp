import React from "react";
import "./User.css";
import UserImage from "../../../assets/UserImage.png";
import UserGenre from "./UserGenre";

const User = () => {
	const myinfo = JSON.parse(window.localStorage.getItem("userData"));
	const genre = JSON.parse(window.localStorage.getItem("genres"));
	return (
		<div className="user-box">
			<div className="userImage">
				<img
					src={UserImage}
					alt="profileImage"
					style={{
						position: "relative",
						height: "225px",
						width: "115px",
						margin: "10px 15px",
					}}
				/>
			</div>
			<div className="userDetails">
				<p className="name">{myinfo.name}</p>
				<p className="email">{myinfo.email}</p>
				<p className="username">{myinfo.username}</p>
				<UserGenre categories={genre} color={"#9F94FF"} />
			</div>
		</div>
	);
};

export default User;
