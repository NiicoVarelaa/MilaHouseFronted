import React from 'react';
import NavBar from './NavBar';
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

                
            </div>
        </div>
    )
}
