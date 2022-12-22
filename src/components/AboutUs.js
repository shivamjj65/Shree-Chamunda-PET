import React from "react";
import { Container, Row } from "react-bootstrap";
import "./css/AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <Container fluid className="about-section" id="about">
        <Row className="about-row">
          <p className="about-title">About Company</p>
        </Row>
        <Row className="about-row">
          <p className="about-data">
            Established in 2002, We, Shree Chamunda Pet, Mumbai are engaged in
            the business of manufacturing, supplying, wholesaling and exporting
            of Pet Bottles, Molds & Moulding Machines. Furthermore, we also
            provide Pet Bottle Mould and related plastic products like Pet
            Bottles and Jars. These products are globally accepted for high
            performance, durability, corrosion resistance, hygiene, light weight
            and leakage resistance. Our huge manufacturing unit is divided into
            are two sections wherein one fabricates the machines and other
            manufactures the plastic products. These units are equipped with
            modern and highly efficient machines. These units are equipped with
            the latest machines and our proprietor designs all the machines
            himself using a variety of CAD tools. We owe the success of our
            company to our mentor, Mr. Bharat Patel. Under his able guidance we
            have carved a niche for our organization in the industry. His vast
            experience in the plastic, packaging and cosmetic industries and
            in-depth knowledge has helped us to garner wide client base in
            domestic as well as the international markets. Due to our quality
            products we have attended huge clientele all across the globe.
          </p>
        </Row>
      </Container>
    </div>
  );
}