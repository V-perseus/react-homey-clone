import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav, Container, Button} from 'react-bootstrap'
import './Navbar.css';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color:#222;
  }
  .navbar-brand, .navbar-nav, .nav-link {
    color: #bbb;
    &:hover {
      color: black;
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
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </Styles>
  )
}

export default Banner
