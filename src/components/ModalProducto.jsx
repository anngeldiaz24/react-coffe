//Para tener acceso al producto
import useCoffeShop from "../hooks/useCoffeShop"
import {useState, useEffect} from 'react'

import { formatearDinero } from "../helpers";

export default function ModalProducto() {

    const { producto, handleClickModal, handleAgregarPedido, pedido } = useCoffeShop();
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    //Siempre tendra un callback()
    //Cada que cambie el pedido, se vuelve a ejecutar
    //Lo utilizaremos para detectar si el producto ya esta agregado en el pedido
    useEffect(() => {
        //Comprueba si el producto ya se encuentra en el pedido
        if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]

            //Recupera la cantidad del producto seleccionado
            setCantidad(productoEdicion.cantidad)
            setEdicion(true)
        }
    }, [pedido])
    //Arreglo de dependencias

    /* console.log(producto); */
    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img
                    alt={`${producto.nombre}`} 
                    src={`/img/${producto.imagen}.jpg`} 
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
                <p className="mt-5 font-black text-5xl text-amber-500">{ formatearDinero(producto.precio) }</p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad <= 1) return
                            setCantidad(cantidad-1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad >= 5) return
                            setCantidad(cantidad+1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>


                <button type="button" 
                        className="bg-indigo-600 hover:bgindigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded" 
                        /* Le pasamos un objeto para pasar producto y cantidad (... para que cantidad sea parte del objeto) */
                        onClick={() => {
                            handleAgregarPedido({...producto, cantidad})
                            handleClickModal()
                        }}>
                    {edicion ? 'Save changes' : 'Add to order'}
                </button>


            </div>
        </div>
    )
}
