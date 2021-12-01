import React from 'react';
import { Navigate } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import Liquidationlist from '../components/LiquidationList';

const Profile = () => {
    var component = <Navigate to="/home" />;
    if (JSON.parse(localStorage.getItem('session')) != undefined) {
        component = <Liquidationlist />
    }
    
    return (
        <Container>
            <Row>
                <Col>{component}</Col>
            </Row>
        </Container>
    )
}

export default Profile;