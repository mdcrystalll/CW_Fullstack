import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/data.json')
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);


  const handleDelete = (postId) => {
 
    axios.delete(`http://localhost:8080/posts/${postId}`)
      .then(response => {
        console.log('Post deleted:', response.data);
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };



  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <div className="buttons">
                <Link className="link" to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
                <button onClick={() =>{
                   handleDelete(post.id)}}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;