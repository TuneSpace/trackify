import React, { useContext, useState } from 'react'
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap'
import { MdLogout } from 'react-icons/md'
import { LinkContainer } from 'react-router-bootstrap'
import { UserContext } from '../Context/UserContext'


const Navigationbar = () => {

  const { setUserState} = useContext(UserContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogout() {
    setUserState({
      id: 1,
      username: "Guest",
      email: "randomjoeschmo@hotmail.com",
      isLoggedIn: false
    })
  }
  


  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Trackify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <LinkContainer to="/">
          <Nav.Link ></Nav.Link>
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
    <p id='logout-text' onClick={handleShow}>Logout <MdLogout onClick={handleShow}/></p>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sad to see you go! To Logout, click logout. To return to the app, click cancel.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </Modal.Footer>
      </Modal>
      </Navbar>
      </>
  )
}

export default Navigationbar