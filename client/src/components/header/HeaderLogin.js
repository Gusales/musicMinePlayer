import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Header.component.css'


export default function Header() {
  return (
    <Navbar variant="dark" className='navbarLogin' >
      <Container className='containerForLogin'>
        <Navbar.Brand className='title' >Music Mine Player</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
