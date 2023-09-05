import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '.././css/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '.././assets/logo.png';

function Navbars() {
  let seshUser = sessionStorage.getItem('user');

  return (
    <Navbar expand="lg" className="bg-body-primary" id="navbarz">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="Papito"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="words" href="/">Home</Nav.Link>
            <Nav.Link id="words" href="/products">Products</Nav.Link>
            <Nav.Link id="words" href="/admininventory">Admininventory</Nav.Link>
            <Nav.Link id="words" href="/adminorders">Adminorders</Nav.Link>
            <Nav.Link id="words" href="/checkout">Cart</Nav.Link>
            <Nav.Link href="/login">{seshUser}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;