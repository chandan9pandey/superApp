import React, { useState } from "react";
import "./Signupform.css";
import { useNavigate } from "react-router-dom";
const Signupform = () => {
	const [userDetails, setUserDetails] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		check: false,
	});
	const navigate = useNavigate();
	const [error, setError] = useState({});
	const [submission, setSubmission] = useState(false);
	console.log(userDetails);

	const change = (e) => {
		setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		const { name, username, email, phone, check } = userDetails;
		if (name && username && email && phone && check) {
			window.localStorage.setItem("userData", JSON.stringify(userDetails));
			setSubmission(true);
			navigate("/genre");
		} else {
			setError(validation(userDetails));
		}
	};
	const validation = (value) => {
		const errors = {};
		if (!value.name) {
			errors.name = "Field is required";
		}
		if (!value.username) {
			errors.username = "Field is required";
		}
		if (!value.email) {
			errors.email = "Field is required";
		}
		if (!value.phone) {
			errors.phone = "Field is required";
		}
		if (value.check === false) {
			errors.check = "Check this box if you want to proceed";
		}
		return errors;
	};
	return (
		<div className="body">
			<span className="super">Super App</span>
			<span className="new-ac">Create your new Account</span>
			<form className="form" onSubmit={submit}>
				<input
					onChange={(e) => change(e)}
					type="text"
					placeholder="Name"
					name="name"
					value={userDetails.name}
				/>
				<label className="error-msg">{error.name}</label>
				<input
					onChange={(e) => change(e)}
					type="text"
					placeholder="UserName"
					name="username"
					value={userDetails.username}
				/>
				<label className="error-msg">{error.username}</label>
				<input
					onChange={(e) => change(e)}
					type="email"
					placeholder="Email"
					name="email"
					value={userDetails.email}
				/>
				<label className="error-msg">{error.email}</label>
				<input
					onChange={(e) => change(e)}
					type="tel"
					maxlength="12"
					placeholder="Mobile"
					name="phone"
					value={userDetails.phone}
				/>
				<label className="error-msg">{error.phone}</label>
				<label>
					<input
						onChange={(e) =>
							setUserDetails({
								...userDetails,
								[e.target.name]: e.target.checked,
							})
						}
						type="checkbox"
						className="checkbox"
						name="check"
					/>
					Share my registration data with Superapp
				</label>
				{error ? <label className="check-error-msg">{error.check}</label> : ""}
				<button className="btn-signUp" type="submit">
					SIGN UP
				</button>
			</form>

			<footer className="footer">
				<p
					style={{ color: "#7C7C7C", fontSize: "12.5px", textAlign: "justify" }}
				>
					By clicking on Sign up. you agree to Superapp{" "}
					<span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span>
				</p>
				<p
					style={{ color: "#7C7C7C", fontSize: "12.5px", textAlign: "justify" }}
				>
					To learn more about how Superapp collects, uses, shares and protects
					your personal data please head Superapp{" "}
					<span style={{ color: "#72DB73" }}>Privacy Policy</span>
				</p>
			</footer>
		</div>
	);
};

export default Signupform;
