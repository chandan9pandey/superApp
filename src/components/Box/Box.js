import React, { useState, useEffect } from "react";

const Box = ({ data, idx, setCategories, categories }) => {
	const isSelect = categories.includes(data.id);
	const [select, setSelect] = useState(isSelect);

	useEffect(() => {
		setSelect(isSelect);
	}, [isSelect]);

	const press = () => {
		const newCategories = isSelect
			? categories.filter((cat) => cat !== data.id)
			: [...categories, data.id];
		setCategories(newCategories);
		setSelect(!select);
	};
	return (
		<div
			onClick={(e) => press(e)}
			className="box"
			data={data}
			key={idx}
			style={{
				background: data["color"],
				border: `4px solid ${select ? "#148a08" : "#ffffff"}`,
			}}
		>
			<p className="box-text">{data.id}</p>
			{data.image}
		</div>
	);
};

export default Box;
