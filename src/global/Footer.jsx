import React from "react";
import logo from '../images/Group 1.svg';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="footer-1">
                                <div className="">
                                    <img src={logo} alt="" />
                                </div>
                                <p>
                                    We are the leading architect and interior design firm in the world.
                                </p>
                                <div className="social-media ms-0">
                                    <a href="" className="hover-translate-f"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="" className="hover-translate-t"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="" className="hover-translate-l"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="" className="hover-translate-i"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2">
                            <div className="footer-2">
                                <h1>Pages</h1>
                                <ul className="px-0">
                                    <li> <Link to='/' className="color-a">Home</Link> </li>
                                    <li> <Link to='/about' className="color-a">About Us</Link> </li>
                                    <li> <Link to='/services' className="color-a">Services</Link> </li>
                                    <li> <Link to='/projects' className="color-a">Our Projects</Link> </li>
                                    <li> <Link to='/contactus' className="color-a">Contact Us</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-3">
                                <h1>Useful links</h1>
                                <ul className="px-0">
                                    <li> <Link to='/' className="color-a">Home</Link> </li>
                                    <li> <Link to='/about' className="color-a">About Us</Link> </li>
                                    <li> <Link to='/services' className="color-a">Services</Link> </li>
                                    <li> <Link to='/projects' className="color-a">Our Projects</Link> </li>
                                    <li> <Link to='/contactus' className="color-a">Contact Us</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-4">
                                <h1>Contact</h1>
                                <p>
                                    4517 Washington Ave. Manchester, Kentucky 39495
                                </p>
                                <h3>info@interior.com</h3>
                                <span>+91 987 654 321</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section class="container-fluid copyright-section">
                <div class="container">
                    <h1>Copyright © 2022 interior | Designed & Developed by Team Techish</h1>
                </div>
            </section>
        </>
    )
}
export default Footer;