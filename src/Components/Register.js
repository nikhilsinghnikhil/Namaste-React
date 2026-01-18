import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [showReferal, setShowReferal] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col m-5 gap-4">
        <input
          type="text"
          placeholder="Phone no"
          className="border p-2 rounded"
        />
        <input type="text" placeholder="Name" className="border p-2 rounded" />
        <input type="text" placeholder="Email" className="border p-2 rounded" />
        <div>
          <p
            className="cursor-pointer"
            onClick={() => {
              setShowReferal(!showReferal);
            }}
          >
            Have a referral code?
          </p>
          {showReferal && (
            <input
              type="text"
              placeholder="Enter referal code"
              className="border p-2 rounded"
            />
          )}
        </div>
        <input
          type="submit"
          value="CONTINUE"
          className=" bg-orange-600 text-white p-2 rounded"
        />
        <p className="text-xs">
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </p>

        <p>
          or{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-red-500 font-bold cursor-pointer "
          >
            Signin
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
