import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './post';
import style from '../style/component.module.css';

export default function Posts() {
    const userId = useParams();
    let dbPosts = [];
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3500/posts`)
        const arrJson = await response.json();
        setPosts(arrJson);
    }

    useEffect(() => {
        fetchData()
    }, []);
    let currentUser = localStorage.getItem("currentUser");
    let currentUserObject = JSON.parse(currentUser);
    let currentName = currentUserObject.name;

    const displayPosts = () => {
        
        return     <div className={style.postsContainer}>
            <h1>Welcome  {currentName} !</h1>
        {posts.map(post => {
           return  <Post post = {post} />
        }
        )}
        </div>
    }
    
    return (
        <div>
            <div className={style.links} onClick={() => { navigate(`/home/${userId.id}`) }}>Home</div>
            {displayPosts()}
        </div>
    )
}