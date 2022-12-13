import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Header.component.css'


export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" className='navbar' >
      <Container>
        <Navbar.Brand className='title' href="">MINE CHAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="chat">Chat</Nav.Link>
            <Nav.Link className="link" href="grupos">Grupos</Nav.Link>

            <NavDropdown className="link" title="Jogos"  id="basic-nav-dropdown">
              <NavDropdown.Item href="game1">
                Minecraft Java Edition
              </NavDropdown.Item>
              <NavDropdown.Item href="game2">
                Minecraft Bedrock Edition
              </NavDropdown.Item>
              <NavDropdown.Item href="game3">
                Minecraft Dungeons
              </NavDropdown.Item>
              <NavDropdown.Item href="game4">
                Minecraft Legends
              </NavDropdown.Item>
              <NavDropdown.Item href="game5">
                Minecraft Education Edition
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
