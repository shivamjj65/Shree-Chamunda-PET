import React from "react";
import {
  MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBRow,MDBCol} from "mdb-react-ui-kit";
import medal from "../assets/medal.png";
import service from "../assets/service.png";
import customer from "../assets/customer.png";
import "./css/App.css";

export default function HomeCards() {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard mb="3" className="card" alignment='center' shadow='0' border='warning' background='white'>
          <MDBCardImage
            src={medal}
            position="top"
            alt="..."
            className="card-img"
          />
          <MDBCardBody className="card-body">
            <MDBCardTitle className="card-title">Quality</MDBCardTitle>
            <MDBCardText className="card-data">
              Every product manufactured undergoes stringent testing and
              validations before it is included in our product range
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard mb="3" className="card" alignment='center' shadow='0' border='warning' background='white'>
          <MDBCardImage
            src={service}
            position="top"
            alt="..."
            className="card-img"
          />
          <MDBCardBody className="card-body">
            <MDBCardTitle className="card-title">Best Service</MDBCardTitle>
            <MDBCardText className="card-data">
              Our products are manufactured as per as customer requirements and supplied to customers in the minimal time possible.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard mb="3" className="card" alignment='center' shadow='0' border='warning' background='white'>
          <MDBCardImage
            src={customer}
            position="top"
            alt="..."
            className="card-img"
          />
          <MDBCardBody className="card-body">
            <MDBCardTitle className="card-title">Customers</MDBCardTitle>
            <MDBCardText className="card-data">
            We supply to various quality-conscious brands that know if a superior product is desired.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}