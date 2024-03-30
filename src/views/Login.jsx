export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black uppercase">Log in</h1>
        <p className="mt-5">To place an order, you need to log in to the platform</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
        
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="email"
                        >Email:
                    </label>
                    <input 
                        type="email"
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="example@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="password"
                        >Password:
                    </label>
                    <input 
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="*******"
                    />
                </div>
                <input 
                    type="submit"
                    value="Log in"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"/>
            </form>
        </div>
    </>
  )
}
