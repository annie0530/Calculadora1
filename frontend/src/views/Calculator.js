import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

const Calculator = () => {
    return (
        <>
            <Container className="w-50">
                <h1>CALCULADORA LIQUIDACION</h1>
                <Row>
                    <Col>
                        <Form className="w-100">
                            <Form.Group className="mb-3" controlId="formCalcular">

                                <p className="mt-4" style={{ color: '#00AFFC' }}><i>*Ingresa los siguientes datos para el calculo de tu liquidación</i></p>
                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control type="text" placeholder="nombre completo" />

                                <Form.Label>Cedula de ciudadanía</Form.Label>
                                <Form.Control type="text" placeholder="numero de cedula" />

                                <Form.Label>Fecha de inicio de labores</Form.Label>
                                <Form.Control type="date" />

                                <Form.Label>Fecha de fin de labores</Form.Label>
                                <Form.Control type="date" />

                                <p className="mt-4" style={{ color: '#00AFFC' }}><i>*Seleccione si el salario es minimo, si no digite el salario devengado</i></p>

                                <Row className="mb-2">
                                    <Col><Form.Label>Salario Minimo</Form.Label>
                                    </Col>
                                    <Col><Form.Check type="checkbox" label="Check me out" />
                                        {/* {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />

                                            <Form.Check
                                                disabled
                                                type={type}
                                                label={`disabled ${type}`}
                                                id={`disabled-default-${type}`}
                                            />
                                        </div>
                                    ))} */}
                                    </Col>
                                    <Col><Form.Label>Otro valor</Form.Label>
                                    </Col>
                                    <Col><Form.Control type="text" placeholder="valor" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col><Form.Label>Clase de riesgo laboral</Form.Label>
                                    </Col>
                                    <Col><Form.Select aria-label="Default select example">
                                        <option>riesgo</option>
                                        <option value="1">Clase I</option>
                                        <option value="2">Clase II</option>
                                        <option value="3">Clase III</option>
                                        <option value="3">Clase IV</option>
                                        <option value="3">Clase V</option>
                                    </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="primary" type="submit" href="/liquidationPage">Calcular</Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Calculator;
