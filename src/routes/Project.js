import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Skill from "../components/Skill";
// import PricingCard from "../components/PricingCard";

import Work from "../components/Work";


const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="MINI PROJECTS." text="Some of my most recent works"/>
            <Skill />
            <Work />
            {/* <PricingCard /> */}
            <Footer />
        </div>
    )
}

export default Project