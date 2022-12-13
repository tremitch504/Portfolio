import React from "react";
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
          
          <a href="#profile" className="footer-logo">Mitchell&Meyers</a>
         
         <ul className="permalinks">
            <li><a href="#profile">Home</a></li>
            <li><a href="#aboutme">About</a></li>
            <li><a href="#skills">Expeirience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Me</a></li>
         </ul>
           
           <div className="footer-socials">
            <a href="https://www.linkedin.com/in/tre-mitch"><i className="bi bi-linkedin"></i></a>
            <a href="https://twitter.com/Bruce77001275"><i class="bi bi-twitter"></i></a>
           
           </div>

           <div className="footer-copyright">
            <small>
              &copy; Mitchell&Meyers Websites. All rights reserved.
            </small>
           </div>
        </div>
    )
}

export default Footer;