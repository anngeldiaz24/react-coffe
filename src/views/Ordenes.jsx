import useSWR from 'swr'
import clienteAxios from '../config/axios'
import {formatearDinero} from '../helpers'
import useCoffeShop from '../hooks/useCoffeShop'

export default function Ordenes() {
    const token = localStorage.getItem('AUTH_DATA')
    const fetcher = () => clienteAxios('/api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    })

    const {data, error, isLoading} = useSWR('/api/pedidos', fetcher)

    const {handleClickCompletarPedido} = useCoffeShop()

    if (isLoading) return 'Loading...'

  return (
    <div>
        <h1 className="text-4xl font-black">Orders</h1>
        <p className="text-2xl my-10" >
            Order management
        </p>

        <div className='grid grid-cols-2 gap-5'>
            {data.data.data.map(pedido => (
              <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
                <p className='text-xl font-bold text-slate-600'>
                    Details:
                </p>
                {pedido.productos.map(producto => (
                    <div key={producto.id} className='border-b border-b-slate-200 last-of-type:border-none py-4'>
                        <p className='text-sm'>ID: {producto.id}</p>
                        <p>{producto.nombre}</p>
                        <p>
                            Amount: {''}
                            <span className='font-bold'>{producto.pivot.cantidad}</span>
                        </p>
                    </div>
                ))}

                <p className='text-lg font-bold'>
                    User: {''}
                    <span className='font-normal'>{pedido.user.name}</span>
                </p>
                <p className='text-lg font-bold text-amber-600'>
                    Total: {''}
                    <span className='font-normal text-black'>{formatearDinero(pedido.total)}</span>
                </p>

                <button 
                    onClick={() => handleClickCompletarPedido(pedido.id)}
                    type="button"
                    className='bg-indigo-600 hover:bg-indigo-800px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
                    >
                    Order completed
                </button>

              </div>  
            ))}
        </div>
    </div>
  )
}

