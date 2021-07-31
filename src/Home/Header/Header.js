import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
          <div className="headerTitles">
            <span  className="headerTitleSm"> Full Stack ( M E R N )</span>
            <span  className="headerTitleLg">Blog Application</span>
          </div>
          <img
            className="headerImg"
            src="https://png.pngtree.com/thumb_back/fw800/background/20210214/pngtree-public-welfare-promotion-of-the-new-crown-virus-vaccine-background-image_560009.jpg"
            alt=""
          />
        </div>
      );
    }
    


export default Header;