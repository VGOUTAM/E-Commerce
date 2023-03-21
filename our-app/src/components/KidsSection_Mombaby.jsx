import React from "react";
import {MomBabyRow1,MomBabyRow2} from "./KidsSection_ImagesArray";

function BabyProducts()
{
   return(
    <div style={{backgroundColor:"pink"}}>
    <h1  style={{textAlign:"center",color:"#FE7F9C",marginBottom:"40px"}}>Mom's Favorite Brands</h1>
        <div>
    {MomBabyRow1.map(img =>{
        return (<img src={img} style={{borderRadius:"24px",margin:"25px"}} alt =""></img>)}
    )}
    
    </div>

    <div>
    {MomBabyRow2.map(img =>{
        return (<img src={img} style={{borderRadius:"24px",margin:"25px"}} alt =""></img>)}
    )}

    </div>
    </div>
   )
}

export default BabyProducts;