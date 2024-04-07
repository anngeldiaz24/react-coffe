import { formatearDinero } from "../helpers";
import useCoffeShop from "../hooks/useCoffeShop"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {

  const {pedido, total, handleSubmitNuevaOrden} = useCoffeShop();
  /* console.log(pedido); */

  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitNuevaOrden();
  }
  
  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        My order
      </h1>
      <p className="text-lg my-5">
        Here you can see the summary and total of your order.
      </p>
      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">No items yet</p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto
              key={producto.id}
              producto={producto} />
          ))
        )}
      </div>

      <p className="text-xl mt-10">
        Total: {''}
        {formatearDinero(total)}
      </p>

      <form className="w-full"
          onSubmit={handleSubmit}
        >
        <div className="mt-5">
        <button 
          type="submit"
          className={`${comprobarPedido() ? 
            'bg-indigo-100' : 
            'bg-indigo-600 hover:bg-indigo-800' } 
            px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
          disabled={comprobarPedido()}
        >
          Confirm order
        </button>
        </div>
      </form>
    </aside>
  )
}
