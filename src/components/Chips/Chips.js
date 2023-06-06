import "./Chips.css";
const Chips = ({ id, setCategories, categories }) => {
	const press = () => {
		const i = categories.indexOf(id);
		categories.splice(i, 1);
		setCategories([...categories]);
	};
	return (
		<div className="chip">
			{categories.map((category) => (
				<button className="btn-chips" onClick={press}>
					{category} <span className="cross">X</span>
				</button>
			))}
		</div>
	);
};

export default Chips;
