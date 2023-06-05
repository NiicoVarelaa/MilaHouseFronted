import React from 'react';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";



export const CardsMenuUser = () => {
    return (
        <div className='text-center container py-4 containerCustom'>
            <h4 className="mt-4 mb-5 fs-1 text-white tituloCustom"><strong>Nuestro Menu</strong></h4>

            <div className='row'>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img1} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Milanesa Especial</h4>
                            <Button as={Link} to="register" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img2} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Milanesa Napolitana</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img3} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Pizzas</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img4} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Hamburguesas</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img5} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Mexicano</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img6} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Lomito Especial</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img7} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Calzone</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='card bg-transparent text-white border border-0'>
                        <div>
                            <img src={img8} alt="Milanesa Especial" className='w-100 border border-3 img-fluid'/>
                        </div>
                        <div className='card-body bg-transparent'>
                            <h4 class="tituloCustom">Papas con Cheddar</h4>
                            <Button as={Link} to="register" variant="light" className='buttonCustom2 mt-3 text-white rounded-pill'> <FaShoppingCart className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
