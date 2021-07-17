import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://th.bing.com/th/id/OIP.g7_h2c4RwoWavc2dwyyigAHaE7?pid=ImgDet&rs=1" alt="" />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae atque harum ex hic tempore </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Catagory</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Movie</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sport</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"> </i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;