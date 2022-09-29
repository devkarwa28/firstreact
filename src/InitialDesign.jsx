import React from "react";
import img1 from './images/about-1.png'

function InitialDesign(){
    return(
        <section className="container-fluid section1-about">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="sec1-about-content">
                        <h1>Initial Design</h1>
                        <p>
                            Craft design with the mind of delivering clean
                            water and energy. Building iconic skyscrapers. Planning new cities. Restoring damaged
                            building Connecting people and economies with roads.
                        </p>
                        <button>
                            Our Concept<i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-7 text-center">
                     <img src={img1} alt="" className="hover-scale1"/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default InitialDesign;