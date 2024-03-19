import React, { Fragment, useEffect } from 'react'
import Banner from "../../images/banner.png"
import "../../styles/Home.css";
import Product from "./Product.js"
import MetaData from '../layout/MetaData.js';
import { getProduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from "react-redux";



function Home() {
    const dispatch = useDispatch();
    const { loading, error, products, productCount } = useSelector(
        (state) => state.products
    );
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])
    return (
        <Fragment>
            <MetaData title="VanguardVigor Home Page" />

            <div className="banner">
                <img src={Banner} alt="" />
            </div>

            <h2 className='homeHeading'>Featured Products</h2>


            <div className="product-container" id='conatiner'>
                {
                    products && products.map((product) => (
                        <Product product={product} />
                    )
                    )
                }


            </div>
        </Fragment>
    )
}

export default Home