import React from 'react'
import PhotoAlbum from "react-photo-album";
import Carousel from 'better-react-carousel';
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
            <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="https://oda.zht.gov.ua/wp-content/uploads/2023/01/geroj.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGg3c40sjpSc7CT7grQgLn2sXKLTrsHRqQ_g&usqp=CAU" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUu56NCXXYDueiefA4q9TzSn6zMZl0q8qrQ&usqp=CAU" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsu0_vAou4rZrg0ElV3JDnsKss7cS6GlP_w&usqp=CAU" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
        
      )
}

export default Galery
