import React from "react";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import './Home.css'
import AboutMe from "../AboutMe/AboutMe";
const Home = () => {

    return (
        <div className="container-home">
            <Profile />
            <Footer />
            <AboutMe />
        </div>
    )
}

export default Home;