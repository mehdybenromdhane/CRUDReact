import React from 'react'
import Navbar  from 'react-bootstrap/Navbar'
import Container  from 'react-bootstrap/Container'
import Nav  from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {

    const active = {
        fontWeight:"bold",
    };
  return (
    <Navbar bg="light" expand="lg" >
    <Container>
      <Navbar.Brand>MyEvents</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link
          as={NavLink}
          to="events"
          style={({ isActive }) => (!isActive ? undefined :active )}
        >
          Events
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="events/add"
          style={({ isActive }) => (!isActive ? undefined :active )}
        >
          Add Event
        </Nav.Link>
       
      </Nav>
    </Container>
  </Navbar>

  )
}
