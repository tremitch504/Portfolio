import React from 'react';
import './Footer.css'; //Linked our Footer css style file to our component

//If there is a propblem with the image, lets add an alt to img tag
const FooterImage = () => {
 

    return (
        <div className='container-footer'>
             <div className='parent-footer'>
                <img src={require('../../../assets/Home/shape-background.png')} alt='no pic'/>
             </div>
        </div>
    )
}

export default FooterImage;