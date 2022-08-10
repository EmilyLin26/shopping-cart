import React from "react";

const AboutUs = () => {
	return (
		<div className="background">
			<div className="container" style={{ padding: "20px", maxHeight: "80vh" }}>
				<img src="/imgs/about.jpg" alt="" className="imgAbout" />
				<div className="text">
					<h2>About us</h2>
					<p>
						Sweet Tooth wants to share the warm, freshly baked desserts right
						out of the oven with everyone and also lets those who love desserts
						a lot enjoy a pleasant time with our donut, cream puffs, and
						cookies.
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius
						saepe sint deserunt nam, laboriosam commodi natus ut culpa
						blanditiis totam optio dolorum, in animi architecto aliquam
						obcaecati maiores sapiente?
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
