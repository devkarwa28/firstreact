import React from 'react';
import sec5 from './images/sec5-2.png';
import right from './images/chevron-right.svg';
import './index.css';

function Card2(){
    return(
        <div className="sec5-card">
            <img src={sec5} alt="" className=" sec5-card-main-img"/>
        <div className="d-flex sec5-card-content">
            <div className="">
                <h2>Winery Dry Creek Building</h2>
                <h3>Winery Dry Creek Building</h3>
            </div>
            <a href="preview-2.html">
                <div className="sec5-card-btn">
                    <img src={right} alt="" />
                </div>
            </a>
        </div>
    </div>
    )
}
export default Card2;