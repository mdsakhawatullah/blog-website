import React from 'react';
import './UserSetting.css';
import Sidebar from '../Home/Sidebar/Sidebar'

const UserSetting = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your profile</span>
                    <span className="settingsDeleteTitle">Delete your profile</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile picture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="Name" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="example@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
            
        </div>
    );
};

export default UserSetting;