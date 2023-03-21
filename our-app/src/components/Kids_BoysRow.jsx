import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {KidsBoysRow1,KidsBoysRow2,Kids_Boy_Heading} from "./KidsSection_ImagesArray";
import ImgSample from "./ImageSample.jsx";

function KidsRowTable()
{
    
    return(
       <div>
       <ImgSample source={Kids_Boy_Heading}/>
        <div> 
            <table>
                <MDBRow>{KidsBoysRow1.map(OneImg=>{
                    return(
                        <MDBCol style={{padding:"25px",backgroundColor:"lightskyblue"}}><img src={OneImg} style={{borderRadius:"24px"}} alt =""></img></MDBCol>
                    )
                })}
                    
                </MDBRow>
            </table>
        </div>  
       
      <div> 
      <table>
            <MDBRow>{KidsBoysRow2.map(OneImg=>{
                return(
                    <MDBCol style={{padding:"25px",backgroundColor:"lightblue"}}><img src={OneImg} style={{borderRadius:"24px"}} alt =""></img></MDBCol>
                )
            })}
                    
            </MDBRow>
        </table>
        </div> 
      
        </div>
    )
}

export default KidsRowTable;