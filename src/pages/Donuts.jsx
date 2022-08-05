import React from "react";
import Cards1 from "../components/Cards1";

const Donuts = ({ itemD, onAdd }) => {
	return (
		<div className="background" style={{ minHeight: "165vh" }}>
			<div className="container" style={{ minHeight: "150vh" }}>
				{itemD.map((item) => {
					return <Cards1 key={item.id} item={item} onAdd={onAdd} />;
				})}
			</div>
		</div>
	);
};

export default Donuts;
