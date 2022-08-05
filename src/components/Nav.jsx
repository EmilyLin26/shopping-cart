import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
	return (
		<nav>
			<div className="icon" style={{ cursor: "pointer" }}>
				<a
					href="/"
					title="Homepage"
					style={{ textDecoration: "none", color: "black" }}
				>
					<p className="iconStyle">Sweet Tooth</p>
				</a>
			</div>

			<ul>
				<li>
					<Link to="/">Homepage</Link>
				</li>
				<li>
					<Link to="/donuts">Donuts</Link>
				</li>
				<li>
					<Link to="/creampuffs">Cream puffs</Link>
				</li>
				<li>
					<Link to="/cookies">Cookies</Link>
				</li>
				<li>
					<Link to="/aboutus">About us</Link>
				</li>
			</ul>
			<div>
				<div className="cart">
					<a href="/cart">
						<FaShoppingCart />
					</a>

					<span className="number">0</span>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
