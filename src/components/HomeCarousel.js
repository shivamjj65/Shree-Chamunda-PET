import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/20ltr-bottle.png";
import img2 from "../assets/fridge.png";
import img3 from "../assets/PET-bottles.png";
import "./css/HomeCarousel.css";

export default function ImageCarousel() {
return (
	<div className="slides">
	<Carousel controls={false} slide={true} variant="dark" pause="hover">
		<Carousel.Item interval={3000} acti>
		<img
			className="d-block w-100"
            src={img1}
			alt="PET Bottle: 20 Litres"
		/>
		<Carousel.Caption>
			<h3>Large PET Bottles</h3>
			{/* <p>Sample Text for Image One</p> */}
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
		<img
			className="d-block w-100"
            src={img2}
			alt="Fridge Bottle"
		/>
		<Carousel.Caption>
			<h3>Fridge Bottles</h3>
			{/* <p>Sample Text for Image Two</p> */}
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={3000}>
		<img
			className="d-block w-100"
            src={img3}
			alt="PET Bottle"
		/>
		<Carousel.Caption>
			<h3>PET-bottles</h3>
			{/* <p>Sample Text for Image Two</p> */}
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
