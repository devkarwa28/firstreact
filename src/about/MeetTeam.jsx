import React from "react";
import img1 from '../images/team1.png';
import img2 from '../images/team2.png';
import img3 from '../images/team3.png';
import img4 from '../images/team4.png';

function MeetTeam(){
    return(
        <section className="container-fluid section3-about">
        <div className="container">
            <h1>Meet our team</h1>
            <p>
                With more than 3,500 active clients, we work across the global economy. Our clients are remarkably
                diverse: large and small, private and public, for-profit and nonprofit.
            </p>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="sec3-about-card hover-scale1">
                        <img src={img1} alt="" className=""/>
                        <h2>Martin Devan</h2>
                        <span>New York, USA</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec3-about-card hover-scale1">
                        <img src={img2} alt=""/>
                        <h2>Martin Devan</h2>
                        <span>New York, USA</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec3-about-card hover-scale1">
                        <img src={img3} alt=""/>
                        <h2>Martin Devan</h2>
                        <span>New York, USA</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec3-about-card hover-scale1">
                        <img src={img4} alt=""/>
                        <h2>Martin Devan</h2>
                        <span>New York, USA</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default MeetTeam;