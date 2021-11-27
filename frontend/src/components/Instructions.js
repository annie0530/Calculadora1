import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

const Instructions = () => {
    return (
        <>
            <Container>
                <Row>
                    <h2 style={{ textAlign: 'center' }}>Instrucciones para usar la aplicación</h2>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Imagen 1</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Instrucción 1</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Imagen 2</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Instrucción 2</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Instructions;
