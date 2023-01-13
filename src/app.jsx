import React,{ useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import ContactUs from './ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/reponsive.css";
import './css/style.css';
import "./css/main.css";
import Loader from './global/Loader';


function App() {
  return (
    <>

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
    </>
  )
}
export default App;
