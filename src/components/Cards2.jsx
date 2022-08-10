import React from "react";

const Cards2 = ({ item, onAdd }) => {
	return (
		<section className="cardsFrame">
			<div className="cards2">
				<div className="img">
					<img src={item.img} alt="" />
				</div>
				<div className="details">
					<p>{item.title}</p>
					<p>Price: NT$ {item.price} </p>
					<p>{item.description}</p>
				</div>

				<button onClick={() => onAdd(item)}>Purchase</button>
			</div>
		</section>
	);
};

export default Cards2;
