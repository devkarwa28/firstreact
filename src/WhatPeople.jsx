import React from "react";
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import Slider from "react-slick";
import './style.css';


function WhatPeople() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
    return (
        
        <section class="container-fluid section3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="color sec3-container">
                            <h1>What the People Thinks
                                About Interno</h1>
                            <div class="sec3-row">
                            <Slider {...settings}>
                                <div>
                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img1} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>
                                </div>

                                <div>
                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>
                                </div>

                                <div>
                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img3} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>
                                </div>
                                <div>
                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img3} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>
                                </div>
                                <div>
                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img3} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>
                                </div>
                                <div>
                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img3} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>
                                </div>
                            </Slider>



                                {/* <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img1} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>

                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div>

                                <div class="sec3-card">
                                    <div class="sec3-card-avtar d-flex">
                                        <div>
                                            <img src={img3} alt="" />
                                        </div>
                                        <div class="name-sec3">
                                            <h2>Lisa Clairton</h2>
                                            <span>New York, USA</span>
                                        </div>
                                    </div>
                                    <p>
                                        We selected Interno interior because of rigorous design background &
                                        education.
                                    </p>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}
export default WhatPeople;