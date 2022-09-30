import React from "react";
import Header2 from "./about/Header2";
import InitialDesign from "./about/InitialDesign";
import EndResult from "./about/EndResult";
import MeetTeam from "./about/MeetTeam";
import Logos from "./global/Logos";
import Forum from "./about/Forum";
import Quoute from "./about/Quoute";
import Footer from "./global/Footer";


function About(){
    return(
        <>
        <Header2/>
        <InitialDesign/>
        <EndResult/>
        <MeetTeam/>
        <Logos/>
        <Forum/>
        <Quoute/>
        <Footer/>
        </>
    )
}
export default About;