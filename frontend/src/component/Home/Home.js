import React, { Fragment } from 'react'
import Banner from "../../images/banner.png"
import "../../styles/Home.css";
import Product from "./Product.js"
import MetaData from '../layout/MetaData.js';


const product = {
    brand: "Tom Hiddle",
    desc: "Printed T-shirts for Mens",
    images: [{ url: "https://i.ibb.co/Z84Ys3m/Whats-App-Image-2024-01-21-at-8-56-04-PM-removebg-preview.png" }],
    price: "₹300",
    _id: "fidyan",
};

function Home() {
    return (
        <Fragment>
            <MetaData title="VanguardVigor Home Page" />

            <div className="banner">
                <img src={Banner} alt="" />
            </div>

            <h2 className='homeHeading'>Featured Products</h2>


            <div className="product-container" id='conatiner'>
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />

            </div>
        </Fragment>
    )
}

export default Home