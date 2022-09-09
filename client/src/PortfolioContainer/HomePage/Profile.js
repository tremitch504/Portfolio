import React from 'react';


const Profile = () => {
   

return (
    <div className='container-profile'>
        <div className='parent-profile'>
            <div className='info-profile'>
                <div className='colz'>
                    <a href='https://github.com/tremitch504'>
                        <span className='bi bi-github'></span>
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
            </div>
        </div>
    </div>
)
}

export default Profile;