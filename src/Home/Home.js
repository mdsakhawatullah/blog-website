import React from 'react';
import Header from './Header/Header';
import Post from './Posts/Post';
import Sidebar from './Sidebar/Sidebar';
import './Home.css'
import Posts from './Posts/Posts';
import Single from '../Single/Single';

const Home = () => {
    return (
        <>
        <Header/>
        <div className='home'>
            <Single/>
            
            <Sidebar/>

            
        </div>
        </>
    );
};

export default Home;