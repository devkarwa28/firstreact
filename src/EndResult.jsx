import React from "react";
import img1 from './images/about-2.png';

function EndResult(){
    return(
        <section className="container-fluid section2-about">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 sm-none md-none text-center">
                     <img
                            src={img1} alt="" className="hover-scale1"/>
                </div>
                <div className="col-lg-5">
                    <div className="sec1-about-content">
                        <h1>The End Result</h1>
                        <p>
                            With more than 3,500 active clients, we work across the global economy. Our clients are
                            remarkably diverse: large and small, private and public, for-profit and nonprofit.
                        </p>
                        <button>
                            Our Concept<i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-7 d-lg-none">
                 <img src={img1} alt=""/>
                </div>

            </div>
        </div>
    </section>
    )
}
export default EndResult;