import React from "react";
import { Carousel } from "react-bootstrap";
import businessManImg from "../../resources/HandsomeBusinessman.jpg";
import imranImg from "../../resources/im.jpg";
const CarouselDiv = () => {
  return (
    <section
      className="w-100 position-relative"
      style={{ maxHeight: "500px", overflow: "hidden" }}
    >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={businessManImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={imranImg}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={businessManImg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        className="position-absolute w-100 text-center text-white"
        style={{ top: "50%", left: "50%", transform: `translate(-50%,-50%)` }}
      >
        <h2>
          Small Businesses Across America
          <br />
          Choose The Webveloper Advantage
        </h2>
      </div>
    </section>
  );
};

export default CarouselDiv;
