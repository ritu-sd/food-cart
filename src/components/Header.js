import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

//    let btnName = "LogIn";

    const [btnName,setBtnName] = useState("LogIn");

    return (
        <div className="flex justify-between bg-e4e3df items-center shadow-lg font-mono">
            <div className="pl-5">
                <img className="w-20" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items text-lg ">
                <ul className="flex">
                    <li className="px-5">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="px-5">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-5">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-5">
                      <Link to="/">Cart</Link>
                    </li>
                </ul>
            </div>
            <div className="pr-5">
                <button className="rounded-full bg-gray-800 text-white px-4 py-2" onClick={() => {
                      btnName === "LogIn" ? setBtnName("Logout") : setBtnName("LogIn");
                    }}
                    >{btnName}</button>
            </div>
        </div>
    )
}

export default Header;