import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";
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
        <Router>
          <Navbar collapseOnSelect expand="lg" variant="dark" >
            <Container>
              <Navbar.Brand><Link to="/">HOMEY</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link><Link to="/notification">Notification</Link></Nav.Link>
                  <Nav.Link><Link to="/community">Community</Link></Nav.Link>
                  <Nav.Link><Link to="/facility">Public Facility</Link></Nav.Link>
                  <Nav.Link><Link to="/suggestion">Suggestion</Link></Nav.Link>
                  <Nav.Link><Link to="/repair">Repair Request</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
       </Router>
      </Styles>
  )
}

export default Banner
