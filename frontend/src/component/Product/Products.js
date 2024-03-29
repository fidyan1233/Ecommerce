import React, { Fragment, useEffect, useState } from 'react'
import { clearErrors, getProduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from "react-redux";
import ProductCard from '../Home/ProductCard.js';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import {useAlert} from 'react-alert';

const Products = ({price,category,ratings}) => {
    const dispatch = useDispatch();
    const { keyword } = useParams(); // Access the id from the route params
    const [currentPage, setCurrentPage] = useState(1)
    const alert = useAlert();

    const { products, error, productsCount, resultPerPage } = useSelector(state => state.products)



    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }
    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword,currentPage,price,category,ratings));

    }, [dispatch, keyword,currentPage,price,category,ratings,alert,error])
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
        {resultPerPage < productsCount && (
                <div className="paginationBox">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass='page-item'
                    linkClass='page-link'
                    activeClass='pageItemActive'
                    activeLinkClass='pageLinkActive'
                />
            </div>
            )};

        </Fragment>

    )
}

export default Products