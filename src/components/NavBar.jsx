import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import f from '../images/food.svg';
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="hello">
        <Container>
          <Navbar.Brand>
            <div>
              <img src={f} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100">
              <div className="first">
                <div>
                  <button className="login">Login</button>
                </div>
                <div>
                  <button className="request">Request Demo</button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
