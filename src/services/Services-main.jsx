import React from "react";
import img1 from '../images/services1.png';
import img2 from '../images/services2.png';
import vector1 from '../images/Vector1.svg';
import vector2 from '../images/vector2.svg';

function ServicesMain(){
    return(
        <section class="container-fluid section2-services">
        <div class="container sec2-services-container">
            <h1>How We Work</h1>
            <p>
            The world needs innovators and problem solvers who turn challenges into greater
opportunities about transformative trends challenging the status.
            </p>
            <div class="row margin-104">
                <div class="col-md-6 col-lg-6 sm-none">
                    <img src={img1} alt="" class="sec2-service-main-img"/>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec2-services-content">
                        <img src={vector1} alt=""/>
                        <h2>Planning & Designing</h2>
                        <p>
                            Constructor explains how you can enjoy high end flooring trends like textured wood and
                            realistic stones with new laminate flooring.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 md-none d-lg-none">
                    <img src={img1} alt="" class="sec2-service-main-img"/>
                </div>
            </div>
            <div class="row margin-104">
                <div class="col-md-6 col-lg-6">
                    <div class="sec2-services-content2">
                        <img src={vector2} alt=""/>
                        <h2>Evaluation</h2>
                        <p>
                            Our highly educated staff will make sure that your project will be finished on time and
                            specified budget house & remodeling..
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <img src={img2} alt="" class="sec2-service-main-img2"/>
                </div>
            </div>
            <div class="row margin-104">
                <div class="col-md-6 col-lg-6 sm-none">
                    <img src={img1} alt="" class="sec2-service-main-img"/>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec2-services-content">
                        <img src={vector1} alt=""/>
                        <h2>Planning & Designing</h2>
                        <p>
                            Constructor explains how you can enjoy high end flooring trends like textured wood and
                            realistic stones with new laminate flooring.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 md-none d-lg-none">
                    <img src={img1} alt="" class="sec2-service-main-img"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="sec2-services-content2">
                        <img src={vector2} alt=""/>
                        <h2>Evaluation</h2>
                        <p>
                            Our highly educated staff will make sure that your project will be finished on time and
                            specified budget house & remodeling.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <img src={img2} alt="" class="sec2-service-main-img2"/>
                </div>
            </div>

        </div>
    </section>
    )
}
export default ServicesMain;