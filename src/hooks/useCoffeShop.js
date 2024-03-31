import {useContext} from 'react'
import CoffeContext from '../context/CoffeProvider'

//Hook que tendra acceso a coffeShopContext del CoffeProvider
const useCoffeShop = () => {
    return useContext(CoffeContext)
}

export default useCoffeShop