import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import persona from "../assets/images/pensando.jpg";

const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div style={{ textAlign: 'center' }}>
              <h2 className="mt-3">Registrarse</h2>
            </div>
            <div>
              <p>¿Ya tienes una cuenta? - <a href="/login">Inicia Sesión</a></p>
            </div>
            <Form className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder="Escriba su nombre completo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Escriba su Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Escriba su contraseña" />
              </Form.Group>
              <Button variant="primary" type="submit">Registrarme</Button>
            </Form>
          </Col>

          <Col><img
            className="d-block w-100 mt-3"
            src={persona}
            style = {{width:"100%", maxWidth:"360px"}}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register
