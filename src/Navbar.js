// Navbar.js
import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Form, FormControl } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

function MyNavbar({ cartCount, navigateTo }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#415d43" }}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "white",
            fontWeight: "bold",
            marginLeft: "-20px",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          CANDELLA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {[{ name: "Home", id: "home" },
              { name: "About Us", id: "aboutus" },
              { name: "Products", id: "products" },
              { name: "Contact Us", id: "contactus" }].map((item, index) => (
              <ScrollLink
                key={index}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                  color: "white",
                  margin: "0 30px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  cursor: "pointer",
                  position: "relative",
                }}
                activeStyle={{ color: "#FFD700" }}
              >
                {item.name}
                <span
                  className="nav-underline"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-5px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#FFD700",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                ></span>
              </ScrollLink>
            ))}
          </Nav>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {showSearch && (
              <Form inline className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  style={{
                    borderRadius: "20px",
                    padding: "5px 10px",
                    border: "1px solid #ccc",
                  }}
                />
              </Form>
            )}

            <Button
              variant="outline-light"
              style={{
                borderRadius: "20px",
                padding: "5px 15px",
                height: "30px",
                fontSize: "14px",
              }}
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="fa fa-search"></i>
            </Button>
            
            {/* أيقونة السلة */}
            <div
              style={{ position: "relative" }}
              onClick={() => navigateTo("cart")}
            >
              <i
                className="fa fa-shopping-cart"
                style={{
                  color: "white",
                  fontSize: "28px",
                  cursor: "pointer",
                }}
              ></i>
              <span
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "10px",
                }}
              >
                {cartCount}
              </span>
            </div>
            
           
          </div>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .m-auto a:hover {
            color: #FFD700 !important;
          }

          
        `}
      </style>
    </Navbar>
  );
}

export default MyNavbar;





















