import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])
    return (
        <div>
            <h1>Load every data from json post:{posts.length}</h1>
            {
                posts.map(post => <Link
                    to={`/post/${post.id}`}
                    key={post.id}
                >{post.id}</Link>)
            }
            <Outlet></Outlet>

        </div>
    );
};

export default Post;