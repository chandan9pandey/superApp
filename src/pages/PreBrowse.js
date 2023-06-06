import React from "react";
import User from "../components/PreBrowse/User/User";
import Weather from "../components/PreBrowse/Weather/Weather";
import Notes from "../components/PreBrowse/Notes/Notes";
import Timer from "../components/PreBrowse/Timer/Timer";
import News from "../components/PreBrowse/News/News";
const PreBrowse = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",
				backgroundColor: "#000000",
			}}
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div
					style={{
						height: "99.5vh",
						width: "800px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						// border: "1px solid green",
					}}
				>
					<div
						style={{
							display: "flex",
							height: "425px",
							width: "800px",
							// border: "1px solid yellow",
							justifyContent: "space-around",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								height: "600px",
								width: "400px",
							}}
						>
							<User />
							<Weather />
						</div>
						<div>
							<Notes />
						</div>
					</div>
					<div>
						<Timer />
					</div>
				</div>
			</div>
			<div>
				<News />
			</div>
		</div>
	);
};

export default PreBrowse;
