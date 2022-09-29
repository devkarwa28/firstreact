import React from "react";
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';

function WhatPeople() {
    return (
        <section class="container-fluid section3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="color sec3-container">
                            <h1>What the People Thinks
                                About Interno</h1>
                            <div class="sec3-row d-flex">

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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhatPeople;