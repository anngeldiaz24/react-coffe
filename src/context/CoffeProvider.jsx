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
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = () => {
        console.log('click categoria');
    }
    
    return (
        <CoffeContext.Provider
            value ={{ 
                //le pasas argumentos para con el hook poder tener acceso a ellos en otros argumentos
                categorias,
                categoriaActual,
                handleClickCategoria,

            }}
        >{children}</CoffeContext.Provider>
    )
}

export {
    CoffeProvider
}

export default CoffeContext