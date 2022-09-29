import React from "react";

function Counter(){
    return(
        <section className="container-fluid section6">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 border-right">
                    <h1 className="count">12</h1>
                    <p>Years Of Experiance</p>
                </div>
                <div className="col-md-6 col-lg-3 border-right">
                    <div className="d-flex justify-content-center">
                        <h1 className="count">5</h1>
                        <h1>K</h1>
                    </div>
                    <p>Years Of Experiance</p>
                </div>
                <div className="col-md-6 col-lg-3 border-right">
                    <div className="d-flex justify-content-center">
                        <h1 className="count">6</h1>
                        <h1>K</h1>
                    </div>
                    <p>Years Of Experiance</p>
                </div>
                <div className="col-md-6 col-lg-3">
                    <h1 className="count">4</h1>
                    <p>Years Of Experiance</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Counter;