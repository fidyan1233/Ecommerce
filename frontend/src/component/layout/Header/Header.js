import React, { useState } from "react";
import "../../../styles/header.css"
import Search from "../../../images/search-icon.png";
import User from "../../../images/user.png";
import Logo from "../../../images/logo.png";
import Cart from "../../../images/shopping-cart.png";
import Filter from "../../../images/filter.png"
import { Link, useNavigate } from "react-router-dom";








const Header = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products");
        }

        // Blur the input field to dismiss the keyboard
        e.target.blur();
    };

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchSubmitHandler(e);
        }
    };

    return (
        <>
            <div className="header">

                <div className="logo">
                    <Link to=""><img src={Logo} alt="" /></Link>
                </div>
                <div className="search-bar row ">

                    <form onSubmit={searchSubmitHandler} className="w-100">
                        <div className="col-12">

                        <input
                            type="text"
                            placeholder="Search your Product...."
                            value={keyword}
                            onChange={handleInputChange}
                            onKeyUp={handleKeyPress} // Call searchSubmitHandler on Enter key press
                        />
                        </div>
                    </form>

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
                            <Link to="/products">Products</Link>
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
