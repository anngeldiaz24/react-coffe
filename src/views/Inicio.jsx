import { productos } from "../data/productos"
import Producto from "../components/Producto"
import useCoffeShop from "../hooks/useCoffeShop"

export default function Inicio() {
  
  //hook (funcion)
  const { autenticado } = useCoffeShop()
  console.log(autenticado)
  return (
    <>  
      <h1 className="text-4xl font-black">Menu</h1>
      <p className="text-2xl my-10" >
        Choose and customize your order here
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
          />
        ))}

      </div>
    </>
  )
}
