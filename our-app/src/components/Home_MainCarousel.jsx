import Carousel from 'react-bootstrap/Carousel';
import ImgArray from "./Home_CarouselImages_Array.js";
// import App from "../App.css";

function Carousels() {
  return (
    <Carousel slide={true} interval={1000} controls={true} style={{marginBottom:"50px"}}>
    {ImgArray.map(img => {
        return(
          <Carousel.Item>
        <img
          className="d-block w-100 Home_carousel_image"
          src={img}
          alt="alternate"
        />
      </Carousel.Item>
        )
    })}
    </Carousel>
  );
}

export default Carousels;