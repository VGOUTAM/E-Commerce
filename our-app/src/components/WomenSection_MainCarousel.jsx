import React from "react";
import Carousel_images from "./WomenSection_ImagesArray";
import Carousel from 'react-bootstrap/Carousel';

function Women_MainCarousel() {
    return (
      <Carousel slide={true} interval={2000} controls={true}  >
      {Carousel_images.map(img => {
          return(
            <Carousel.Item>
          <img
            className="d-block w-100 Home_carousel_image"
            src={img}  
            alt=""          
          />
        </Carousel.Item>
          )
      })}
      </Carousel>
    );
  }
  
  export default Women_MainCarousel;