import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Trackify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <LinkContainer to="/">
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Browse">
          <Nav.Link >Browse</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="/Profile">
          <Nav.Link >Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigationbar