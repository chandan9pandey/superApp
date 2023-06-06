import React, { useState } from "react";
import "./Notes.css";
const Notes = () => {
	const [text, setText] = useState(window.localStorage.getItem("text"));
	const saveText = (e) => {
		setText(e.target.value);
		window.localStorage.setItem("text", text);
	};
	return (
		<div className="notes-box">
			<h2 style={{ position: "absolute", left: "20px" }}>All Notes</h2>
			<textarea type="text" value={text} onChange={saveText} />
		</div>
	);
};

export default Notes;
