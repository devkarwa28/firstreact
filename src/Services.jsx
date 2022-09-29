import React from "react";
import CardsServices from "./Cards-services";
import ServicesMain from "./Services-main";
import GetFree from "./GetFree";
import Footer from "./Footer";
import Header3 from "./Header3";



function Services(){
    return(
        <>
        <Header3/>
        <CardsServices/>
        <ServicesMain/>
        <GetFree/>
        <Footer/>
        </>
    )
}
export default Services;