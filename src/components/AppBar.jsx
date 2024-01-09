import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AppBar = () => {
  return (
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><span style={{color:"green"}}>C</span> <span style={{color:"#0400F0"}}>R</span> <span style={{color:"#FFF40A"}}>U</span> <span style={{color:"red"}}>D</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppBar