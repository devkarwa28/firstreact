import React from "react";

function CardsHome(){
    return(
        <section className="container-fluid section1">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 sm-center md-center">
                    <div className="sec-1-card">
                        <h1>Interior Design</h1>
                        <p>
                            Enhancing the interior to achieve a healthier environment for the people using right space.
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href="">
                                View More<i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 sm-center md-center">
                    <div className="sec-1-card">
                        <h1>Furniture</h1>
                        <p>
                            Enhancing the interior to achieve a healthier environment for the people using right space.
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href="">
                                View More<i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 sm-center md-center">
                    <div className="sec-1-card">
                        <h1>Flooring</h1>
                        <p>
                            Enhancing the interior to achieve a healthier environment for the people using right space.
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href="">
                                View More<i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CardsHome;