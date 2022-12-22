import React, {useState} from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  return (
    <>
      <Navbar
      expanded={expand}
      className={navColour ? "sticky" : "navbar"}
      collapseOnSelect
      expand="md"
      id="navbar" 
      >
        <Container fluid>
          <Navbar.Brand to="/" className="justify-content-center">
            <h2 className="logotext">Shree Chamunda PET</h2>
          </Navbar.Brand>
          <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home" id="nav">
          <Nav.Item id="navItem">
              <Nav.Link id="navLink" as={Link} to="/" onClick={() => updateExpanded(false)}>
                <h4 className="navItem">Home</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="navItem">
              <Nav.Link
                as={Link}
                to="/Products"
                onClick={() => updateExpanded(false)}
              >
                <h4 className="navItem">Products</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="navItem">
              <Nav.Link
                as={Link}
                to="/AboutUs"
                onClick={() => updateExpanded(false)}
              >
                <h4 className="navItem">About</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="navItem">
              <Nav.Link
                as={Link}
                to="/Contact"
                onClick={() => updateExpanded(false)}
              >
                <h4 className="navItem">Contact Us</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}