import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';

export default function Registro() {

    //Leera lo que haya en los inputs
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    //state para actualizar los errores
    const [errores, setErrores] = useState([])

    const handleSubmit = async e => {
        e.preventDefault();

        //Creamos un objeto
        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,   
        }
        console.log(datos)

        try {
            const {data} = await clienteAxios.post('/api/registro', datos)
            //Se imprime el token de la API de laravel
            console.log(data.token)
        }catch(error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

  return (
    <>
        <h1 className="text-4xl font-black uppercase">Create an account</h1>
        <p className="mt-5">Enjoy delicious meals by registering with our platform </p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form onSubmit={handleSubmit}
            noValidate>

                {/* Si existen los errores, los muestra (El componente necesita un key) */}
                { errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="name"
                        >Name:
                    </label>
                    <input 
                        type="text"
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        placeholder="Your name"
                        ref={nameRef}
                    />
                </div>
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
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="password_confirmation"
                        >Confirm your password:
                    </label>
                    <input 
                        type="password"
                        id="password_confirmation"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation"
                        placeholder="*******"
                        ref={passwordConfirmationRef}
                    />
                </div>
                <input 
                    type="submit"
                    value="Register"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"/>
            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/login" className="text-blue-500 hover:text-blue-700 font-bold border-b-2 border-blue-500">
                Log in to your account
            </Link>
        </nav>



    </>

  )
}
