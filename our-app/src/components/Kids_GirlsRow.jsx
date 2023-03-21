import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import {KidsGirlsRow1,KidsGirlsRow2,Kids_Girl_Heading} from "./KidsSection_ImagesArray";
import ImgSample from "./ImageSample.jsx";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


function KidsRowTable()
{
    
    return(
        // <Carousel slide={true} interval={2000} controls={true} style={{marginTop:"50px",marginBottom:"50px"}}>
    
        // <Carousel.Item>
        <div>
        <ImgSample source={Kids_Girl_Heading}/>
        <div> 
            <table>
                <MDBRow>
                {KidsGirlsRow1.map(OneImg=>{
                    return(
                        <MDBCol style={{padding:"25px",backgroundColor:"pink"}}><img src={OneImg} alt ="" style={{borderRadius:"24px"}}></img></MDBCol>
                    )
                })}
                    
                </MDBRow>
            </table>
        </div>  
      

     
      <div> 
      <table>
            <MDBRow>{KidsGirlsRow2.map(OneImg=>{
                return(
                    <MDBCol style={{padding:"25px",backgroundColor:"pink"}}><img src={OneImg} alt="" style={{borderRadius:"24px"}}></img></MDBCol>
                )
            })}
                    
            </MDBRow>
        </table>
        </div> 
        </div>
    )
}

export default KidsRowTable;