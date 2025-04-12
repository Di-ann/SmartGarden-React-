// src/App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './assets/styles/Global.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import GreenCity from './components/Green_city.js';
import GreenOffice from './components/Green_office.js';
import OurProducts from './components/Our_products.js';
import ContactUs from './components/Contact_us.js';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>  
        <Route path = "/green_city" element={<GreenCity/>}/>
        <Route path = "/green_office" element={<GreenOffice/>}/>
        <Route path = "/our_products" element={<OurProducts/>}/>
        <Route path = "/contact_us" element={<ContactUs/>}/>
      </Routes> 
      <Footer/>     
    </Router>
  );
};

export default App;
