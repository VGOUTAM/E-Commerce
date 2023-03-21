import Carousel from 'react-bootstrap/Carousel';
import ImgArray from "./KidsSection_ImagesArray";
// import App from "../App.css";

function Kids_MainCarousel() {
  return (
    <Carousel slide={true} interval={2000} controls={true} style={{marginBottom:"50px"}}>
    {ImgArray.map(img => {
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

export default Kids_MainCarousel;