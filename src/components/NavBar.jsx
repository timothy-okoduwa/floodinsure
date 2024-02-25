import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import f from '../images/food.svg';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  // Check if the current route is "/login"
  const isLoginPage = location.pathname === '/login';

  // Render the Navbar only if not on the "/login" route
  if (isLoginPage) {
    return null; // Return null to render nothing
  }

  return (
    <div>
      <Navbar expand="lg" className="hello">
        <Container>
          <Navbar.Brand>
            <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={f} alt="" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100">
              <div className="first">
                <div>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    {' '}
                    <button className="login">Login</button>
                  </Link>
                </div>
                <div>
                  <Link to="/hero" style={{ textDecoration: 'none' }}>
                    <button className="request">Request Demo</button>
                  </Link>
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
