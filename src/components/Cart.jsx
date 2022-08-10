import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, onAdd, onRemove }) => {
	const navigate = useNavigate();

	//set total price
	const totalPrice = cartItems.reduce(
		(accumulator, currentItem) =>
			accumulator + currentItem.price * currentItem.qty,
		0
	);

	return (
		<div className="background" style={{ minHeight: "200vh" }}>
			<div
				className="container"
				style={{
					minHeight: "180vh",
					flexDirection: "column",
				}}
			>
				<h2 className="cart">Order Summary</h2>

				<div>
					<div className="title">
						<p>Products</p>
						<p className="qty">Quantity</p>
						<p>Amount</p>
					</div>
					{cartItems.map((item) => (
						<div key={item.id} className="table">
							<div className="products">
								<img src={item.img} alt="" />
								<p className="pTitle">{item.title}</p>

								<div className="qContainer">
									<button className="remove" onClick={() => onRemove(item)}>
										-
									</button>
									<p className="qbox">{item.qty}</p>
									<button className="add" onClick={() => onAdd(item)}>
										+
									</button>
								</div>

								<p className="price">NT$ {item.qty * item.price}</p>
							</div>
						</div>
					))}
				</div>

				{/* empty cart setting */}
				<div>
					{cartItems.length === 0 && <h5>Your shopping cart is empty now.</h5>}
				</div>

				{/* total price */}
				<div className="totalPrice">
					<p>Total Price: &nbsp;</p>
					{cartItems.length !== 0 && <div>{totalPrice}</div>}
				</div>
				<button
					className="checkout"
					onClick={async () => {
						if (cartItems.length === 0) {
							alert("Your shopping cart is still empty.");
						} else {
							localStorage.clear();
							navigate("/cart-2");
							window.location.reload();
						}
					}}
				>
					Check out
				</button>
			</div>
		</div>
	);
};

export default Cart;
