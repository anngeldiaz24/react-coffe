/* import { productos as data } from "../data/productos" */
//Obtendra nuestras consultas para que sean mas eficientes y en tiempo real una vez que ya traemos toda la info de la API
import useSWR from "swr"
import Producto from "../components/Producto"
import useCoffeShop from "../hooks/useCoffeShop"
import clienteAxios from "../config/axios"

export default function Inicio() {
  
  //hook (funcion)
  const { categoriaActual } = useCoffeShop()

  const token = localStorage.getItem('AUTH_DATA');
  //Consulta SWR
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }).then(data => data.data)

  const { data, error, isLoading } = useSWR('api/productos', fetcher, {
    refreshInterval: 1000
  })

  console.log(data)

  //Filter
  //Creamos una variable llamada productos que filtrara de acuerdo a la categoria del producto
  //y de acuerdo a la categoriaActual que recibe del provider, evaluara 
  if(isLoading) return 'Cargando...';
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)
  
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
            botonAgregar={true}
          />
        ))}

      </div>
    </>
  )
}
