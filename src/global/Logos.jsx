import React from "react";
import img1 from '../images/home.png';
import img2 from '../images/nature.png';
import Slider from "react-slick";

function Logos(){
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                speed: 2000,
                dots: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 2000
              }
            }
          ]

    }
    return(
        <section className="container-fluid section4">
        <div className="container">
            <div className="">
            <Slider {...settings}>
            <div>
            <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img2} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img2} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img2} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img2} alt=""/>
                </div>
            </div>
            <div>
            <div className="col lg-center">
                    <img src={img1} alt=""/>
                </div>
            </div>
            </Slider>
            </div>
        
        </div>
    </section>
    )
}
export default Logos;