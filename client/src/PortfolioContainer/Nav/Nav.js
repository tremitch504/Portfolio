import React from 'react';
import './Nav.css';
import { useState } from 'react';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#profile')
    return (
        <div className='nav'>
          
         
          <a href='#profile' onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}> <i class="bi bi-house"></i></a>
          <a href='#aboutme' onClick={() => setActiveNav('#aboutme')} className={activeNav === '#aboutme' ? 'active' : ''}><i class="bi bi-person"></i></a>
          <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <i class="bi bi-journal-bookmark-fill"></i></a>
          <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <i class="bi bi-person-workspace"></i></a>
          <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <i class="bi bi-envelope-plus"></i></a>
        </div>
    )
}

export default Nav; 