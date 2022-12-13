import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./loginform.components.css";

export default function loginform() {
  return (
    <div className="formulario">
      <h1 className="titleLogin">Faça Login Aqui</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Cadastrado</Form.Label>
          <Form.Control type="email" placeholder="Digite Seu Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
          <div className="text-from-form">
            <Form.Text className="text-muted">
              Não tem uma conta? <a href="#">Crie uma!</a>
            </Form.Text>
            <Form.Text className="text-muted">
              <a href="#">Esqueceu a senha?</a>
            </Form.Text>
          </div>
        </Form.Group>

        <Button variant="success" className="loginBtn" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
