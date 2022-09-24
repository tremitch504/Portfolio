import React from "react";
import './Skills.css';


const Skills = () => {

    return (
        <div className="skills-container">
           <h5>My Programming Skills</h5>
           <h2>Experience</h2>

           <div className="list-skills-container">
               <div className="sklls-frontend">
                <h3>Frontend</h3>
                <div className="skills">
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>CSS</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>JavaScript</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>React.Js</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                </div>
               </div>

               <div className="sklls-backend">
               <h3>Backend</h3>
                <div className="skills">
                <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>Node JS</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>MySQL</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <h4>MongoDB</h4>
                    <small className="text-light">Experienced</small>
                    </article>
                   
                </div>
               </div>

           </div>
        </div>
    )
}


export default Skills;