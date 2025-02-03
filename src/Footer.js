import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="footer-links">
         
          <Col md={4} className="footer-column">
            <h5>CANDELLA</h5>
            <p>High-quality customer service and innovative products.</p>
          </Col>

        
          <Col md={4} className="footer-column">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
              <Nav.Link href="#aboutus" style={{ color: "white" }}>About Us</Nav.Link>
              <Nav.Link href="#products" style={{ color: "white" }}>Products</Nav.Link>
              <Nav.Link href="#contactus" style={{ color: "white" }}>Contact Us</Nav.Link>
            </Nav>
          </Col>

          
          <Col md={4} className="footer-column">
            <h5>Follow Us</h5>
            <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
              <i className="fa fa-facebook" style={{ fontSize: "24px", cursor: "pointer" }}></i>
              <i className="fa fa-instagram" style={{ fontSize: "24px", cursor: "pointer" }}></i>
              <i className="fa fa-twitter" style={{ fontSize: "24px", cursor: "pointer" }}></i>
            </div>
          </Col>
        </Row>

       
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; 2025 CANDELLA. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

