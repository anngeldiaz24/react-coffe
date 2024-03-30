import {Outlet} from 'react-router-dom'

export default function AuthLayout() {
  return (
    /* md:flex row permite que si son resoluciónes pequeñas se vaya en form de fila (abajo) */
    <main className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>
        <img src='../img/logo.svg'
            alt='logo'
            className="max-w-xs"/>

        <div className='p-10 w-full'>
            <Outlet />
        </div>
        
    </main>
  )
}
