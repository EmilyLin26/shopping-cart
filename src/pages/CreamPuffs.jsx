import React from "react";
import Cards2 from "../components/Cards2";

const CreamPuffs = ({ itemP, onAdd }) => {
	return (
		<div className="background" style={{ minHeight: "165vh" }}>
			<div className="container" style={{ minHeight: "150vh" }}>
				{itemP.map((item) => {
					return <Cards2 key={item.id} item={item} onAdd={onAdd} />;
				})}
			</div>
		</div>
	);
};

export default CreamPuffs;
