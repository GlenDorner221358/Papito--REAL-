import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '.././css/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '.././assets/logo.png';

function Navbars() {
  let seshUser = sessionStorage.getItem('user');

  const handleLogout = (e) =>{
    sessionStorage.removeItem('user');
    window.location.href = '/';
  }

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
            {seshUser === 'seemonster12@gmail.com' && <Nav.Link id="words" href="/admininventory">Admininventory</Nav.Link>}
            {seshUser === 'seemonster12@gmail.com' && <Nav.Link id="words" href="/adminorders">Adminorders</Nav.Link>}
            <Nav.Link id="words" href="/checkout">Cart</Nav.Link>
            <Nav.Link>{seshUser}</Nav.Link>

            {/* checks if there is a logged user, if not, removes log in button */}
            { seshUser == null ? (
              <Nav.Link href="/login"> Login </Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;