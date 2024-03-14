
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js';
import Home from './component/Home/Home.js';

function App() {
  return (
    <Router>
      
    <Header/>
    <Route exact path='/' Component={Home}/>
    <Footer/>

  
    </Router>


  );
}

export default App;
