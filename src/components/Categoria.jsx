/*  Props son propiedades o informacion que se pasan entre 
 componentes de React*/
import useCoffeShop from "../hooks/useCoffeShop"

export default function Categoria({categoria}) {

    const {handleClickCategoria} = useCoffeShop();
    const {icono, id, nombre} = categoria;

    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
            <img 
                alt="categoria"
                /* accede a la propiedad icono de categoria */
                src={`/img/icono_${icono}.svg`}
                className="w-12"
            />

            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={handleClickCategoria}
            >{nombre}
            </button>

        </div>
    )
}
