import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import persona from "../assets/images/pensando.jpg";

const Information = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2>¿Que es una calculadora de liquidación?</h2>
                    <p>Es una herramienta que permite conocer cual debe ser tu liquidación luego de haber laborado en una empresa con un contrato a termino indefinido</p>
                </Col>
                {/* <Col style={{ display: 'flex', justifyContent: 'center' }}> */}
                <Col>
                    <img
                        className="d-block w-50"
                        src={persona}
                        style={{ margin: 'auto'}}
                    /></Col>
            </Row>
        </Container>
    );
}

export default Information;
