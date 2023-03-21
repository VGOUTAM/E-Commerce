import Carousel from 'react-bootstrap/Carousel';
import ImgArray from "./ElectronicsSection_ImagesArray";
// import App from "../App.css";


function Elec_MainCarosel() {
  return (
    <Carousel slide={true} interval={2000} controls={true}  >
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

export default Elec_MainCarosel;