import React, { Fragment, useEffect } from 'react'
import { clearErrors, getProduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from "react-redux";
import ProductCard from '../Home/ProductCard.js';
import { useParams } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const { keyword } = useParams(); // Access the id from the route params


    const { products, error, productsCount } = useSelector(state => state.products)



    useEffect(() => {
        dispatch(getProduct(keyword));

    }, [dispatch,keyword])
    return (
        <Fragment>

            <h2 className='homeHeading'>All Products</h2>


            <div className="product-container" id='conatiner'>
                {
                    products && products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    )
                    )
                }
            </div>
        </Fragment>

    )
}

export default Products