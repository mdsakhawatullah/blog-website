import React from 'react';
import Header from './Header/Header';
import Post from './Posts/Post';
import Sidebar from './Sidebar/Sidebar';
import './Home.css'
import Posts from './Posts/Posts';

const Home = () => {
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts/>
            <Sidebar/>

            
        </div>
        </>
    );
};

export default Home;