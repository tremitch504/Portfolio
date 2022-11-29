import React from "react";
import Profile from "./Profile";
import FooterImage from "./Footer/Footer";
import './Home.css'
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import ContactMe from "../ContactMe/Contact";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
const Home = () => {

    return (
        <div className="container-home">
            <Nav />
            <Profile />
            <FooterImage />
            <AboutMe />
            <Skills />
            <Portfolio />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default Home;