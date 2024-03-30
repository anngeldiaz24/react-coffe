import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        Layout
        {/* Outlet te permite utilizar el componente padre */}
        <Outlet />
    </div>
  )
}
