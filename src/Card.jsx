import React from 'react';
import './index.css';
import icon1 from './images/icon1.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Card() {
    return (
        
        <div className="sec3-card">
            <div className="sec3-card-avtar d-flex">
                <div>
                    <img src={icon1} alt="" />
                </div>
                <div className="name-sec3">
                    <h2>Lisa Clairton</h2>
                    <span>New York, USA</span>
                </div>
            </div>
            <p>
                We selected Interno interior because of rigorous design background &
                education.
            </p>
        </div>
    )
}
export default Card;