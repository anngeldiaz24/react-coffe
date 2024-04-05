//para hacerlo dinamico y reutilizable, le pasamos children
export default function Alerta({children}) {
  return (
    <div className="text-center my-2 bg-red-600 text-white font-bold p-3 uppercase rounded">
        {children}
    </div>
  )
}
