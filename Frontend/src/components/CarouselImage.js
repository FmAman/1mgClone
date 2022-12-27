import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/CarouselImage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselImage() {
  return (
    <div className="carousel-image-main">
      <div className="carousel-image-upper-main">
        <div className="carousel-image-upper-left">
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="carousel-image-upper-left-picture"
                src="https://onemg.gumlet.io/eaa47bc6-c205-4c12-b0ef-cfe120c05de1_1670229214.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="carousel-image-upper-left-picture"
                src="https://onemg.gumlet.io/b58b9e0e-a6f7-45b5-a28a-dd833066c127.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="carousel-image-upper-left-picture"
                src="https://onemg.gumlet.io/531b5819-7aec-4ee4-a2f9-d15d3a066d1c_1666072358.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="carousel-image-upper-right">
          <img
            className="carousel-image-upper-right-picture"
            src="https://onemg.gumlet.io/16bfcc2c-7f57-4571-a29e-d69b0af564c8.png"
            alt="Sale"
          ></img>
        </div>
      </div>
      <div className="carousel-image-lower-main">
        Tata 1mg: India's Leading Online Pharmacy & Healthcare Platform
      </div>
    </div>
  );
}

export default CarouselImage;
