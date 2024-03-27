import React from 'react'
import "../../../styles/footer.css"
import Store from "../../../images/store.png";
import User from "../../../images/user.png";
import Cart from "../../../images/shopping-cart.png";
import Home from "../../../images/home.png";
import { Link } from "react-router-dom";

const ResFooter = () => {
    return (
        <div className='mobile-footer'>
           <div className="row">
            <div className="col-3 text-center">
                <Link to={'products'}><img src={Store} alt='Store' /></Link>

            </div>
            <div className="col-3 text-center">
                <Link to={'/'}><img src={Home} alt='Store' /></Link>

            </div>
            <div className="col-3 text-center">
                <Link to={'products'}><img src={Cart} alt='Store' /></Link>

            </div>
            <div className="col-3 text-center">
                <Link to={'products'}><img src={User} alt='Store' /></Link>

            </div>
           </div>
        </div>
    )
}

export default ResFooter