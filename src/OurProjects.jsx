import React from "react";
import img1 from './images/sec7-1.png';
import img2 from './images/sec7-2.png';
import img3 from './images/sec7-3.png';
import img4 from './images/sec7-4.png';
import img5 from './images/sec7-5.png';
import img6 from './images/sec7-6.png';
import right from './images/chevron-right-black.svg'

function OurProjects() {
    return (
        <section className="container-fluid section7">
            <div className="container">
                <h1>Our Projects</h1>
                <p>
                    With tools to make every part of your process more human and a support team excited to help you, getting
                    started with us never been easier.
                </p>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="sec7-card">

                       <img src={img1}
                                    alt="" className="main-img"/>
                            <h2>Residential Interior Designer In New York, USA</h2>
                            <div className="d-flex justify-content-between">
                                <h3>Kitchen Design</h3>
                                <button className="white">
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="sec7-card">
                            <img src={img2} alt="" className="main-img"/>
                                <h2>Residential Interior Designer In New York, USA</h2>
                                <div className="d-flex justify-content-between">
                                    <h3>Living Room</h3>
                                    <button className="white">
                                        <img src={right} alt="" />
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="sec7-card">
                            <img src={img3}
                                alt="" className="main-img" />
                            <h2>Residential Interior Designer In New York, USA</h2>
                            <div className="d-flex justify-content-between">
                                <h3>Bedroom</h3>
                                <button className="white">
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="sec7-card">
                            <img src={img4}
                                alt="" className="main-img" />
                            <h2>Residential Interior Designer In New York, USA</h2>
                            <div className="d-flex justify-content-between">
                                <h3>Bedroom</h3>
                                <button className="white">
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="sec7-card">
                            <img src={img5}
                                alt="" className="main-img" />
                            <h2>Residential Interior Designer In New York, USA</h2>
                            <div className="d-flex justify-content-between">
                                <h3>Bedroom</h3>
                                <button className="white">
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="sec7-card">
                            <img src={img6}
                                alt="" className="main-img" />
                            <h2>Residential Interior Designer In New York, USA</h2>
                            <div className="d-flex justify-content-between">
                                <h3>Bedroom</h3>
                                <button className="white">
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurProjects;