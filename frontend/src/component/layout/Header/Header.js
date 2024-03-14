import React from "react";
import "../../../styles/header.css"
import Search from "../../../images/search.png";
import User from "../../../images/user.png";
import Cart from "../../../images/shopping-cart.png";






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
                            <a href=""><img src={Search} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img src={Cart} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img src={User} alt="" /></a>
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
                            <a href=""><img src={Search} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src={Cart} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src={User} alt="" /></a>
                        </li>

                    </ul>
                </div>

            </div>

        
        </>
    );
};


export default Header;
