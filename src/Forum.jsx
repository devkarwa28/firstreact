import React from "react";
import './main.css';

function Forum(){
return(
    <section className="container-fluid section5-about">
        <div className="container">
            <h1>
                Creative Project? Let's have
                a productive talk.
            </h1>
            <form action="">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="input-control">
                            <input type="text" id="input--name" className='bottom-border'/>
                            <label for="input--name">Name</label>
                            <span className="border"></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="input-control ms-lg-2">
                            <input type="email" id="input--name" className='bottom-border'/>
                            <label for="input--name">Email</label>
                            <span className="border"></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="input-control">
                            <input type="tel" maxlength="10" id="input--name" className='bottom-border'/>
                            <label for="input--name">Phone</label>
                            <span className="border"></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="input-control ms-lg-2">
                            <input type="text" id="input--name" className='bottom-border'/>
                            <label for="input--name">Subject</label>
                            <span className="border"></span>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sec5-big-input input-control">
                            <input type="text" id="input--name" className='bottom-border input-l'/>
                            <label for="input--name">Hello Iam Intrested in..</label>
                            <span className="border"></span>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center">
                            <input type="submit" value="Submit" className="submit"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </section>
)
}
export default Forum;