import React from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';
import './Single.css'

const Single = () => {
    return (
        <div className="single">
          <SinglePost/>
          <Sidebar />
        </div>
      );
    }
    

export default Single;