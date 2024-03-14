import React from "react";
import "../../../styles/header.css"
import Search from "../../../images/search.png";
import User from "../../../images/user.png";
import Cart from "../../../images/shopping-cart.png";
import { Link } from "react-router-dom";






const Header = () => {
    return (
        <>
            <div className="header">

                <div className="logo">
                    <h1>VANGUARD VIGOR</h1>
                </div>
                <div className="mobile-icons">
                    <div className="center">
                        <div>
                            <Link to=""><img src={Search} alt="" /></Link>
                        </div>
                        <div>
                            <Link to=""><img src={Cart} alt="" /></Link>
                        </div>
                        <div>
                            <Link to=""><img src={User} alt="" /></Link>
                        </div>

                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            <Link to=""><img src={Search} alt="" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={Cart} alt="" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={User} alt="" /></Link>
                        </li>

                    </ul>
                </div>

            </div>

        
        </>
    );
};


export default Header;
