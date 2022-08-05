import React from "react";
import Cards2 from "../components/Cards2";

const Cookies = ({ itemC, onAdd }) => {
	return (
		<div className="background">
			<div className="container">
				{itemC.map((item) => {
					return <Cards2 key={item.id} item={item} onAdd={onAdd} />;
				})}
			</div>
		</div>
	);
};

export default Cookies;
