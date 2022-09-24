import React from "react";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import './Home.css'
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
const Home = () => {

    return (
        <div className="container-home">
            <Profile />
            <Footer />
            <AboutMe />
            <Skills />
        </div>
    )
}

export default Home;