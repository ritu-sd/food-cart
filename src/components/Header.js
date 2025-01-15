import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

//    let btnName = "LogIn";

    const [btnName,setBtnName] = useState("LogIn");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Cart</Link>
                    </li>
                    <li><button className="btn-login" onClick={() => {
                      btnName === "LogIn" ? setBtnName("Logout") : setBtnName("LogIn");
                    }}
                    >{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;