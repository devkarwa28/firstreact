import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'bootstrap';
import img1 from '../images/Group 1.svg';


function Header() {
    return (
        <header className="container-fluid px-0">
            <div className="bg-header">
                <nav className="container-fluid">
                    <div className="container d-flex justify-content-between">
                        <Link to='/'><img src={img1} alt="" /></Link>

                        <ul className="p-0 sm-none md-none">
                            <li> <Link to='/' className="color-a">Home</Link> </li>
                            <li> <Link to='/about' className="color-a">About Us</Link> </li>
                            <li> <Link to='/services' className="color-a"> Services</Link></li>
                            <li><Link to='/projects' className="color-a">Projects</Link></li>
                            <li><Link to='/contactus' className="color-a">Contact Us</Link></li>
                            
                        </ul>

                    </div>
                </nav>
                <div className='container'>
                <div className="header-content">
                    <h1 className="typewriter">
                        Let's Create Your Dream Interior
                    </h1>
                    <p>
                        The world needs innovators and problem solvers who turn
                        challenges into greater opportunities.
                    </p>
                    <div className="">
                        <button href="services.html">
                            Get Started<i className="fa-solid fa-arrow-right"></i>
                        </button>
                        
                    </div>
                </div>
                </div>

            </div>
        </header>
    )
}
export default Header;