import React, { useEffect, useState } from 'react';
import restaurenteApi from '../../api/restauranteApi';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';


export const PedidosScreen = () => {
    const navigate = useNavigate();
    const [cargarProductosSeleccionados, setCargarProductosSeleccionados] = useState([])
    const [precioFinal, setPrecioFinal] = useState(0)
    const cargarPedidosUsuarios = async () => {
        try {
            const resp = await restaurenteApi.get("/pedidos/")
            setCargarProductosSeleccionados(resp.data.cargarProducto)
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        }
    }

    const precioTotal = () => {
        let total = 0
        const sumaProductos = cargarProductosSeleccionados.map((valor) => {
            return (
                total = total + parseInt(valor.precio)
            )
        })
        setPrecioFinal(sumaProductos.pop())
    }

    const confirmarPedido = async () => {
        try {
            const resp = await restaurenteApi.post("/pedidos/pedido", {
                menu: cargarProductosSeleccionados
            })
            setCargarProductosSeleccionados([])
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        }
    }

    useEffect(() => {
        cargarPedidosUsuarios()
    }, [])

    useEffect(() => {
        precioTotal()
    }, [cargarPedidosUsuarios])

    return (
        <div className="text-center container py-5 containerCustom mt-5">
            <div className="row">
                {cargarProductosSeleccionados.map((producto) => {
                    return (
                        <div key={producto._id} className="col-lg-3 col-md-6 mb-4">
                            <div className="card bg-transparent text-white border border-0">
                                <div >
                                    <img src={producto.imagen} className=" border border-3 img-fluid " />
                                </div>
                                <div className="card-body bg-transparent">
                                    <h5 className="tituloCustom">{producto.nombre}</h5>

                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                <hr className='border border-white border-3 opacity-75' />
            </div>
                <div className='ms-4'>
                    <p className=' fs-2 text-white tituloCustom'>Total: <span>{precioFinal}</span></p>
                    <Button as={Link} to="/" variant="light" className='buttonCustom3 mt-3 text-white' onClick={confirmarPedido}>Confirmar Pedido</Button>
                </div>
        </div>
        
    )
}
