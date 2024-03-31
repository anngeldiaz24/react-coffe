import { productos } from "../data/productos"
import Producto from "../components/Producto"
import useCoffeShop from "../hooks/useCoffeShop"

export default function Inicio() {
  
  //hook (funcion)
  const { categoriaActual } = useCoffeShop()
  
  return (
    <>  
      <h1 className="text-4xl font-black">Menu: {categoriaActual.nombre}</h1>
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
