import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminLayout from './layouts/AdminLayout'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'


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
    
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [{
           index: true,
           element: <Ordenes /> 
        },
        {
            path: '/admin/productos',
            element: <Productos />

        }]

    }

])

export default router