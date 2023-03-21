import React from 'react';
// import home_background from '../images/Home_background.png';

// import Image from 'react-bootstrap/Image'
import { AnimationOnScroll } from 'react-animation-on-scroll';


function background_image(){
    // var Background= "url(" + { home_background } + ")";
    return(
        <div>
                
                <div className='HomeBackgroundImage' > </div>
                <div class="bg-text" >
                <AnimationOnScroll animateIn="animate__swing" >
                
                <h1 style={{fontSize:"50px"}}>VS Shoppe</h1>
                <p>for best shopping experience</p>
                </AnimationOnScroll>
                </div>
                
            
        </div>
    )
}

export default background_image;