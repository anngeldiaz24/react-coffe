import { formatearDinero } from "../helpers"
import useCoffeShop from "../hooks/useCoffeShop"

export default function Producto({producto}) {
  
    //Ayuda del hook
    const { handleClickModal, handleSetProducto } = useCoffeShop();
    const {nombre, imagen, precio} = producto


    
    return (
    <div className='border p-3 shadow bg-white'>
        <img 
            alt={`imagen ${nombre}`}
            src={`/img/${imagen}.jpg`}
            className="w-full"
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>
            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                /* Asi es la sintaxis (con un arrow function) porque extraera la información del producto para pasarla al componente de resumen*/
                /*Y el producto se ira al resumen*/
                onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}
            >+ Add item</button>
        </div>
    </div>
  )
}
