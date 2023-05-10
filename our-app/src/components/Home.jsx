import React from "react";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'
import '../App.css'
import Carousel from './Home_MainCarousel'
import Assurance from './assurance'
import Disclaimer from './disclaimer'
import Design2 from "./HomeDesign2"
import Design1 from './Home_Design1'

function Home() {
  return (
    <div className='paddingDueToNavbar'> 
    {/* <Navbar /> */}
    <Carousel />
    <Design1 />
    <Design2 />
    <Assurance />
    <Disclaimer />
    <Footer color="black"/>
    </div>
  );
}

export default Home;
