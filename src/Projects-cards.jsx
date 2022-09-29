import React from "react";
import img1 from './images/sec5-1.png';
import img2 from './images/sec5-2.png';
import img3 from './images/sec5-3.png';
import img4 from './images/sec5-4.png';
import img5 from './images/sec5-5.png';
import img6 from './images/sec5-6.png';
import img7 from './images/sec5-7.png';
import img8 from './images/sec5-8.png';
import right from './images/chevron-right.svg';




function ProjectsCards(){
    return(
        <section class="container-fluid section5-projects section5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                     
                            <img src={img1} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                        
                            <img src={img2} alt="" class=" sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                        <img
                                src={img3} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                        <img
                                src={img4} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                        <img
                                src={img5} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                         <img
                                src={img6} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                        <img
                                src={img7} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="sec5-card">

                        <img
                                src={img8} alt="" class="sec5-card-main-img"/>
                        <div class="d-flex sec5-card-content">
                            <div class="">
                                <h2>Winery Dry Creek Building</h2>
                                <h3>Winery Dry Creek Building</h3>
                            </div>
                            <div class="sec5-card-btn">
                                <img src={right} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    )
}
export default ProjectsCards;