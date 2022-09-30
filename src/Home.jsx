import React from "react";
import Header from "./home/Header";
import CardsHome from './home/Cards-home';
import Challenging from './home/Challenging';
import WhatPeople from './home/WhatPeople';
import Logos from './global/Logos';
import RecentProject from './home/RecentProjects';
import Counter from './home/Counter';
import OurProjects from './home/OurProjects';
import GetFree from './global/GetFree';
import Footer from './global/Footer';

function Home() {
    return (
        <>
            <Header />
            <CardsHome />
            <Challenging />
            <WhatPeople />
            <Logos />
            <RecentProject />
            <Counter />
            <OurProjects />
            <GetFree />
            <Footer />
        </>
    )
}
export default Home;