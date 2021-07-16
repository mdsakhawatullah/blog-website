import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://th.bing.com/th/id/OIP.g7_h2c4RwoWavc2dwyyigAHaE7?pid=ImgDet&rs=1" alt="" className="headerImg" />     
        </div>
    );
};

export default Header;