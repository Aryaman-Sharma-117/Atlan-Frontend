import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ModelHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
            <NavDropdown title="Featured" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/explore/GPT-4">GPT-4</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/BERT">BERT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/explore/favourites">Your Favourites</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/try">Try On Your Own</Nav.Link>
            <Nav.Link as={Link} to='/explore/favourites'>Favourites</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <button className="custom-button" onClick={() => navigate(-1)}>Go Back</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
