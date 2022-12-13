import React from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Loginform from '../loginform/loginform'

import './Conteudo.component.css'

export default function Conteudo() {
    return (
        <Container className='containerConteudo' fluid>
        <Loginform />
        </Container>
  )
}
