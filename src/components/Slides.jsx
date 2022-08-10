import React from "react";
import { Carousel } from "react-bootstrap";

function Slides() {
	return (
		<div className="slides">
			<Carousel fade style={{ zIndex: "0" }}>
				{/* FIrstSlide */}
				<Carousel.Item>
					<img className="slidesImg" src="/imgs/donut.jpg" alt="First slide" />

					<Carousel.Caption>
						<p className="font">
							NEW OPEN !{" "}
							<span>
								<br />
							</span>{" "}
							10% OFF FOR DONUTS!
						</p>

						<button className="shopNow">
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
						className="slidesImg"
						src="/imgs/cream puff.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<p className="font">
							CREAM PUFFS:{" "}
							<span>
								<br />
							</span>{" "}
							BUY 5 GET 1 FREE
						</p>
						<button className="shopNow">
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
						className="slidesImg"
						src="/imgs/cookies.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<p className="font">HANDMADE COOKIES GIFT BOX</p>
						<p className="filterfont">
							Have an afternoon tea with your love ones!{" "}
						</p>
						<button className="shopNow">
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
		</div>
	);
}

export default Slides;
