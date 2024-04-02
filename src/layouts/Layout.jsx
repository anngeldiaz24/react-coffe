//Dependencias
import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'

//Componentes
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useCoffeShop from '../hooks/useCoffeShop'
import ModalProducto from '../components/ModalProducto'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//Para poder implementar el modal
Modal.setAppElement('#root')

export default function Layout() {

  const { modal, handleClickModal } = useCoffeShop();

  console.log(modal)

  return (
    <>
      <div className='md:flex'>
          <Sidebar />
          
          <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
              {/* Outlet permite inyectar contenido de las rutas */}
              <Outlet />
          </main>

          <Resumen />
      </div>
      
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />

      </Modal>
    
    </>
  )
}
