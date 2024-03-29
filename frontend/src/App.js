
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js';
import Home from './component/Home/Home.js';
import ResFooter from './component/layout/Footer/ResFooter.js';
import ProductDetails from './component/Product/ProductDetails.js';
import Product from './component/Product/Products.js';
import { useState } from 'react';







function App() {
  // const [price, setPrice] = useState([0, 1500]);
  return (
    <Router>
      <Header  />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/products' element={<Product />} />
        <Route  path='/products/:keyword' element={<Product />} />
      </Routes>
      <ResFooter />
      <Footer />
    </Router>
  );
}

export default App;
