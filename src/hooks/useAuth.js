import { useEffect } from 'react'
import clienteAxios from "../config/axios";
import useSWR from "swr";
import {useNavigate} from 'react-router-dom'

export const useAuth = ({ middleware, url }) => {
    const token = localStorage.getItem('AUTH_DATA'); // Obtener el token del localStorage
    const navigate = useNavigate();

    // Función para realizar la autenticación (login)
    const login = async (datos, setErrores) => {
        try {
            const { data } = await clienteAxios.post('/api/login', datos);
            // Almacenar el token en el localStorage
            localStorage.setItem('AUTH_DATA', data.token);
            setErrores([]); // Limpiar los errores si el login es exitoso
            // Si la operación es exitosa, actualizar los datos en caché utilizando mutate()
            await mutate()
        } catch (error) {
            setErrores(Object.values(error.response.data.errors));
        }
    };

    // Función para realizar el registro (signup)
    const registro = async (datos, setErrores) => {
        try {
            const { data } = await clienteAxios.post('/api/registro', datos)
            localStorage.setItem('AUTH_DATA', data.token);
            setErrores([]);
            await mutate()
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }


    // Función para cerrar sesión (logout)
    const logout = async () => {
      try {
        await clienteAxios.post('/api/logout', null, {
            headers: {
                Authorization: `Bearer ${token}` // Incluir el token en el encabezado de autorización
            }
        })
        //Quitamos el token de la bd
        localStorage.removeItem('AUTH_DATA')
        await mutate(undefined)
      } catch (error) {
        throw new Error(error?.response?.data?.message);
      }
    };

    // Obtener los datos del usuario autenticado usando useSWR
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}` // Incluir el token en el encabezado de autorización
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw new Error(error?.response?.data?.message);
        })
    );

    //para ejecutar una función condicional cuando ciertas dependencias cambian
    useEffect(() => {
        if (middleware === 'guest' && url && user) {
            navigate(url)
        }
        //Si no esta autenticado, lo redirecciona a login
        if (middleware === 'auth' && error) {
            navigate('/auth/login')    
        }
    }, [user, error])

    console.log(middleware)

    return {
        user, 
        error,
        login, 
        registro, 
        logout 
    };
};
