import React from "react";
import { Container, Row, Col, Navbar, Nav} from "react-bootstrap";

const Header = () => {
  return (
    <header>
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Navbar.Brand href="#home">ProShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </header>
  );
};

export default Header;
