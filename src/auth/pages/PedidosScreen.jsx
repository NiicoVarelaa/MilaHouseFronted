import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import restaurenteApi from '../../api/restauranteApi';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';




export const PedidosScreen = () => {
    const navigate = useNavigate();
    const [cargarProductosSeleccionados, setCargarProductosSeleccionados ] = useState([])
    const [precioFinal, setPrecioFinal ] = useState(0)
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
        let total=0
        const sumaProductos = cargarProductosSeleccionados.map((valor) => {
            return (
                total=total + parseInt(valor.precio)
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
        <div>
            < NavBar />
            {cargarProductosSeleccionados.map((producto)=>{
                return(
                    <div>
                        <h4 className="mt-4 fs-4 p-4 text-white tituloCustom"><strong>Producto</strong></h4>
                        <p className='ms-4 fs-6 text-white tituloCustom'>{producto.nombre}<span>${producto.precio}</span></p>
                    </div>
                )
                
            })}
            <hr className='border border-white border-3 opacity-75'/>
            <div className='ms-4'>
                <p className=' fs-2 text-white tituloCustom'>Total: <span>{precioFinal}</span></p>
                <Button variant="light" className='buttonCustom3 mt-3 text-white' onClick={confirmarPedido}>Confirmar Pedido</Button>
            </div>
        </div>
        
    )
}
