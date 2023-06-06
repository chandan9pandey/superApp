import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Genres from "./pages/Genres";
import PreBrowse from "./pages/PreBrowse";
import Movies from "./pages/Movies";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Signup />} />
				<Route path="/genre" element={<Genres />} />
				<Route path="/prebrowse" element={<PreBrowse />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>
		</>
	);
}

export default App;
