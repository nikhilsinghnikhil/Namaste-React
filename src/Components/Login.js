import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center m-8 ">
      <div className="flex flex-col w-full max-w-sm gap-2 ">
        <div>
          <h2 className="font-bold text-4xl">Login</h2>
          <p>
            or{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-red-500 font-bold cursor-pointer "
            >
              create an account
            </span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Mobile no"
          className="border p-2 rounded"
        />
        <button className=" bg-blue-600 text-white p-2 rounded">Login</button>

        <p className="text-xs text-gray-600 text-center">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
