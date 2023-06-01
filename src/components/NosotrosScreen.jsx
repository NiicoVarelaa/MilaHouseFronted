import React from 'react';
import NavBar from './NavBar';
import Nico from './images/Nico.jpg';
import NicoAhumada from './images/NicoAhumada.jpg';
import MatiasMonteros from './images/MatiasMonteros.jpg';
import Marcos from './images/Marcos.jpg';
import { FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../auth/pages/css/index.css';



export const NosotrosScreen = () => {
    return (
        <div>
            <NavBar />
            <div className='text-center container py-4 containerCustom2'>

            <h4 className="mt-4 mb-5 fs-1 text-white tituloCustom"><strong>- COCINANDO EMOCIONES -</strong></h4>
                <p className='text-white tituloCustom'>
                    Nacimos en el 2001, provenientes de una extensa tradición gastronómica familiar. En un comienzo, nos avocamos a comida casera construyendo nuestro propio ADN. En ese camino, nos obsesionamos con la Milanesa perfecta, y haciendo pruebas, lentamente empezamos a testear el producto.
                </p>
                <br />
                <p className='text-white tituloCustom'>
                    El impacto de la gente fue inmediato. Fascinados con la experiencia, se lanzaron a recomendar el sándwich de boca a boca. Ese enorme fervor y entusiasmo que la propia presión de los clientes transformó, hizo de la Mila House un centro de culto para los fanáticos de las Milanesas.
                </p>

                <div className='row'>

                    <div className='col-lg-3 col-md-6 mb-4'>
                        <div className='card  bg-transparent text-white border border-0'>
                            <div>
                                <img src={Nico} alt="" className="w-100 border border-3 img-fluid" />
                            </div>
                            <h5 className="tituloCustom mt-4">Nicolas Varela</h5>
                            <div className='mt-2 d-flex align-items-center justify-content-center'>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaInstagram /> </Button>
                                    <Button as={Link} to="/error404" variant='link ' className='m-1 iconoCustom2'> <FaLinkedin /> </Button>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaGoogle /> </Button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 mb-4'>
                        <div className='card  bg-transparent text-white border border-0'>
                            <div>
                                <img src={MatiasMonteros} alt="" className="w-100 border border-3 img-fluid" />
                            </div>
                            <h5 className="tituloCustom mt-4">Matias Monteros</h5>
                            <div className='mt-2 d-flex align-items-center justify-content-center'>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaInstagram /> </Button>
                                    <Button as={Link} to="/error404" variant='link ' className='m-1 iconoCustom2'> <FaLinkedin /> </Button>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaGoogle /> </Button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 mb-4'>
                        <div className='card  bg-transparent text-white border border-0'>
                            <div>
                                <img src={NicoAhumada} alt="" className="w-100 border border-3 img-fluid" />
                            </div>
                            <h5 className="tituloCustom mt-4">Nicolas Ahumada</h5>
                            <div className='mt-2 d-flex align-items-center justify-content-center'>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaInstagram /> </Button>
                                    <Button as={Link} to="/error404" variant='link ' className='m-1 iconoCustom2'> <FaLinkedin /> </Button>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaGoogle /> </Button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 mb-4'>
                        <div className='card  bg-transparent text-white border border-0'>
                            <div>
                                <img src={Marcos} alt="" className="w-100 border border-3 img-fluid" />
                            </div>
                            <h5 className="tituloCustom mt-4">Marcos Friedli</h5>
                            <div className='mt-2 d-flex align-items-center justify-content-center'>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaInstagram /> </Button>
                                    <Button as={Link} to="/error404" variant='link ' className='m-1 iconoCustom2'> <FaLinkedin /> </Button>
                                    <Button as={Link} to="/error404" variant='link' className='m-1 iconoCustom2'> <FaGoogle /> </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
