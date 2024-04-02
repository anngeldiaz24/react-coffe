import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"

//Ejemplo de context API
//Context permite comunicar de manera directa entre componentes
//A pesar de tener intermediarios entre estos
const CoffeContext = createContext();

const CoffeProvider = ({children}) => {
    
    //Funciones y logica que utilizaras
    //Estructura nombre del state, state
    const [categorias, setCategorias] = useState(categoriasDB);
    //Estado inicial (Coffe)
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const [modal, setModal] = useState(false);

    //Son productos y por lo tanto iniciara como objeto vacio en el resumen
    const [producto, setProducto] = useState({});

    //Arreglo vacio
    const [pedido, setPedido] = useState([])

    const handleClickCategoria = id => {
        //Nos regresará un arreglo nuevo con la categoria que se presiono
        //con [0] lo hace un objeto
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        //Hacemos el cambio de estado
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        //Si esta en false, lo cambia a true y viceversa
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    //Se elimanan los atributos de categoria_id e imagen
    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        //Toma una copia del arreglo de pedido y agrega este producto
        setPedido([...pedido, producto])
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
                handleAgregarPedido

            }}
        >{children}</CoffeContext.Provider>
    )
}

export {
    CoffeProvider
}

export default CoffeContext