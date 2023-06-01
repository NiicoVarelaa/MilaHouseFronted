import React from 'react';
import LogoBlanco from "./images/LogoBlanco.png";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../auth/pages/css/layouts.css';


export const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className='footerCustom'>
                <div className='container p-2'>
                    <div className='row'>
                        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3'>
                            <div className='d-flex align-items-center justify-content-center mt-5 mx-auto'>
                                <img src={LogoBlanco} alt="" height={150} width={160} />
                            </div>
                            <div className='col-lg-4 col-md-6 mb-md-0'>
                                <h5 className="text-center fs-3 mt-5 tituloCustom">Sobre Nosotros</h5>
                                <p className='tituloCustom'>Somos un grupo de desarroladores apasionados por la Comida. Desde el 2001 una tradición familiar
                                    las mejores Milanesas en un solo lugar.</p>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
                                <h5 className="text-center mt-5 fs-3 tituloCustom">Contactanos</h5>
                                <div className='mt-4 d-flex align-items-center justify-content-center'>
                                    <Button as={Link} to="/error404" variant='link ' className='m-1'> <FaFacebook className='iconoCustom' style={{ color: 'white', fontSize: '30px' }} /> </Button>
                                    <Button as={Link} to="/error404" variant='link' className='m-1'> <FaInstagram style={{ color: 'white', fontSize: '30px' }} /> </Button>
                                    <Button as={Link} to="/error404" variant='link' className='m-1'> <FaGoogle style={{ color: 'white', fontSize: '30px' }} /> </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3 tituloCustom footerCustom2">
                    Mila House &copy; Todos los Derechos Reservados.
                </div>
            </footer>
        </div>
    )
}