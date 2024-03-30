import React from 'react'
import ReactDOM from 'react-dom/client'
//Es necesario para poder importar router
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
