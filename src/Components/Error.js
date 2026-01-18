import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100">
            <div className="max-w-md w-full bg-white space-y-4 text-center shadow-2xl p-8 text-center  rounded-2xl">
                <div className="text-6xl">😵‍💫</div>
            <h1 className="font-extrabold text-4xl  text-red-600 tracking-wide"> Oops!!!</h1>
            <h2 className="text-lg font-semibold text-gray-800">Something went wrong...</h2>
            <p className="text-gray-500">Sorry, the page you are looking for does not exist.</p>
            <div className="bg-red-50 text-red-600 font-semibold py-2 rounded-lg">
            <h3>{err.status}:{err.statusText}</h3>
            </div>
            <Link to='/' 
                className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300">⬅ Go Back Home</Link>
            </div>
        </div>  
    )
}

export default Error;