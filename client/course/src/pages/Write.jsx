import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:"none"}} type="file" id="file" name="" />
          <label className='file' htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name="cat" value="galery" id="galery" />
          <label htmlFor="galery">Galery</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="news" id="news" />
          <label htmlFor="galery">News</label>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Write
