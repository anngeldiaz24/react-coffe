import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
//Libreria que permite la comunicación entre las apps
import clienteAxios from "../config/axios";

//Ejemplo de context API
//Context permite comunicar de manera directa entre componentes
//A pesar de tener intermediarios entre estos
const CoffeContext = createContext();

const CoffeProvider = ({children}) => {
    
    //Funciones y logica que utilizaras
    //Estructura nombre del state, state
    const [categorias, setCategorias] = useState([]);
    //Estado inicial (Coffe)
    const [categoriaActual, setCategoriaActual] = useState({});

    const [modal, setModal] = useState(false);

    //Son productos y por lo tanto iniciara como objeto vacio en el resumen
    const [producto, setProducto] = useState({});

    //Arreglo vacio
    const [pedido, setPedido] = useState([])

    const [total, setTotal] = useState(0)

    //Se ejecuta cada cambio 
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (
            producto.precio * producto.cantidad) + total, 0)
            setTotal(nuevoTotal)
    }, [pedido])

    //Obtenemos la información de la API de laravel
    const getCategorias = async () => {
        try{
            //Para acceder a la variable de entorno
            const { data } = await clienteAxios('api/categorias')
            setCategorias(data.data)
            setCategoriaActual(data.data[0])
        } catch(error){
            console.log(error)
        }
    }

    //Como queremos obtener las categorias en cuanto cargue el componente
    useEffect(() => {
        getCategorias();
    }, [])

    const handleClickCategoria = id => {
        //Nos regresará un arreglo nuevo con la categoria que se presiono
        //con [0] lo hace un objeto
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        //Hacemos el cambio de estado
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        //Si esta en false, lo cambia a true y viceversa
        //En true, se muestra el modal
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    //Se eliminan los atributos de categoria_id
    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        
        if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
            //Map itera sobre todos los elementos  del arreglo e identificar cual es el que se modifica en cantidad
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState)

            //Recupera la cantidad del producto seleccionado
            setPedido(pedidoActualizado)
            toast.success('Item updated successfully')
        }else{
            //Toma una copia del arreglo de pedido y agrega este producto
            setPedido([...pedido, producto])
            toast.success('Item Added successfully')
        }
    }

    const handleEditarCantidad = id => {
        //retorna un arreglo
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)

    }

    const handleEliminarProductoPedido = id => {
        
        //Eliminar el id distinto al que se manda
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Item deleted successfully')
    }

    const handleSubmitNuevaOrden = async () => {

        //Es necesario estar loggeado
        const token = localStorage.getItem('AUTH_DATA');

        try {
            const {data} = await clienteAxios.post('/api/pedidos', 
            {
                //Se envia el total al metodo store
                total,
                //renombramos productos por pedido y retorna en productos un arreglo nuevo
                productos: pedido.map(producto => {
                    return {
                        id: producto.id,
                        cantidad: producto.cantidad
                    }
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${token}` 
                }

            })
            //Lo retorna del metodo de store
            toast.success(data.message)
            setTimeout(() => {
                setPedido([])
            }, 1000)
        } catch (error) {
            console.log(error)
            
        }
    }
    
    return (
        <CoffeContext.Provider
            value ={{ 
                //le pasas argumentos para con el hook poder tener acceso a ellos en otros argumentos
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden

            }}
        >{children}</CoffeContext.Provider>
    )
}

export {
    CoffeProvider
}

export default CoffeContext