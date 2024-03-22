import React from 'react'
import "../../../styles/footer.css"
import Store from "../../../images/store.png";
import User from "../../../images/user.png";
import Cart from "../../../images/shopping-cart.png";
import { Link } from "react-router-dom";

const ResFooter = () => {
    return (
        <div className='mobile-footer'>
            <div className="center">
                <div className='hsxas'>
                    <Link to=""><img src={Store} alt="" /></Link>
                </div>
                <div className='hsxas'>
                    <Link to=""><img src={Cart} alt="" /></Link>
                </div>
                <div className='hsxas'>
                    <Link to=""><img src={User} alt="" /></Link>
                </div>

            </div>
        </div>
    )
}

export default ResFooter