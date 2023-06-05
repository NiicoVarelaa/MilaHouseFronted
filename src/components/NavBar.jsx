import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LogoNegro from "./images/LogoNegro.png";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" className='p-1 navBarCustom' >
            <Container >
                <Navbar.Brand href="home">
                    <img src={LogoNegro} alt="" width={90} height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto me-4">
                        <Nav.Link href="pedidos" className='text-dark fs-3 tituloNavbar'>Pedidos</Nav.Link>
                        <Nav.Link href="contacto" className='text-dark fs-3 tituloNavbar'>Contacto</Nav.Link>
                        <Nav.Link href="nosotros" className='text-dark fs-3 tituloNavbar'>Nosotros</Nav.Link>
                        <Nav.Link href="error404" className='text-dark fs-3 tituloNavbar'>Sucursales</Nav.Link>
                    </Nav>
                    <Button as={Link} to="/login" className='buttonCustom rounded-pill'>Inicia Sesion</Button>
                    <Button as={Link} to="/register" className='mx-3 buttonCustom rounded-pill'>Registrate</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;