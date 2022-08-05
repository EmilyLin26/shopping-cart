import React from "react";

const Cart = ({ cartItem, onAdd, onRemove }) => {
	return (
		<div className="background" style={{ minHeight: "120vh" }}>
			<div
				className="container"
				style={{
					overflow: "auto",
					minHeight: "100vh",
					flexDirection: "column",
				}}
			>
				<h2 style={{ textAlign: "center" }}>Order Summary</h2>
				<div>
					{cartItem.map((item) => (
						<div key={item.id} className="table">
							<div className="col-1">
								<p>Products</p>
								<p>{item.img}</p>
							</div>

							<div className="col-2">
								<p>Quantity</p>
								<div className="qContainer">
									<button onClick={() => onAdd(item)}> + </button>
									<p>{item.qty}</p>
									<button onClick={() => onRemove(item)}> - </button>
								</div>
							</div>

							<div className="col-3">
								<p>Amount</p>
								<p>
									{item.qty}*{item.price}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* empty cart setting */}
				<div>
					{cartItem.length === 0 && <h5>Your shopping cart is empty now.</h5>}
				</div>
			</div>
		</div>
	);
};

export default Cart;
