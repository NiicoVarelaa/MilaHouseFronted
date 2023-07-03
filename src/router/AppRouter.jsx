import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../auth/pages/LoginScreen';
import { RegisterScreen } from '../auth/pages/RegisterScreen';
import { HomeScreen } from '../auth/pages/HomeScreen';

import { ContactoScreen } from '../components/ContactoScreen';
import { NavBar } from '../components/NavBar';
import { AdminScreen } from '../auth/pages/AdminScreen';
import { PedidosScreen } from '../auth/pages/PedidosScreen';
import { Error404 } from '../components/Error404';
import { NosotrosScreen } from '../components/NosotrosScreen';





export const AppRouter = () => {

    

    return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<NavBar/>} />
            <Route index element={<HomeScreen/>} />
            <Route path='/pedidos' element={<PedidosScreen/>} />
            <Route path='/contacto' element={<ContactoScreen/>} /> 
            <Route path='/nosotros' element={<NosotrosScreen/>} /> 
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/admin' element={<AdminScreen/>} />
            <Route path='/error404' element={<Error404/>} />
            <Route path='*' element={ <Navigate replace to={"/"}></Navigate>  } />

        </Routes>
    </BrowserRouter>
    )
}
