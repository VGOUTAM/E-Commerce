import React from "react";
import Footer from "./Footer";
import Carousel from "./Home_MainCarousel.jsx";
import Essential_Carousel from "./Home_Essential_Carousel"
import Kids_MainCarousel from "./Kids_MainCarousel.jsx";
import {after_MainCarousel} from "./KidsSection_ImagesArray";
import KidsGirlsRowTable from "./Kids_GirlsRow"
import KidsBoysRowTable from "./Kids_BoysRow";
import Elec_MainCarousel from "./Electronics_MainCarousel";
import {momBabyImage} from "./KidsSection_ImagesArray";
import BabyProducts from "./KidsSection_Mombaby.jsx";
import ImgSample from "./ImageSample.jsx";
import Elec_CardGroup from "./ElecSection_Cards"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // **********ALL THIS IS HOME PART**************

    // <div>      
    // <Carousel /> 
    // <h1 style={{textAlign:"center"}}>ESSENTIALS</h1>
    // <Essential_Carousel />   
    // <Footer color="black"/>    
    // </div>

    //*********hOME PART ENDS HERE**************

    //******KIDS SECTION BEGINS HERE */

    // <div>
    // <Kids_MainCarousel />
    // <ImgSample source={after_MainCarousel}/>
    // <KidsGirlsRowTable />
    // <KidsBoysRowTable />
    // <h1  style={{textAlign:"center",color:"#FE7F9C",marginBottom:"40px"}}>Mom & baby</h1>
    // <ImgSample source={momBabyImage}/>
    // <BabyProducts />
    // <Footer color="lightskyblue"/>  
    // </div>

    //******KIDS SECTION ENDS HERE */

    //********ELECTRONICS SECTION BEGINS HERE************* */
    <div>
      <Elec_MainCarousel />
      <Elec_CardGroup />
      <Footer />
    </div>

    //**********ELECTRONICS SECTION ENDS HERE********** */

  );
}

export default App;

