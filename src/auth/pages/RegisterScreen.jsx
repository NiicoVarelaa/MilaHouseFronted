import React, { useState } from 'react';
import restaurenteApi from '../../api/restauranteApi';
import { useNavigate } from 'react-router-dom';
import './css/auth.css';



export const RegisterScreen = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msgError, setMsgError] = useState('');
	const navigate = useNavigate();

	const startRegister = async (nombre, apellido, email, password) => {
		try {
			const resp = await restaurenteApi.post("/auth/new", {
				nombre, apellido, email, password,
			})
			
			navigate("/menu")
		} catch (error) {
			if (error.resonse) {
				setError(true);
				setMsgError(error.response.data.msg);
			} else {
				// Handle the case when there is no response object
			console.error("An error occurred:", error);
			}
		}
	}

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if(!nombre || !apellido || !email || !password){
            setError(true);
			setMsgError('Todos los campos son obligatorios');
			return;
        };

        setError(false);	

		// Enviar Datos al Backend
		startRegister(nombre, apellido, email, password)
    };

    return (
        <div className="register-container">
			<form className="form-container" onSubmit={handleSubmit}>
				<h1 className='text-white'>Registrate</h1>

				{error ? <h3 className="errorStyle">{msgError}</h3> : ''}

				<div className="input-container">
					<label htmlFor="nombre" className='labelCustom'>Nombre:</label>
					<input
						type="text"
						id="nombre"
						minLength="2"
						maxLength="25"
						placeholder="Juan Ignacio"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
                <div className="input-container">
					<label htmlFor="apellido" className='labelCustom'>Apellido:</label>
					<input
						type="text"
						id="apellido"
						minLength="2"
						maxLength="25"
						placeholder="Acosta"
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="email" className='labelCustom'>Correo electrónico:</label>
					<input
						type="email"
						id="email"
						minLength="2"
						maxLength="25"
						placeholder="Nacho@gmail.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="password" className='labelCustom'>Contraseña:</label>
					<input
						type="password"
						id="password"
						minLength="2"
						maxLength="25"
						placeholder="********"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" >Registrarse</button>
			</form>
		</div>
    )
}
