import React from "react";
import { Link } from 'react-router-dom';
import img1 from './images/Group 1.svg';

function Header3() {
    return (
        <header class="container-fluid px-0">
            <div class="bg-header-services">
                <div class="overlay">
                    <nav class="container-fluid">
                        <div class="container d-flex justify-content-between">
                            <Link exact to='/'><img src={img1} alt="" /></Link>
                            <div class="offcanvas-btn d-lg-none d-xl-none">
                                <button class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                    aria-controls="offcanvasExample">
                                    <i class="fa-solid fa-bars"></i>
                                </button>

                                <div class="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasExample"
                                    aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                                            <img src={img1} alt="" />
                                        </h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <ul class="p-0">
                                            <li> <Link to='/' className="color-a">Home</Link> </li>
                                            <li> <Link to='/about' className="color-a">About Us</Link> </li>
                                            <li> <Link to='/services' className="color-a"> Services</Link></li>
                                            <li><Link to='/projects' className="color-a">Projects</Link></li>
                                            <li><Link to='/contactus' className="color-a">Contact Us</Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <ul class="p-0 sm-none md-none">
                                <li> <Link to='/' className="color-a">Home</Link> </li>
                                <li> <Link to='/about' className="color-a">About Us</Link> </li>
                                <li> <Link to='/services' className="color-a"> Services</Link></li>
                                <li><Link to='/projects' className="color-a">Projects</Link></li>
                                <li><Link to='/contactus' className="color-a">Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="header-content-about">
                        <div class="container">
                            <h1>Services</h1>
                            <span> <Link exact to='/'>Home</Link> &nbsp; / <Link to='/services'>Services</Link> </span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header3;