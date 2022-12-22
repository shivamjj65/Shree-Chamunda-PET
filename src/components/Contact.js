import React from "react";
import { Row, Container } from "react-bootstrap";
import './css/Contact.css';

export default function Contact(){
    return(
        <div>
            <Container fluid className="contact-section">
            <Row className="contact-row">
                <p className="contact-title">Contact Us</p>
            </Row>
            <Row className="contact-row">
                <p className="contact-header">Contact Person</p>
            </Row>
            <Row className="contact-row">
                <p className="contact-data">Bharat H. Patel</p>
            </Row>
            <Row className="contact-row">
                <p className="contact-header">Address</p>
            </Row>
            <Row className="contact-row">
                <p className="contact-data">Gala No 1&2, Aman Industrial Estate, Dhumal Nagar, Near Rashmi
                  Bungalow, Vasai East - 401208, Maharashtra, India.</p>
            </Row>
            <Row className="contact-row">
                <p className="contact-header">Contact Number</p>
            </Row>
            <Row className="contact-row">
                <p className="contact-data">1234567890</p>
            </Row>
            </Container>
        </div>  
    );
}