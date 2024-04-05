import axios from "axios"; 

//Creamos un cliente con axios
const clienteAxios=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    //CORS permite proteger tu api
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials:true
})

export default clienteAxios; 