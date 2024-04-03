/** @format */

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Popular from "./pages/Popular/Popular.js";
import Search from "./pages/Search/Search.js";
import Main from "./components/Main/Main.js";
import { searchMovie } from "./api.js"; 

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/popular" element={<Popular />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
