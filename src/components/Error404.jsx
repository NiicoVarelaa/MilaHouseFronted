import React from 'react';
import ScreenEdit404 from "./images/ScreenEdit404.jpg";
import '../auth/pages/css/layouts.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


export const Error404 = () => {
    return (
        <div>
            <div className='container d-flex justify-content-center imgCustom'>
                <img src={ScreenEdit404} alt="Error404" />
                
            </div>
            <div className='container d-flex justify-content-center mt-3'>
            <Button as={Link} to="/" variant="light" className='buttonCustom2 mt-3 text-white'> <FaHome className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Volver</Button>
            </div>
        </div>
    )
}
