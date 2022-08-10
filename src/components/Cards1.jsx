import React from "react";

const Cards1 = ({ item, onAdd }) => {
	return (
		<section className="cardsFrame">
			<div className="cards1">
				<div className="img">
					<img src={item.img} alt="" />
				</div>
				<div className="details">
					<p>{item.title}</p>
					<p>{item.description}</p>
					<p>Discount: NT$ {item.price}</p>
				</div>

				<button onClick={() => onAdd(item)}>Purchase</button>
			</div>
		</section>
	);
};

export default Cards1;
