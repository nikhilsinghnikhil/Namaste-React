import { useState } from "react";
import { LOGO_URL } from "../utils/contant";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[btnNameReact , setbtnNameReact]= useState("Login");
     console.log("Header called");
     useEffect(()=>{
            console.log("useEffect called");
     })


    return (
        <div className="header">
            <div className="logo-container">
            <img src={LOGO_URL} className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us </Link>
                    </li>
                    <li > 
                         {/* <a href="/about">Contact us</a></li>  isse poora page reload hoga button par click karne se */}
                        <Link to="/contact">Contact us</Link></li> 
                        {/* isse contact us par click karke without full page reloading ham doosre page par move ho jayenge */}
                    <li>Cart</li>
                    <button className="login" onClick={()=>
                        {btnNameReact==="Login" ? setbtnNameReact("Logout") : 
                        setbtnNameReact("Login")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;