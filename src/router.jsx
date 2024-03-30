import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'

const router = createBrowserRouter([
    {   
        path: '/',
        //Este es un layout (plantilla base de la vista)
        element: <Layout />,
        children:
        [
            {
                index: true,
                //Este es un componente
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: 
        [
            {
                path: '/auth/login',
                element: <Login /> 
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }

        ]
    
    }
])

export default router