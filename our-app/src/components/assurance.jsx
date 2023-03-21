import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function assurance(){
    return(
        
        <MDBRow className='assurance'>
        
            <MDBCol lg='4' md='6' className='mb-4'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                    <p className='bold'>100% ORIGINAL</p>
                    <p className='wrapit'>All products are original and go through strict quality check.</p>
                </AnimationOnScroll>
            </MDBCol>
            <MDBCol lg='4' md='6' className='mb-4'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                    <p className='bold'>7 DAYS RETURN </p>
                    <p className='wrapit'>Use our hastle free method to return.</p>
                </AnimationOnScroll>
                                   
            </MDBCol>
            <MDBCol lg='4' md='6' className='mb-4'>
            <AnimationOnScroll animateIn="animate__zoomIn" >
                <p className='bold'>SHIPPING</p>
                <p className='wrapit'>Enjoy free shipping on select orders.</p>
            </AnimationOnScroll>
                   
            </MDBCol>
            
        </MDBRow>
       
       
    )
}

export default assurance;