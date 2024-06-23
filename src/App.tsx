import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage/homePage";
import Didier from "./pages/didier/didier";
import Sandrine from "./pages/sandrine/sandrine";

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/didier" element={<Didier />} />
					<Route path="/sandrine" element={<Sandrine />} />
				</Routes>
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;
