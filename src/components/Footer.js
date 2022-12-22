import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import './css/App.css';

export default function Foot() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="footer">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3">
              <h6 className="text-uppercase fw-bold mb-4">
                SHREE CHAMUNDA PET
              </h6>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                  Bharat H. Patel
              </p>
              <p>
                  Gala No 1&2, Aman Industrial Estate, Dhumal Nagar, Near Rashmi
                  Bungalow, Vasai East - 401208, Maharashtra, India.
              </p>
              <p>
                  Phone: 0250 326 5652
              </p>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <a
          className="text-reset fw-bold"
          href="https://shivam-ilasariya.vercel.app/"
          id ="footer-link"
        >
          Developed and Managed by Shivam Patel
        </a>
      </div>
    </MDBFooter>
  );
}
