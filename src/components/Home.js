import React from "react";
import { Container, Row } from "react-bootstrap";
import ImageCarousel from './HomeCarousel';
import HomeCards from "./HomeCards";
import "./css/App.css";

export default function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Row className="home-header">
          <p className="home-data">
            'Shree Chamunda PET' is the manufacturer of wide range of Plastic
            Bottles, Jars and other PET products. 'Sun Plas' is our subsidiary
            and is also a leading manufacturer and supplier of PET products.
          </p>
        </Row>
        <ImageCarousel/>
        <HomeCards/>
      </Container>
    </>
  );
}