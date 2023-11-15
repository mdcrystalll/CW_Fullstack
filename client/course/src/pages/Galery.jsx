import React from 'react'
import PhotoAlbum from "react-photo-album";
const Galery = () => {
    const photos = [
        
        { src: "/images/5.jpg", width: 800, height: 600 },
        { src: "/images/6.jpg", width: 1000, height: 900 },
        { src: "/images/7.jpg", width: 800, height: 600 },
        { src: "/images/8.jpg", width: 1200, height: 900 },
        { src: "/images/9.jpg", width: 800, height: 600 },
        { src: "/images/10.jpg", width: 1200, height: 900 },
        { src: "/images/15.jpg", width: 800, height: 600 },
        { src: "/images/12.jpg", width: 1600, height: 900 },
        { src: "/images/13.jpg", width: 800, height: 600 },
        { src: "/images/14.jpg", width: 800, height: 600 },

      ];
      
      
      return (
        <div className="galery">
            <h1>Hero of Ukraine</h1>
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
        
      )
}

export default Galery
