import {Link} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AdminSidebar() {
    const {logout} = useAuth({middleware: 'auth'});
  return (
    <aside className='md:w-72 h-screen'>
        <div className='p-4'>
            <img 
                src="/img/logo.svg"
                alt="imagen logo tipo"
                className='w-40'
            />
        </div>
        <nav className='flex flex-col'>
            <Link to="/admin" className='font-bold text-lg'>Orders</Link>
            <Link to="/admin/productos" className='font-bold text-lg'>Meals</Link>
        </nav>
        <div className='my-5 px-5'>
            <button
                type="button"
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded"
                onClick={logout}
                >Log out
            </button>
        </div>
    </aside>
  )
}

