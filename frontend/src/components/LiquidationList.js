import React from 'react';
import {Tab, Col, ListGroup, Row, Container} from "react-bootstrap"
import Liquidationsave from './LiquidationSave';
import ResultItem from './ResultItem';
import { searchCalculadora } from '../apis/LiquidationCRUD';

const Liquidationlist = () => {
    searchCalculadora((res)=>{
      console.log(res);
    });
    return (
        <>
          <h3>Lista de liquidaciones guardadas</h3>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={5}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1"><Liquidationsave/></ListGroup.Item>
                            <ListGroup.Item action href="#link2"><Liquidationsave/></ListGroup.Item>
                            <ListGroup.Item action href="#link3"><Liquidationsave/></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={7}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1"><ResultItem/></Tab.Pane>
                            <Tab.Pane eventKey="#link2"><ResultItem/></Tab.Pane>
                            <Tab.Pane eventKey="#link3"><ResultItem/></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Liquidationlist;