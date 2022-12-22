import React from "react";
import { Container} from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import img1  from '../assets/pet-water-bottle.jpg';
import img2  from '../assets/pet-jar.jpg';
import img3  from '../assets/cosmetic-packaging-bottle.jpg';
import img4  from '../assets/two-blow-one-conveyor-systems-pet-machines.jpg';
import img5  from '../assets/semi-automatic-pet-blow-molding-machine.jpg';
import img6  from '../assets/preform-heater-oven.jpg';
import img7  from '../assets/pet-blow-moulding-machines.jpg';
import img8  from '../assets/molds-for-pet-bottles.jpg';
import img9  from '../assets/hot-fill-pet-blow-molding-machines.jpg';
import img10  from '../assets/fully-automatic-pet-blow-molding-machines.jpg';
import img11 from '../assets/blow-molding-machines.jpg';
import "./css/Product.css";

const Imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11];

export default function Products() {
  return (
    <Container fluid className="product-section" id="product">
      <MDBRow className="product-header">
        <p>
          We are one of the prominent manufacturers and exporters of a wide
          range of Pet Blow Moulding Machines. Apart from these, we also provide
          Pet Bottle Mould and related plastic products like pet bottels and
          jars. These are internationally appreciated for high performance,
          durability, corrosion resistance, hygiene, light weight and leakage
          resistance. Further, our range is enlisted below:
        </p>
      </MDBRow>

      <MDBRow className="product-row">
        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[0]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">PET Plastic Bottles</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[1]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">20-Litre PET Bottle</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[2]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Oil & Cosmetic Packaging Bottles</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[3]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Two blowone conveyor PET machines</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[4]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Semi automatic PET blow moulding machines</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="product-row">
        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[5]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Preform Heater Oven</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[6]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">PET blow moulding machines</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[7]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Moulds for PET bottles</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[8]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Hot fill PET blow moulding machines</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="product-col">
          <MDBCard
            mb="3"
            className="card"
            alignment="center"
            shadow="0"
            border="warning"
            background="white"
          >
            <MDBCardImage
              src={Imgs[9]}
              position="top"
              alt="..."
              className="card-img"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="card-title">Fully automatic PET blow moulding machines</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>        
      </MDBRow>

      <MDBRow className="product-header">
        <p>
          And Much More...
        </p>
      </MDBRow>

    </Container>
  );
}
