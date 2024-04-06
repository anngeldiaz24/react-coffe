/* Permite que la pagina no haga una recarga completa para pasar a otra ruta*/
import { Link } from 'react-router-dom'
import { createRef, useState } from 'react'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';


export default function Login() {

    //Leera lo que haya en los inputs
    const emailRef = createRef();
    const passwordRef = createRef();

    //state para actualizar los errores
    const [errores, setErrores] = useState([])

    const handleSubmit = async e => {
        e.preventDefault();

        //Creamos un objeto
        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(datos)

        try {
            const {data} = await clienteAxios.post('/api/login', datos)
            //Se alamcena el token 
            localStorage.setItem('AUTH_DATA', data.token);
            setErrores([])
        }catch(error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

  return (
    <>
        <h1 className="text-4xl font-black uppercase">Log in</h1>
        <p className="mt-5">To place an order, you need to log in to the platform</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form
                onSubmit={handleSubmit}
                noValidate>

                {/* Si existen los errores, los muestra (El componente necesita un key) */}
                { errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}
        
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="email"
                        >Email:
                    </label>
                    <input 
                        type="email"
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="example@example.com"
                        ref={emailRef}
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="password"
                        >Password:
                    </label>
                    <input 
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="*******"
                        ref={passwordRef}
                    />
                </div>
                <input 
                    type="submit"
                    value="Log in"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"/>
            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/registro" className="text-blue-500 hover:text-blue-700 font-bold border-b-2 border-blue-500">
                Create a new account
            </Link>
        </nav>
    </>
  )
}
