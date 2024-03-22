import React, { Fragment, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import '../../styles/productDetails.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: "20",
    value: 4.5,
    isHalf: true,



}
const ProductDetails = () => {
    const { id } = useParams(); // Access the id from the route params

    const dispatch = useDispatch();


    const { product, loading, error } = useSelector(state => state.productDetails);
    useEffect(() => {
        dispatch(getProductDetails(id)); // Use the id obtained from useParams
    }, [dispatch, id]);

    return (
        <Fragment>
            {/* <div className="PoductDetails">
                <div className='product-img'>
                    <Carousel>
                        {product.images && product.images.map((item, i) => (
                            <img
                                className='CarouselImage'
                                key={item.url}
                                src={item.url}
                                alt={`${i} Slide`}
                            />
                        ))}
                    </Carousel>
                </div>
                <div className='productText'>
                    <div className="name">
                        {product.name}
                    </div>
                    
                </div>
            </div> */}
            <div class="grid-container">
                <div class="grid-item1">
                    <div className='product-img'>
                        <Carousel>
                            {product.images && product.images.map((item, i) => (
                                <img
                                    className='CarouselImage'
                                    key={item.url}
                                    src={item.url}
                                    alt={`${i} Slide`}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div class="grid-item2">
                    <div className="product-details">
                        <div className="name">
                            <h1>{product.name}</h1>
                        </div>
                        <div className="product-desc">
                            <p>{product.description}</p>
                        </div>
                        <ReactStars {...options} />
                        <span>({product.numOfReviews} Reviews)</span>

                        <h3>{`₹${product.price}`}</h3>


                        <div className="cart-add-btn">
                            <button>-</button>
                            <input value="1" type="number" />
                            <button>+</button>
                        </div>{" "}

                        <div className="cart-btn">
                            <button>Add to Cart</button>

                        </div>




                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default ProductDetails;