import Carousel from 'react-bootstrap/Carousel';
import {EssentialsArray1,EssentialsArray2} from "./Home_CarouselImages_Array";
import App from "../App.css";

function Essential_Carousel() {
  return (
    
    <Carousel slide={true} interval={2000} controls={true} style={{marginTop:"50px",marginBottom:"50px"}}>
    
        <Carousel.Item>
        <div> 
            <table>
                <tr>{EssentialsArray1.map(OneImg=>{
                    return(
                        <td style={{padding:"25px",backgroundColor:"black"}}><img src={OneImg} style={{borderRadius:"24px"}}></img></td>
                    )
                })}
                    
                </tr>
            </table>
        </div>  
        </Carousel.Item>

      <Carousel.Item>
      <div> 
      <table>
            <tr>{EssentialsArray2.map(OneImg=>{
                return(
                    <td style={{padding:"25px",backgroundColor:"black"}}><img src={OneImg} style={{borderRadius:"24px"}}></img></td>
                )
            })}
                    
            </tr>
        </table>
        </div> 
      </Carousel.Item>

    </Carousel>
  );
}

export default Essential_Carousel;