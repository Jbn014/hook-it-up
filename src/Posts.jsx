import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import BlogArea from './BlogArea'


const Posts = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts');
            let post = await res.json();
            setPost(post)
        }


        getPosts();
    }, []);

    return post.map(post => {
        return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )}) 
}
export default Posts