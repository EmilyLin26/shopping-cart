import React from "react";

const Checkout = () => {
	return (
		<div className="background" style={{ minHeight: "60vh", padding: "3rem" }}>
			<div
				className="container"
				style={{
					minHeight: "40vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<p style={{ fontSize: "1.5rem", textAlign: "center" }}>
					Thanks for your purchase!
					<br />
					We will process your order soon.
				</p>
			</div>
		</div>
	);
};

export default Checkout;
