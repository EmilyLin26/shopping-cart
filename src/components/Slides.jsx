import React from "react";
import { Carousel } from "react-bootstrap";

function Slides() {
	return (
		<Carousel fade>
			{/* FIrstSlide */}
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/imgs/donut.jpg"
					alt="First slide"
					style={{ maxHeight: "90vh", objectFit: "cover" }}
				/>

				<Carousel.Caption>
					<div className="filter"></div>
					<h2
						style={{
							fontSize: "3rem",
						}}
					>
						NEW OPEN ! 10% OFF FOR DONUTS!
					</h2>

					<button
						style={{
							border: "3px solid rgb(199, 176, 139)",
							padding: "0.75rem 1rem",
							fontSize: "2rem",
							backgroundColor: "rgba(235, 207, 162,0.9)",
							borderRadius: "20px",
						}}
					>
						<a
							href="/donuts"
							style={{ textDecoration: "none", color: "black" }}
						>
							SHOP NOW
						</a>
					</button>
				</Carousel.Caption>
			</Carousel.Item>
			{/* SecondSlide */}
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/imgs/cream puff.jpg"
					alt="Second slide"
					style={{ maxHeight: "90vh", objectFit: "cover" }}
				/>

				<Carousel.Caption>
					<h2
						style={{
							fontSize: "3rem",
						}}
					>
						CREAM PUFFS: BUY 5 GET 1 FREE
					</h2>
					<button
						style={{
							border: "3px solid rgb(199, 176, 139)",
							padding: "0.75rem 1rem",
							fontSize: "2rem",
							backgroundColor: "rgba(235, 207, 162,0.9)",
							borderRadius: "20px",
						}}
					>
						<a
							href="/creampuffs"
							style={{ textDecoration: "none", color: "black" }}
						>
							SHOP NOW
						</a>
					</button>
				</Carousel.Caption>
			</Carousel.Item>
			{/* ThirdSlide */}
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/imgs/cookies.jpg"
					alt="Third slide"
					style={{ maxHeight: "90vh", objectFit: "cover" }}
				/>

				<Carousel.Caption>
					<h2
						style={{
							fontSize: "3rem",
						}}
					>
						HANDMADE COOKIES GIFT BOX
					</h2>
					<p
						style={{
							fontSize: "2rem",
							color: "black",
							backgroundColor: "rgb(255, 255, 255,0.5)",
						}}
					>
						Have an afternoon tea with your love ones!{" "}
					</p>
					<button
						style={{
							border: "3px solid rgb(199, 176, 139)",
							padding: "0.75rem 1rem",
							fontSize: "2rem",
							backgroundColor: "rgba(235, 207, 162,0.9)",
							borderRadius: "20px",
						}}
					>
						<a
							href="/cookies"
							style={{ textDecoration: "none", color: "black" }}
						>
							SHOP NOW
						</a>
					</button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slides;
