import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Donuts from "./pages/Donuts";
import CreamPuffs from "./pages/CreamPuffs";
import Cookies from "./pages/Cookies";
import AboutUs from "./pages/AboutUs";
import DonutData from "./components/DonutData";
import PuffsData from "./components/PuffsData";
import CookiesData from "./components/CookiesData";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
	//state lifting
	//pages dada
	const { itemD } = DonutData;
	const { itemP } = PuffsData;
	const { itemC } = CookiesData;

	//set qty in the cart
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem("order")) ?? []
	);
	const onAdd = (item) => {
		const haveItem = cartItems.find((f) => f.id === item.id);
		if (haveItem) {
			setCartItems(
				cartItems.map((m) =>
					m.id === item.id ? { ...haveItem, qty: haveItem.qty + 1 } : m
				)
			);
		} else {
			setCartItems([...cartItems, { ...item, qty: 1 }]);
		}
		console.log(cartItems, cartItems.qty);
	};

	const onRemove = (item) => {
		const haveItem = cartItems.find((f) => f.id === item.id);
		if (haveItem.qty === 1) {
			setCartItems(cartItems.filter((f) => f.id !== item.id));
		} else {
			setCartItems(
				cartItems.map((m) =>
					m.id === item.id ? { ...haveItem, qty: haveItem.qty - 1 } : m
				)
			);
		}
	};

	//localStorage
	useEffect(() => {
		localStorage.setItem("order", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<div className="App">
			<Nav countCartItems={cartItems.length} />
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
					path="/cart-1"
					element={
						<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
					}
					exact
				/>
				<Route path="/cart-2" element={<Checkout />} exact />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
