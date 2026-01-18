import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/contant";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import "./Header.css";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header called");
  useEffect(() => {
    console.log("useEffect called");
  });

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //   console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items); // subscribing to the store using a selector
  // useSelector ki help se ham sare items ko cartItems me store karva rhe h.
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
      <div className="">
        <img className="w-40 " src={LOGO_URL}></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us </Link>
          </li>
          <li className="px-4">
            {/* <a href="/about">Contact us</a></li>  isse poora page reload hoga button par click karne se */}
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* isse contact us par click karke without full page reloading ham doosre page par move ho jayenge */}
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">🛒 Cart {cartItems.length}</Link>
          </li>
          {/* <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
          <button>
            <Link to="/signin">Signin</Link>
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
