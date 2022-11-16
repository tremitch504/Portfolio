import React from "react";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import './Home.css'
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import ContactMe from "../ContactMe/Contact";

const Home = () => {

    return (
        <div className="container-home">
            <Profile />
            <Footer />
            <AboutMe />
            <Skills />
            <Portfolio />
            <ContactMe />
        </div>
    )
}

export default Home;