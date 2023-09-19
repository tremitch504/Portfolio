import React from "react";
import './Skills.css';


const Skills = () => {

    return ( 
        <div className="skills-container" id='skills'>
           <h5 className="skills-header">My Programming Skills</h5>
           <h2>Experience</h2>

           <div className="list-skills-container">
               <div className="skills-frontend">
                <h3>Frontend</h3>
                <div className="skills">
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>HTML</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>CSS</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>JavaScript</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>React.Js</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>Material-UI</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                </div>
               </div>

               <div className="sklls-backend">
               <h3>Backend</h3>
                <div className="skills">
                <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>Node JS</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>MySQL</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>MongoDB</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>Java</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>
                    <article className="details">
                    <i class="bi bi-check"></i>
                    <div>
                    <h4>PostgreSQL</h4>
                    <small className="details-text">Experienced</small>
                    </div>
                    </article>


                </div>
               </div>

           </div>
        </div>
    )
}


export default Skills;