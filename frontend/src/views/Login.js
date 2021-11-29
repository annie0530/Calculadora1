import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import persona from "../assets/images/pensando.jpg";
import SingInGoogle from '../components/SingInGoogle';
import { Navigate } from 'react-router';

const Login = () => {
  var component = <Navigate to="/home" />;
  if (JSON.parse(localStorage.getItem('session')) == undefined) {
    component = null
  }
  return (
    <>
      {component}
      <Container>
        <Row>
          <Col>
            <div style={{ textAlign: 'center' }}>
              <h2 className="mt-3">Iniciar sesión</h2>
            </div>
            <div>
              <p>¿Aún no tienes una cuenta? - <a href="/register">Registrate</a></p>
            </div>
            <Form className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Escriba su Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Escriba su contraseña" />
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button variant="primary" type="submit" className="mx-auto">Iniciar Sesión</Button>
              </div>
              <SingInGoogle />
            </Form>
          </Col>

          <Col><img
            className="d-block w-100 mt-3"
            src={persona}
            style={{ width: "100%", maxWidth: "360px" }}
          />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
