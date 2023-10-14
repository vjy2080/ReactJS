import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";

function DarkVariantExample() {
  return (
    <Container>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded my-3"
            src="https://smartslider3.com/wp-content/uploads/slider/cache/5e4d57c781eda4ea9c98927c721cfaf8/fullwidth-product-slider1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Apple Watch</h5>
            <p>
              Built-in GPS. Water resistance to 50 meters. A new lightning-fast
              dual-core processor. And a display that's two times brighter than
              before.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded my-3"
            src="https://smartslider3.com/wp-content/uploads/slider/cache/ee009efd7be8369bd81e31f3d72f7af4/fullwidth-product-slider2.webp"
            alt="Second slide"
          />
          <Carousel.Caption className="text-dark">
            <h5>HTC Vive Headset</h5>
            <p>
              A complete 1080p camera and 3-axis gimbal system are integrated
              with the Phantom 3 Advanced edition quadcopter from DJI.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded my-3"
            src="https://smartslider3.com/wp-content/uploads/slider/cache/d0e763c5b812ed2912583f230a949512/fullwidth-product-slider3.webp"
            alt="Third slide"
          />
          <Carousel.Caption className="text-dark">
            <h5>Phantom 3 Drone</h5>
            <p>
              A complete 1080p camera and 3-axis gimbal system are integrated
              with the Phantom 3 Advanced edition quadcopter from DJI.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default DarkVariantExample;
