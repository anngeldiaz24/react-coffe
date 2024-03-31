import { createContext } from "react"

//Ejemplo de context API
//Context permite comunicar de manera directa entre componentes
//A pesar de tener intermediarios entre estos
const CoffeContext = createContext();

const CoffeProvider = ({children}) => {
    
    //Funciones y logica que utilizaras
    const autenticado = true;

    return (
        <CoffeContext.Provider
            value ={{ 
                //le pasas argumentos para con el hook poder tener acceso a ellos en otros argumentos
                autenticado
            }}
        >{children}</CoffeContext.Provider>
    )
}

export {
    CoffeProvider
}

export default CoffeContext