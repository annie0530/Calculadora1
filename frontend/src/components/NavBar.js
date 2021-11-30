import React from 'react';
import ButtonLogin from './ButtonLogin';
import ButtonSignUp from './ButtonSignUp';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../assets/images/Logo.png'


const NavBar = () =>{
  const closeSession = () =>{
    localStorage.clear();
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Image src={logo} width="80px" height="80px" roundedCircle/>
          <Navbar.Brand className="mx-2">CADCUMAX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/calculator">Calculadora</Nav.Link>
              <Nav.Link href="/home" onClick={()=>{closeSession()}}>Salir</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <div>
            <ButtonLogin />
            <ButtonSignUp />
          </div>
        </Container>
      </Navbar>
    </>


  );
}

export default NavBar


