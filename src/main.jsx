import React from 'react'
import ReactDOM from 'react-dom/client'
//Es necesario para poder importar router
import { RouterProvider } from 'react-router-dom'
//Importamos el coffeprovider para el context API
import { CoffeProvider } from './context/CoffeProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeProvider>
      <RouterProvider router={router} />
    </CoffeProvider>
  </React.StrictMode>,
)
