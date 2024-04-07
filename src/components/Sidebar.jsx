import useCoffeShop from '../hooks/useCoffeShop'
import Categoria from '../components/Categoria'
import { useAuth } from '../hooks/useAuth'

export default function Sidebar() {
    //provider retorna un objeto
    const { categorias } = useCoffeShop()
    const {logout, user } = useAuth({middleware: 'auth'})

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img className="w-40"
                    src="img/logo.svg"
                    alt="Logo"
                />
            </div>

            <p className='my-10 text-xl text-center'>Hello: {user?.name}</p>

            <div className="mt-10">
                {/* map Itera y genera un arreglo por cada elemento */}
                {/* ponemos las {} llaves para introducir codigo de javascripto */}
                {categorias.map( categoria => (
                   <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                   />
                ))}
            </div>

            <div className="my-5 px-5">
                    <button
                        type="button"
                        className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                        onClick={logout}
                        >Cancel order
                    </button>
            </div>
        </aside>
    )
}
