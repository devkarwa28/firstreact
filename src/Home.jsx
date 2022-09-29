import React from "react";
import Header from './Header';
import CardsHome from './Cards-home';
import Challenging from './Challenging';
import WhatPeople from './WhatPeople';
import Logos from './Logos';
import RecentProject from './RecentProjects';
import Counter from './Counter';
import OurProjects from './OurProjects';
import GetFree from './GetFree';
import Footer from './Footer';

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