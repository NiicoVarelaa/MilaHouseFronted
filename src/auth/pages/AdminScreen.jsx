import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaBan, FaCartPlus, FaPenSquare, FaTrash, FaUserCheck } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import restauranteApi from '../../api/restauranteApi';
import { useNavigate } from 'react-router-dom';
import './css/auth.css';
import Swal from 'sweetalert2';


export const AdminScreen = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [isModalOpenEditar, setIsModalOpenEditar] = useState(false);
	
	const [cargarUsuarios, setCargarUsuarios] = useState([]);

	const [cargarProductos, setCargarProductos] = useState([]);

	const [productoEditar, setProductoEditar] = useState({});

	const navigate = useNavigate();

	const [formDate, setFormDate] = useState({
		name: '',
		precio: '',
		imagen: '',
	});

	const handleChangeForm = (e) => {
		setFormDate({
			...formDate,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeFormEditar = (e) => {
		setProductoEditar({
			...productoEditar,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		const { name, precio, imagen } = formDate;

		if (
			name.length === 0 ||
			precio.length === 0 ||
			imagen.length === 0
		) {
			return console.log('todos los campos son obligatorios');
		}
		console.log(formDate);

		guardarProductoDB(name, precio, imagen);

		setIsModalOpen(false);
		setFormDate({
			name: '',
			precio: '',
			imagen: '',
		})
	};

	const cargarUser = async () => {
		try {
			const resp = await restauranteApi.get('/admin/usuarios');

			setCargarUsuarios(resp.data.usuarios);
		} catch (error) {
			console.log(error);
		}
	};

	const cargarProductosDB = async () => {
		try {
			const resp = await restauranteApi.get('/admin/productos');

			setCargarProductos(resp.data.productos);
		} catch (error) {
			console.log();
			if (error.response.status === 401) {
				localStorage.removeItem('token');
				navigate('/login');
			}
		}
	};

	const guardarProductoDB = async (nombre, precio, imagen) => {
		try {
			const resp = await restauranteApi.post('/admin/new', {
				nombre,
				precio,
				imagen,
			});

			console.log(resp);
		} catch (error) {
			if (error.response.status === 401) {
				localStorage.removeItem('token');
				navigate('/login');
			}
		}
	};

	const eliminarProductoClick = async (id) => {
		try {
			const resp = await restauranteApi.delete(`/admin/eliminar/${id}`);
			console.log(resp);
		} catch (error) {
			if (error.response.status === 401) {
				localStorage.removeItem('token');
				navigate('/login');
			}
		}
	};

	const confirmarEliminarProducto = (id) => {
		Swal.fire({
			title: '¿Esta Seguro de eliminar el producto?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Confirmar',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Producto Eliminado', '', 'success')
				eliminarProductoClick(id)
				return
			} else if (result.isDenied) {
				Swal.fire('No Eliminado', '', 'info')
			}
		})
	}

	const editarProductoDB = async (_id, nombre, precio, cantidad) => {
		try {
			const resp = await restauranteApi.put('admin/editar', {
				_id,
				nombre,
				precio,
				cantidad
			});

			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	};

	const confirmarSuspenderUsuario = ({ _id }) => {
		Swal.fire({
			title: '¿Esta Seguro de Suspender al Usuario?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Confirmar',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Usuario Suspendido', '', 'success')
				suspenderUsuarioClick(_id)
				return
			} else if (result.isDenied) {
				Swal.fire('No Suspendido', '', 'info')
			}
		})
	}

	const suspenderUsuarioClick = async (_id) => {

		try {
			const resp = await restauranteApi.put('admin/suspender', {
				_id,
			});

			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	}

	const activarUsuarioClick = async (_id) => {
		try {
			const resp = await restauranteApi.put('admin/activar', {
				_id,
			});

			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	}

	const confirmarActivarUsuario = ({ _id }) => {
		Swal.fire({
			title: '¿Esta Seguro de Activar al Usuario?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Confirmar',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Usuario Activado', '', 'success')
				activarUsuarioClick(_id)
				return
			} else if (result.isDenied) {
				Swal.fire('No Activado', '', 'info')
			}
		})
	}

	const handleSubmitFormEditar = (e) => {
		e.preventDefault();
		const { _id, nombre, precio, cantidad } = productoEditar;

		if (
			nombre.length === 0 ||
			precio.length === 0 ||
			cantidad.length === 0
		) {
			return console.log('Todos los campos son obligatorios');
		}

		setIsModalOpenEditar(false);

		editarProductoDB(_id, nombre, precio, cantidad);
	};

	const editarProductoClick = (producto) => {
		setProductoEditar(producto);
		setIsModalOpenEditar(true);
	};

	useEffect(() => {
		cargarUser();
		cargarProductosDB();
	}, []);

	return (
		<>
			<div className='container'>
				<h1 className="text-center p-3 tituloTableCustom ">Administración</h1>
				<h3 className='tituloTableCustom ms-3 mt-5 fs-2'>Usuarios</h3>
				<Table striped bordered hover className='tableCustom m-3 text-white text-center'>
					<thead>
						<tr>
							<th className='tituloTableCustom fs-5'>#ID</th>
							<th className='tituloTableCustom fs-5'>Nombre</th>
							<th className='tituloTableCustom fs-5'>Email</th>
							<th className='tituloTableCustom fs-5'>Activar</th>
							<th className='tituloTableCustom fs-5'>Suspender</th>
						</tr>
					</thead>
					{cargarUsuarios.map((usuario) => {
						const isUsuarioSuspendido = usuario.suspendido;
						return (
							<tbody key={usuario._id} >
								<tr>
									<td className='textTableCustom'>{usuario._id}</td>
									<td className='textTableCustom w-25'>{usuario.nombre}</td>
									<td className='textTableCustom '>{usuario.email}</td>
									<td>
										<Button variant="light" className='buttonCustom3 text-white' onClick={() => confirmarActivarUsuario(usuario)} disabled={!isUsuarioSuspendido}>
											<FaUserCheck className='mb-1 me-1' />
											Activar
										</Button>
									</td>
									<td>
										<Button variant="light" className='buttonCustom4 text-white' onClick={() => confirmarSuspenderUsuario(usuario)}>
											<FaBan className='mb-1 me-1' />
											Suspender
										</Button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</Table>

				<h3 className="tituloTableCustom mt-5 ms-3 fs-2">Productos</h3>

				<div className="d-flex justify-content-end me-5">
					<Button className="buttonCustom5 bg-transparent" onClick={() => setIsModalOpen(true)}>
					<FaCartPlus className='iconoTableCustom' />
					</Button>
				</div>

				<Table striped bordered hover className='tableCustom m-3 text-white text-center'>
					<thead>
						<tr>
							<th className='tituloTableCustom fs-5'>#ID</th>
							<th className='tituloTableCustom fs-5'>Nombre Producto</th>
							<th className='tituloTableCustom fs-5'>Precio</th>
							<th className='tituloTableCustom fs-5'>Imagen</th>
							<th className='tituloTableCustom fs-5'>Editar</th>
							<th className='tituloTableCustom fs-5'>Eliminar</th>
						</tr>
					</thead>
					{cargarProductos.map((producto) => {
						return (
							<tbody key={producto._id}>
								<tr>
									<td className='textTableCustom'>{producto._id}</td>
									<td className='textTableCustom'>{producto.nombre}</td>
									<td className='textTableCustom'>{producto.precio}</td>
									<td className='textTableCustom w-25'>{producto.imagen}</td>
									<td>
										<Button variant="light" className='buttonCustom3 text-white' onClick={() => editarProductoClick(producto)}>
											<FaPenSquare className='mb-1 me-1' />
											Editar
										</Button>
									</td>
									<td>
										<Button variant="light" className='buttonCustom4 text-white' onClick={() => confirmarEliminarProducto(producto._id)}>
											<FaTrash className='mb-1 me-1' />
											Eliminar
										</Button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</Table>

				<Modal ariaHideApp={false} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modalCustom p-3 mt-5 ps-4 container">
					<h2 className='mt-5 tituloModalCustom ms-5'>Agregar Producto</h2>
					<Form onSubmit={handleSubmitForm}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className='mt-4 textModalCustom fs-5'>Nombre</Form.Label>
							<Form.Control
								type="text"
								name="name"
								minLength="2"
								maxLength="25"
								value={formDate.name}
								onChange={handleChangeForm}
								className="w-50"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className='textModalCustom fs-5'>Precio</Form.Label>
							<Form.Control
								type="number"
								name="precio"
								min="1"
								max="99999"
								className="w-50"
								value={formDate.precio}
								onChange={handleChangeForm}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className='textModalCustom fs-5'>Imagen</Form.Label>
							<Form.Control
								type="text"
								name="imagen"
								minLength="2"
								maxLength="200"
								className="w-50"
								value={formDate.imagen}
								onChange={handleChangeForm}
							/>
						</Form.Group>
						<Button type="submit" className='mt-3'>Agregar</Button>
					</Form>
				</Modal>

				<Modal
					ariaHideApp={false} isOpen={isModalOpenEditar}
					onRequestClose={() => setIsModalOpenEditar(false)} className="modalCustom p-3 mt-5 ps-4 container">
					<h2 className='mt-4 tituloModalCustom ms-5'>Editar producto</h2>
					<Form onSubmit={handleSubmitFormEditar}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className='mt-4 textModalCustom fs-5'>Nombre</Form.Label>
							<Form.Control
								type="text"
								name="name"
								minLength="2"
								maxLength="25"
								value={productoEditar.nombre}
								onChange={handleChangeFormEditar}
								className="w-50"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className='textModalCustom fs-5'>Precio</Form.Label>
							<Form.Control
								type="number"
								name="precio"

								className="w-50"
								value={productoEditar.precio}
								onChange={handleChangeFormEditar}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className='textModalCustom fs-5'>Imagen</Form.Label>
							<Form.Control
								type="text"
								name="imagen"
								minLength="2"
								maxLength="200"
								className="w-50"
								value={productoEditar.imagen}
								onChange={handleChangeFormEditar}
							/>
						</Form.Group>
						<Button type="submit" className='mt-3'>Agregar</Button>
					</Form>
				</Modal>
			</div>
		</>
	);
};
