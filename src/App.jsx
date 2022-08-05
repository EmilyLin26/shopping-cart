import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Donuts from "./pages/Donuts";
import CreamPuffs from "./pages/CreamPuffs";
import Cookies from "./pages/Cookies";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import DonutData from "./components/DonutData";
import PuffsData from "./components/PuffsData";
import CookiesData from "./components/CookiesData";

function App() {
	//state lifting
	const { itemD } = DonutData;
	const { itemP } = PuffsData;
	const { itemC } = CookiesData;

	const [cartItem, setCartItem] = useState([]);
	const onAdd = (item) => {
		const haveItem = cartItem.find((f) => f.id === item.id);
		if (haveItem) {
			setCartItem(
				cartItem.map((m) =>
					m.id === item.id ? { ...haveItem, qty: haveItem.qty + 1 } : m
				)
			);
		} else {
			setCartItem([...cartItem, { ...item, qty: 1 }]);
		}
		console.log(cartItem, item);
	};

	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Homepage />} exact />
				<Route
					path="/donuts"
					element={<Donuts itemD={itemD} onAdd={onAdd} />}
					exact
				/>
				<Route
					path="/creampuffs"
					element={<CreamPuffs itemP={itemP} onAdd={onAdd} />}
					exact
				/>
				<Route
					path="/cookies"
					element={<Cookies itemC={itemC} onAdd={onAdd} />}
					exact
				/>
				<Route path="/aboutus" element={<AboutUs />} exact />
				<Route
					path="/cart"
					element={<Cart cartItem={cartItem} onAdd={onAdd} />}
					exact
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
