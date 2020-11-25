import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color:#222;
    position: fixed;
    top:0;
    left:0;
    right:0;
  }
  .navbar-brand, .navbar-nav, .nav-link {
    color: #bbb;
    &:hover {
      color: yellow;
    }
  }
`;

function Banner() {
  return (
    <Styles>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
          <Container>
            <Navbar.Brand href="#home">Homey</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#notification">Notification</Nav.Link>
                <Nav.Link href="#community">Community</Nav.Link>
                <Nav.Link href="#facility">Public Facility</Nav.Link>
                <Nav.Link href="#suggestion">Suggestion</Nav.Link>
                <Nav.Link href="#repair">Repair Request</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </Styles>
  )
}

export default Banner
