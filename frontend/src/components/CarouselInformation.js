import React from 'react';
import { Carousel, Container, Row, Col} from 'react-bootstrap';
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

const CarouselInformation = () => {
  return (
    <>
      <Container  style={{ margin: '10px auto'}}>
        <Row>
          <Col><Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Calculadora Salarial</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Conoce cual debe ser tu liquidación</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Primas, Cesantias, intereses, vacaciones, etc.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel></Col>
        </Row>
      </Container>
    </>
  )
}

export default CarouselInformation
