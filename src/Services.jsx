import React from "react";
import CardsServices from "./services/Cards-services";
import ServicesMain from "./services/Services-main";
import Header3 from "./services/Header3";
import GetFree from "./global/GetFree";
import Footer from "./global/Footer";



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