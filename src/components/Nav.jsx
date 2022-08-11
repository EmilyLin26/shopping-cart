import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Nav = ({ countCartItems }) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};
	return (
		<nav>
			<div className="icon" style={{ cursor: "pointer" }}>
				<a
					href="./"
					title="Home"
					style={{ textDecoration: "none", color: "black" }}
				>
					<p className="iconStyle">Sweet Tooth</p>
				</a>
			</div>

			<ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
				<li>
					<Link to="/" onClick={() => closeMenu()}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/donuts" onClick={() => closeMenu()}>
						Donuts
					</Link>
				</li>
				<li>
					<Link to="/creampuffs" onClick={() => closeMenu()}>
						Cream puffs
					</Link>
				</li>
				<li>
					<Link to="/cookies" onClick={() => closeMenu()}>
						Cookies
					</Link>
				</li>
				<li>
					<Link to="/aboutus" onClick={() => closeMenu()}>
						About us
					</Link>
				</li>
			</ul>
			<div>
				<div className="cart">
					<Link to="/cart-1">
						<FaShoppingCart />
					</Link>

					{countCartItems ? (
						<div className="number">{countCartItems}</div>
					) : (
						<div className="number-0">0</div>
					)}
				</div>
			</div>
			<button onClick={handleToggle}>
				{navbarOpen ? (
					<MdClose
						style={{ color: "#8b6f41", width: "40px", height: "40px" }}
					/>
				) : (
					<FiMenu style={{ color: "#8b6f41", width: "40px", height: "40px" }} />
				)}
			</button>
		</nav>
	);
};

export default Nav;
