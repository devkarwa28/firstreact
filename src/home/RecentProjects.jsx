import React from "react";
import img1 from '../images/sec5-1.png';
import img2 from '../images/sec5-2.png';
import img3 from '../images/sec5-3.png';
import img4 from '../images/sec5-4.png';
import right from '../images/chevron-right.svg';

function RecentProject(){
    return(
        <section className="container-fluid section5">
        <div className="container">
            <h1>Recent Projects</h1>
            <p>
                With tools to make every part of your process more human and a support team excited to help you, getting
                started with us never been easier.

            </p>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="sec5-card">
                            <img src={img1} alt="" className="sec5-card-main-img"/>
                        <div className="d-flex sec5-card-content">
                            <div className="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                           <a href="preview-1.html">
                            <div className="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                           </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="sec5-card">

                      
                            <img src={img2} alt="" className=" sec5-card-main-img"/>
                        <div className="d-flex sec5-card-content">
                            <div className="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <a href="preview-2.html">
                                <div className="sec5-card-btn">
                                    <img src={right} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="sec5-card">

                       <img
                                src={img3} alt="" className="sec5-card-main-img" />
                        <div className="d-flex sec5-card-content">
                            <div className="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <a href="preview-3.html">
                                <div className="sec5-card-btn">
                                    <img src={right} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="sec5-card">

                        <img
                                src={img4} alt="" className="sec5-card-main-img"/>
                        <div className="d-flex sec5-card-content">
                            <div className="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                           <a href="preview-4.html">
                            <div className="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default RecentProject;