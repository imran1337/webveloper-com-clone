import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="md" className="container">
        <Navbar.Brand href="#home">
          <img
            className="img-fluid"
            style={{ width: "200px", minWidth: "60px", fontSize: "100%" }}
            src="https://assets.webveloper.com/WVText.svg"
            alt="d"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto align-items-center"
            style={{ fontWeight: 600 }}
          >
            <Link to="/#overview" className="nav-link">
              OVERVIEW
            </Link>
            <a href="#home" className="nav-link">
              FEATURES
            </a>
            <a href="#home" className="nav-link">
              PRICING
            </a>
            <a href="#home" className="nav-link base_color">
              LOG IN
            </a>
            <a href="#home" className="nav-link">
              <button className="base_btn">SIGN UP</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
