import React from "react";
import { Row, Container } from "react-bootstrap";
import './css/Contact.css';

function Contact(){
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
                <p className="contact-data">Building no 9c, sagar Industrial Estate, Dhumal Nagar, Vasai East, Vasai, Thane-401208, Maharashtra, India</p>
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

export default Contact;