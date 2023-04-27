import React from "react";
import './Portfolio.css';
import pic1 from '../../assets/Home/KrewesicScreenShot.jpg'
import pic2 from '../../assets/Home/BikeAroundScreenshot.jpg'
import pic3 from '../../assets/Home/PokerAppScreenshot.jpg'
import pic4 from '../../assets/Home/MortgageScreenshot.png'
import pic5 from '../../assets/Home/VueTodoListApp.png'



const portfolioData = [
    {
        id: 5,
     image: pic5,
     title: 'Vue Todo List App',
     github: 'https://github.com/tremitch504/Vue-Todo-List-App',
     demo: 'https://vue-todo-list-app.pages.dev',
    },
    {
     id: 1,
     image: pic1,
     title: 'Krewsic',
     github: 'https://github.com/The-Headliners/Krewesic.git',
     demo: 'https://github.com/The-Headliners/Krewesic.git',
    },
    {
     id: 2,
     image: pic2,
     title: 'Bike Around and Find Out',
     github: 'https://github.com/AlTreJoe/OscarScrumLords',
     demo: 'https://github.com/AlTreJoe/OscarScrumLords',
    },
    {
     id: 3,
     image: pic3,
     title: 'Big Easy Casino',
     github: 'https://github.com/tremitch504/poker-app.git',
     demo: 'https://github.com/tremitch504/poker-app.git',
    },
    {
     id: 4,
     image: pic4,
     title: 'Mortgage Calculator',
     github: 'https://github.com/tremitch504/Mortgage-Calculator',
     demo: 'https://github.com/tremitch504/Mortgage-Calculator',
    },
] 


const Portfolio = () => {


    return (
        <div className="portfolio" id='portfolio'>
        <h5 className="port-header">My Work</h5>
        <h2>Portfolio</h2>

<div className="portfolio-container">
  
{
    portfolioData.map(({id, image, title, github, demo}) =>{
        return (
            <article key={id}className="portfolio-item">
    <div className="portfolio-image">

<img src={image} alt={title} />

    </div>
    <h3>{title}</h3>
    <a href={github} target="_blank" rel="noreferrer"><button className="btn-port">Github </button></a>
    <a href={demo}  target="_blank" rel="noreferrer"> <button className="btn-port">Live Demo </button> </a>
</article>

        )
    }
    
    )
}
</div>
 </div>
 

    )
}

export default Portfolio;