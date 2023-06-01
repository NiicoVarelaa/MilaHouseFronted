import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LogoNegro from "./images/LogoNegro.png";
import { Link } from 'react-router-dom';




export const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" className='p-1 navBarCustom gradient-background' >
            <Container >
                <Navbar.Brand href="home">
                    <img src={LogoNegro} alt="" width={90} height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto me-4">
                        <Nav.Link href="pedidos" className='text-white fs-4 tituloCustom'>Pedidos</Nav.Link>
                        <Nav.Link href="contacto" className='text-white fs-4 tituloCustom'>Contacto</Nav.Link>
                        <Nav.Link href="nosotros" className='text-white fs-4 tituloCustom'>Nosotros</Nav.Link>
                        <Nav.Link href="error404" className='text-white fs-4 tituloCustom'>Sucursales</Nav.Link>
                    </Nav>
                    <Button as={Link} to="/login" variant="warning" className='buttonCustom'>Inicia Sesion</Button>
                    <Button as={Link} to="/register" variant="warning" className='mx-3 buttonCustom'>Registrate</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar