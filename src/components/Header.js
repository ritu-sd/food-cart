import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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