import React from 'react';
import NavBar from '../components/NavBar';
import '../auth/pages/css/auth.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

export const ContactoScreen = () => {
    return (
        <div>
            <NavBar />
            <div>
            <div className="register-container">
			<form className="form-container" >
				<h1 className='text-white'>Contactanos</h1>

				

				<div className="input-container">
					<label htmlFor="nombre" className='labelCustom'>Nombre:</label>
					<input
						type="text"
						id="nombre"
					/>
				</div>
				<div className="input-container">
					<label htmlFor="email" className='labelCustom'>Correo electrónico:</label>
					<input
						type="email"
						id="email"
					/>
				</div>
                <label htmlFor="email" className='labelCustom'>Consulta:</label>
				<InputGroup className='mb-3'>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
				<button type="submit" >Enviar</button>
			</form>
		</div>
            </div>
        </div>
        
        
    )
}
