import React from 'react'
import Navbar from './Navbar';
import Footer from "./Footer";
import KidsMainCarousel from "./Kids_MainCarousel.jsx";
import {after_MainCarousel} from "./KidsSection_ImagesArray";
import KidsGirlsRowTable from "./Kids_GirlsRow"
import KidsBoysRowTable from "./Kids_BoysRow";
import {momBabyImage} from "./KidsSection_ImagesArray";
import BabyProducts from "./KidsSection_Mombaby.jsx";
import ImgSample from "./ImageSample.jsx";

function Kids(){
    return(
        <div className='paddingDueToNavbar'>
            <Navbar />
         <KidsMainCarousel />
     <ImgSample source={after_MainCarousel}/>
     <KidsGirlsRowTable />
     <KidsBoysRowTable />
     <h1  style={{textAlign:"center",color:"#FE7F9C",marginBottom:"40px"}}>Mom & baby</h1>
     <ImgSample source={momBabyImage}/>
     <BabyProducts />
     <Footer color="lightskyblue"/>
        </div>
    )
}

export default Kids;