import React from 'react';
import { Row, Col, Container, Form, Button, Stack, } from 'react-bootstrap';

const LiquidationPage = () => {
    return (
        <>
            <h1>LIQUIDACION</h1>
            <Container className="w-50">
                <Row>
                    <Col>
                        <Form className="w-100">
                            <Form.Group className="mb-3" controlId="formLiquidatioData">
                                <div className="my-3" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}><h5>DATOS LIQUIDACION</h5></div>
                                <Row>
                                    <Col sm={4}><Form.Label>Periodo:</Form.Label></Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="fecha de inicio" readOnly /></Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Dias Laborados:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="número de días laborados" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                    </Col>
                                    <Col sm={8}>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Salario:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor del salario" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Transporte:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor del transporte" readOnly />
                                    </Col>
                                </Row>
                                <div className="my-3" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}><h5>PRESTACIONES SOCIALES LIQUIDACION</h5></div>
                                <Row>
                                    <Col sm={4}><Form.Label>Cesantías:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de las cesantías" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Intereses sobre cesantías:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de los intereses sobre cesantías" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Prima primer semestre:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de la prima" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Prima segundo semestre:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de la prima" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Vacaciones:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de las vacaciones" readOnly />
                                    </Col>
                                </Row>

                                <div className="my-3" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}><h5>APORTES A LA SEGURIDAD SOCIAL</h5></div>

                                <Row>
                                    <Col sm={4}><Form.Label>Pensiones {'(AFP)'}</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor del aporte a la pensión" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Salud {'(EPS)'}:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="date" placeholder="valor del aporte a la salud" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>Riesgos laborales {'(ARL)'}:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor del aporte a la ARL" readOnly />
                                    </Col>
                                </Row>

                                <div className="my-3" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}><h5>PARAFISCALES</h5></div>

                                <Row>
                                    <Col sm={4}><Form.Label>Caja de compensación:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de la caja de compensación" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>ICBF:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor del aporte al ICBF" readOnly />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><Form.Label>SENA:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor del aporte al SENA" readOnly />
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col sm={4}><Form.Label>TOTAL:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor total" readOnly />
                                    </Col>
                                </Row>
                                <hr></hr>
                                <div>
                                    <p><i>*Explicación de la exogenacion</i></p>
                                </div>
                                <Row>
                                    <Col sm={4}><Form.Label>TOTAL CON EXOGENACION:</Form.Label>
                                    </Col>
                                    <Col sm={8}><Form.Control type="text" placeholder="valor de la exogenacion" readOnly />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LiquidationPage;