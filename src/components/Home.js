import React from "react";
import { Container, Row } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import ImageCarousel from './HomeCarousel';
import "./css/App.css";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Row className="home-header-row">
          <p className="home-data">
            'Shree Chamunda PET' is the manufacturer of wide range of Plastic
            Bottles, Jars and other PET products. 'Sun Plas' is our subsidiary
            and is also a leading manufacturer and supplier of PET products.
          </p>
        </Row>
        <ImageCarousel/>
        <Row className="home-data">
          <p>
            Assured Quality: We manufacture high quality PET products with high
            end machinery and latest production technology.
          </p>
        </Row>
        <Row className="home-data">
          <p>
            Best Service: Our clients have always appreciated our best services
            and supply management.
          </p>
        </Row>
        <Row className="home-data">
          <p>
            Attractive Prices: The prices of variety of plastic bottles/jars are
            competitive with respect to market prices.
          </p>
        </Row>
      </Container>
    </>
  );
}

export default Home;
