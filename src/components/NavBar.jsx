import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LogoBlanco from "./images/LogoBlanco.png";
import { Link, useLocation } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../auth/pages/css/auth.css"



export const NavBar = () => {

    let { pathname } = useLocation();

    const path = pathname.split('/')[1];

    const userLogeado = localStorage.getItem("token") ? true : false;

    

    const handleLogout = () => {
        localStorage.setItem('token', null);
    }

    return (
        <Navbar  expand="lg" className='navBarCustom p-1'>
            <Container >
                <Navbar.Brand href="home">
                    <img src={LogoBlanco} alt="" width={90} height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='iconoToggle' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto me-4">
                        <Button
                            as={Link}
                            to="/pedidos"
                            className={path === 'pedidos' ? 'buttonCustomDisabled fs-5 w-25 m-2 border-2 rounded-pill' : 'buttonCustom fs-5 w-25 m-2 border-2 rounded-pill'}disabled={path === 'pedidos'}>Pedidos
                        </Button>
                        <Button
                            as={Link}
                            to="/contacto"
                            className={path === 'contacto' ? 'buttonCustomDisabled fs-5 w-25 m-2 border-2 rounded-pill' : 'buttonCustom fs-5 w-25 m-2 border-2 rounded-pill'}disabled={path === 'contacto'}>Contacto
                        </Button>
                        <Button
                            as={Link}
                            to="/nosotros"
                            className={path === 'nosotros' ? 'buttonCustomDisabled fs-5 w-25 m-2 border-2 rounded-pill' : 'buttonCustom fs-5 w-25 m-2 border-2 rounded-pill'}disabled={path === 'nosotros'}>Nosotros
                        </Button>
                        <Button
                            as={Link}
                            to="/error404"
                            className={path === 'error404' ? 'buttonCustomDisabled fs-5 w-50 m-2 border-2 rounded-pill' : 'buttonCustom fs-5 w-25 m-2 border-2 rounded-pill'}disabled={path === 'error404'}>Sucursales
                        </Button>
                    </Nav>
                    {
                        userLogeado
                            ? <Button as={Link} to="/login" className='buttonLogout rounded-pill m-2 ' onClick={handleLogout}> <FaRegArrowAltCircleRight className='iconoNavBar  ' style={{ fontSize: '23px' }} /> Cerrar Sesion</Button>
                            : <>
                                <Button as={Link} to="/login" className='buttonCustom rounded-pill m-2'> Inicia Sesion</Button>
                                <Button as={Link} to="/register" className='mx-3 buttonCustom rounded-pill'>Registrate</Button>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;