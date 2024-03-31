import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-black uppercase">Create an account</h1>
        <p className="mt-5">Enjoy delicious meals by registering with our platform </p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
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
