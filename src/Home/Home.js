import React from 'react';
import { useEffect, useState } from "react";
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import axios from "axios";
import { useLocation } from "react-router";
import './Home.css';


const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;