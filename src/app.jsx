import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import ContactUs from './ContactUs';
import { Route, Routes } from 'react-router-dom';


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
