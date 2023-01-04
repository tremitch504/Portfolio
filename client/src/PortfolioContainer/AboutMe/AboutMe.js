import React from "react";
import './AboutMe.css';

const AboutMe = () => {

    return (
        <div className="aboutme-container" id='aboutme'>
           <h2 className="aboutme">About me</h2>

           <div className="container parent-aboutme">
            <div className="container-image-aboutme">
            <div className="image-aboutme">
              <img src={require('../../assets/Home/tregradpic.JPG')} alt='There is no pic'/>
            </div>
            </div>

            <div className="aboutme-cards-container">
               <div className="aboutme-cards">
                <article className="aboutme-card">
                <i class="bi bi-award"></i>
                 <h5>Experience</h5>
                <small> 1 year as a IT Technician Intern</small>
                </article>
              
                <article className="aboutme-card">
                <i class="bi bi-files"></i>
                 <h5>Skills</h5>
                <small> 20+ Skills</small>
                </article>
              
                <article className="aboutme-card">
                <i class="bi bi-folder"></i>
                 <h5>Projects</h5>
                <small> 3 Projects</small>
                </article>
               </div>
                            
               <p>I'm a full-stack developer that is passionate for designing and building a better experience for user interface. Solving real world problems as a developer is a major key goal for me. Currently, I love to work on web applications using technologies like React.js, Java, Vue.js, and GraphQL</p>
               
            <a href="#contact" className="btn btn-primary">Lets Talk</a>
            </div>
           </div>
        </div>
    )
}

export default AboutMe;