import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img5 from "../assets/images/5.jpeg"
import img7 from "../assets/images/7.jpeg"
import img8 from "../assets/images/8.jpeg"
import img9 from "../assets/images/9.jpeg"
import img10 from "../assets/images/10.jpeg"
import img11 from "../assets/images/11.jpeg"


const Instructions = () => {
    return (
        <>

            <Container>
                <hr></hr>
                <h2 style={{ textAlign: 'center' }} className="mt-3">¿Como la uso?</h2>
                <Row className="mt-5">
                    <Col style={{ textAlign: 'center' }}>
                        <Image src={img5} width="80px" height="80px" roundedCircle/>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>1. Debes contar con un ususario para ingresar.</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <Image src={img7} width="80px" height="80px"/>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>2. Registrate dando click en el botoón de la parte superior derecha.</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <Image src={img8} width="80px" height="80px" roundedCircle/>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>3. Con el usuario creado vas a la opcion iniciar sesión con el boton ubicado en la parte superior derecha.</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <Image src={img9} width="80px" height="80px" roundedCircle/>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>4. Una ves iniciada la sesión aparecera un formularios que te pedirá los datos necesarios para poder calcular tu liquidacion.</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <Image src={img10} width="80px" height="80px" roundedCircle/>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>5. Das click en calcular</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <Image src={img11} width="80px" height="80px" roundedCircle/>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>6. Se mostrará una nueva página donde encontraras los resultados de la liquidación que acabas de solicitar.</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Imagen 1</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>7. Si deseas guardar esta consulta, da click al botón guardar ubicado en la parte inferior.</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Imagen 2</p>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <p>8. En la parte superior donde se encuentra el nombre de tu usario te aparecerá una opcion de consultas, que te llevara al registro de las que has guardado.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Instructions;