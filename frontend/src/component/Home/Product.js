import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FED144",
    size: "20",
    value: 2.5,
    isHalf: true,



}
const Product = ({ product }) => {
    return (
        <>
            <Link className='productCard' to={`/product/${product._id}`}>
                <img src={product.images[0].url} alt={product.name} />
                <p>{product.name}</p>
                <div className='prod-desc'>best quality t-shirts, grey color premium printing</div>

                <div>
                    <ReactStars {...options} />
                </div>
                <span>{`₹${product.price}`}</span>
                <button>Add to Cart</button>
            </Link>
        </>
    )
}

export default Product