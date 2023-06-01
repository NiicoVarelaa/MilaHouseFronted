import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../auth/pages/css/layouts.css';
import restaurenteApi from '../api/restauranteApi';



export const CardsMenu = () => {
    const navigate = useNavigate();

    const [cargarProductos, setCargarProductos ] = useState([])
    
    const cargarProductosDB = async () => {
        try {
            const resp = await restaurenteApi.get("/pedidos/cargarProductos")
            setCargarProductos(resp.data.productos)
        } catch (error) {
            if (error.response.status === 401) {
				localStorage.removeItem('token');
				navigate('/login');
			}
        }
    }

    const agregarProducto = async ({nombre, precio, imagen}) => {
        console.log(imagen);
		try {
			const resp = await restaurenteApi.post('/pedidos/guardarPedido', {
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

    useEffect(() => {
        cargarProductosDB()
    }, [])
    

    return (

        <div className="text-center container py-4 containerCustom">
            <h4 className="mt-4 mb-5 fs-1 text-white tituloCustom"><strong>Nuestro Menu</strong></h4>
            <div className="row">
            {
                cargarProductos.map((producto) =>{
                    return (
                        <div key={producto._id} className="col-lg-3 col-md-6 mb-4">
                            <div className="card  bg-transparent text-white border border-0">
                                <div >
                                    <img src={producto.imagen} className=" border border-3 img-fluid " />
                                </div>
                                <div className="card-body bg-transparent">
                                    <h5 className="tituloCustom">{producto.nombre}</h5>
                                    <Button onClick={() => agregarProducto(producto)} variant="light" className='buttonCustom2 mt-3 text-white'> <FaShoppingCart    className='iconoCustom mx-2 p2' style={{ fontSize: '30px' }} />Comprar</Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            } 
            
                

                
            </div>
        </div>
    )
}
