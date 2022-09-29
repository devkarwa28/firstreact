import React from "react";
import img1 from './images/email.svg';
import img2 from './images/call.svg';
import img3 from './images/earth.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import linkedIn from './images/linkedin.svg';
import instagram from './images/instagram.svg';



function ContactUsMain(){
    return(
        <section className="container-fluid section1-contact">
        <div className="container">
            <h1>Reach Us to know the way to
                create your Dream Interior</h1>
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-box">
                        <div className="contact-row">
                            <img src={img1} alt=""/>
                            <h2>info@interiordesign.com</h2>
                        </div>
                        <div className="contact-row">
                            <img src={img2} alt=""/>
                            <h2>+91 987 654 321</h2>
                        </div>
                        <div className="contact-row">
                            <img src={img3} alt=""/>
                            <h2>www.interiordesign.com</h2>
                        </div>
                        <div className="social-media">
                            <a href=""><img src={facebook} alt=""/></a>
                            <a href=""><img src={twitter} alt=""/></a>
                            <a href=""><img src={linkedIn} alt=""/></a>
                            <a href=""><img src={instagram} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 padding-top-32">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-control-contact input-control">
                                <input type="text" id="input--name" className='bottom-border'/>
                                <label for="input--name">Name</label>
                                <span className="border"></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-control-contact input-control">
                                <input type="text" id="input--name" className='bottom-border'/>
                                <label for="input--name">Email</label>
                                <span className="border"></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-control-contact input-control">
                                <input type="tel" maxlength="10" id="input--name" className='bottom-border'/>
                                <label for="input--name">Phone</label>
                                <span className="border"></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-control-contact input-control">
                                <input type="text" id="input--name" className='bottom-border'/>
                                <label for="input--name">Subject</label>
                                <span className="border"></span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sec1-big-input input-control">
                                <input type="text" id="input--name" className='bottom-border input-l'/>
                                <label for="input--name">Hello Iam Intrested in..</label>
                                <span className="border"></span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-center justify-content-lg-end margin-58">
                                <input type="submit" value="Submit" className="submit"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}
export default ContactUsMain;