import React from "react";
import img1 from '../images/Group 1.svg'
import { Link } from "react-router-dom";
function Header5() {
    return (
        <header className="container-fluid px-0">
            <div className="bg-header-services">
                <div className="overlay">
                    <nav className="container-fluid">
                        <div className="container d-flex justify-content-between">
                            <Link to='/'><img src={img1} alt="" /></Link>
                            <div className="offcanvas-btn d-lg-none d-xl-none">
                                <button className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                    aria-controls="offcanvasExample">
                                    <i className="fa-solid fa-bars"></i>
                                </button>

                                <div className="offcanvas offcanvas-start w-80" tabindex="-1" id="offcanvasExample"
                                    aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                            <img src={img1} alt="" />
                                        </h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="p-0">
                                            <li> <Link to='/' className="color-a">Home</Link> </li>
                                            <li> <Link to='/about' className="color-a">About Us</Link> </li>
                                            <li> <Link to='/services' className="color-a"> Services</Link></li>
                                            <li><Link to='/projects' className="color-a">Projects</Link></li>
                                            <li><Link to='/contactus' className="color-a">Contact Us</Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <ul className="p-0 sm-none md-none">
                                <li> <Link to='/' className="color-a">Home</Link> </li>
                                <li> <Link to='/about' className="color-a">About Us</Link> </li>
                                <li> <Link to='/services' className="color-a"> Services</Link></li>
                                <li><Link to='/projects' className="color-a">Projects</Link></li>
                                <li><Link to='/contactus' className="color-a">Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header-content-about">
                        <div className="container">
                            <h1>Contact Us</h1>
                            <span><Link to='/'>Home</Link>&nbsp; / <Link to='/contactus'>Contact Us</Link></span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header5;