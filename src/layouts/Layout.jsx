//Dependencias
import { Outlet } from 'react-router-dom'

//Componentes
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

export default function Layout() {
  return (
    <div className='md:flex'>
        <Sidebar />
        
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
            {/* Outlet permite inyectar contenido de las rutas */}
            <Outlet />
        </main>

        <Resumen />

    </div>
  )
}
