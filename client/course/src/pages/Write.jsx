import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios"
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [post, setPost] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const createPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/posts", post)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form onSubmit={createPost}>
      <div className="add">
        <div className="content">
          <input
            required
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />
          <div className="editorContainer">
            <textarea
              required
              onChange={(e) => {
                setPost({ ...post, desc: e.target.value });
              }}
            />
          </div>
          <input
            required
            type="text"
            placeholder="Image"
            onChange={(e) => {
              setPost({ ...post, img: e.target.value });
            }}
          />
          <button type="submit">Create</button>
        </div>
      </div>
    </form>
  );
};

export default Write;
