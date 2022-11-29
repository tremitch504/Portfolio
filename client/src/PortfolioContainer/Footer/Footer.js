import React from "react";
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
          
          <a href="#" className="footer-logo">mitchell&meyers</a>
         
         <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Expeirience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contactme">Contact Me</a></li>
         </ul>
           
           <div className="footer-socials">
            <a href="https://www.linkedin.com/in/tre-mitch"><i className="bi bi-linkedin"></i></a>
            <a href="https://twitter.com/Bruce77001275"><i class="bi bi-twitter"></i></a>
           
           </div>
        </div>
    )
}

export default Footer;