import React from 'react';
import Typical from 'react-typical';

const Profile = () => {
   
//info = details
return (
    <div className='container-profile'>
        <div className='parent-profile'>
            <div className='info-profile'>
                <div className='colz'>
                    <a href='https://github.com/tremitch504'>
                        <span className='bi bi-github'></span>
                    </a>
                    <a href='https://www.linkedin.com/in/tre-mitch'>
                    <i className="bi bi-linkedin"></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    {/* <a href='#'>
                        <i className='gitHub-square'></i>
                    </a> */}
                </div>
            
            <div className='info-profile-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'm <span className='highLight-text'>Tre'von</span>
                </span>
            </div>
            <div className='profile-info-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                       {" "}
                       <Typical 
                       loop={Infinity}
                       steps={[
                        "Full Stack Developer 💻",
                        1000,
                        "MERN Stack Dev 🖥",
                        1000,
                        "React Native Dev 📱",
                        1000,
                        "Software Developer 🌐",
                        1000,
                        "Software Engineer Dev",
                        1000,
                       ]}
                       />
                    </h1>
                </span>
            </div>
            </div>
        </div>
    </div>
)
}

export default Profile;