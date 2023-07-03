import React, { useState } from 'react';
import restaurenteApi from '../../api/restauranteApi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './css/auth.css';


export const LoginScreen = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [msgError, setMsgError] = useState('');
	const navigate = useNavigate();

	const startLogin = async (email, password) => {
		try {
			const resp = await restaurenteApi.post('/auth/', {
				email,
				password,
			});

			console.log(resp);

			localStorage.setItem('token', resp.data.token);

			if (resp.data.rol === 'usuario') {
				navigate('/pedidos');
			} else {
				navigate('/admin');
			}
		} catch ({ response }) {
			setError(true);
			setMsgError(response.data.msg);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		startLogin(email, password);
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit} className="form-container">
				<h1>Inicia Sesion</h1>

				{error ? <h3 className="errorStyle">{msgError}</h3> : ''}
				<div className="input-container">
					<label htmlFor="username" className='labelCustom'>Email:</label>
					<input
						type="email"
						id="email"
						minLength="2"
						maxLength="25"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="password" className='labelCustom'>Password:</label>
					<input
						type="password"
						id="password"
						minLength="2"
						maxLength="25"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-8 mb-4'>
							<h5 className='fs-6 mt-2 textCuenta'>¿No tienes una cuenta?</h5>
						</div>
						<div className='col-4'>
							<Button as={Link} to="/register" className='btnCuenta'>Registrate
							</Button>
						</div>
					</div>
				</div>
				<button type="submit" >Ingresar</button>
			</form>
		</div>
	)
}
