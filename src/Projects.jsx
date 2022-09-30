import React from "react";
import Header4 from "./projects/Header4";
import Footer from "./global/Footer";
import GetFree from "./global/GetFree";
import ProjectsCards from "./projects/Projects-cards";

function Projects(){
    return(
        <>
        <Header4/>
        <ProjectsCards/>
        <GetFree/>
        <Footer/>
        </>
    )
}
export default Projects;