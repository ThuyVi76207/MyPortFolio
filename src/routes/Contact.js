import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactContent from "../components/ContactContent";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
            <ContactContent />
            <Footer />
        </div>
    )
}

export default Contact