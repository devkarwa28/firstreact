import React from "react";
import img1 from './images/phone-call.svg';
import img2 from './images/sec2-img.png';

function Challenging(){
    return(
        <section className="container-fluid section2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="sec2-content">
                        <h1>We Tackle The Most Challenging Designs</h1>
                        <p>
                            The world needs innovators and problem solvers who turn challenges into greater
                            opportunities. We have an insatiable curiosity about transformative trends challenging the
                            status.
                        </p>
                        <div className="call-pill d-flex md-center">
                            <div className="call">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="call-num">
                                <a href="">+91 987 654 3210</a>
                                <br/>
                                <span>Call Us Anytime</span>
                            </div>
                        </div>
                        <div className="sm-center md-center">
                            <a href="contact.html">
                                <button>
                                    Get Free Estimate<i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 md-center">
                    <img src={img2} alt="" className="img-fluid hover-scale1"/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Challenging;