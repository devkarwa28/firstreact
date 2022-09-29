import React from "react";
import img1 from './images/home.png';
import img2 from './images/nature.png';
function Logos(){
    return(
        <section className="container-fluid section4">
        <div className="container">
            <div className="row-cols-lg-5 sm-none md-none d-lg-flex">
                <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
                <div className="col lg-center">
                    <img src={img2} alt=""/>
                </div>
                <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
                <div className="col lg-center">
                    <img src={img2} alt=""/>
                </div>
                <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
            </div>
        
        </div>
    </section>
    )
}
export default Logos;