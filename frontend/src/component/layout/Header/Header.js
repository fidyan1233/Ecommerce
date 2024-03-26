import React from "react";
import "../../../styles/header.css"
import Search from "../../../images/search-icon.png";
import User from "../../../images/user.png";
import Logo from "../../../images/logo.png";
import Cart from "../../../images/shopping-cart.png";
import Filter from "../../../images/filter.png"
import { Link } from "react-router-dom";






const Header = () => {
    return (
        <>
            <div className="header">

                <div className="logo">
                    <Link to=""><img src={Logo} alt="" /></Link>
                </div>
                <div className="search-bar row ">
                    
                    <input type="text" placeholder="Search your Product...." />
                    <img className="search-icon py-2" src={Search} alt="" />
                    {/* <img className="search-icon" src={Search} alt="" /> */}
                    <img className="filter-icon py-2" src={Filter} alt="" />
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

            </div >


        </>
    );
};


export default Header;
