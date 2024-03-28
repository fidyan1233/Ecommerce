import React from 'react'
import "../../../styles/footer.css"
import Store from "../../../images/store.png";
import User from "../../../images/user.png";
import Cart from "../../../images/shopping-cart.png";
import Home from "../../../images/home.png";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main:"#609F00"
      },
    },
  });
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
                    <Link to={'products'}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon style={{color:'#8c8c8c',fontSize:"30px",marginBottom:"-8px"} } />
                        </Badge>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link to={'products'}><img src={User} alt='Store' /></Link>

                </div>
            </div>
        </div>
    )
}

export default ResFooter