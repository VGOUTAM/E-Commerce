import React from 'react'
import Footer from './Footer';
import Image from 'react-bootstrap/Image'
import Shirt from '../images/Shirt.png'
import Formals from '../images/Formals.png'
import Ethnic from '../images/Ethnic.png'
import Winter from '../images/Winter.png'
import Belts from '../images/Essential/Belts.png'
import Underg from '../images/Essential/Undergarments.png'
import Trimmer from '../images/Essential/trimmers.png'
import Shorts from '../images/Essential/Shorts.png'
import Shoes from '../images/Essential/Shoes.png'
import Deo from '../images/Essential/Deodrants.png'
import Fossil from '../images/Premium/premium_fossil.png'
import Gucci from '../images/Premium/premium_gucci.png'
import Nike from '../images/Premium/premium_nike.png'
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Assurance from './assurance'
import Disclaimer from './disclaimer'
import Navbar1 from './Navbar';

import "../App.css"
// import { margin } from '@mui/system'


function Men(){
    return(
        <div className='paddingDueToNavbar'>
        
        <Navbar1 />
            <div style={{textAlign:'center', backgroundColor:'grey', padding:'1%', fontSize:'50',fontStyle:'oblique'}}>
                <h2 style={{paddingTop:'1%'}}>SELECT FROM OUR BEST RANGE OF PRODUCTS</h2>
            </div>
            
            <div >
                <div className='mendivs'>
                <span style={{margin:'10%'}}>
                <Link to='/ethnics'>
                <Image href='' src={Ethnic} roundedCircle responsive />
                </Link>
                </span>
                <span><p className='MenBigWhite' style={{display:'inline-block'}}>Embrace yourself with the classic ethnic designs ...</p></span>
                </div>
                

                <AnimationOnScroll animateIn="animate__fadeInDown" >
                <div className='mendivs' style={{backgroundColor:'black'}}>
                <span><p className='MenBig' style={{display:'inline-block', margin:'10%'}}>For embracing the heat with style ...</p></span>
                <span style={{marginLeft:'20%'}}><Image href='' src={Shirt} roundedCircle responsive /></span>
                </div>
                </AnimationOnScroll>
                
                <AnimationOnScroll animateIn="animate__fadeInDown" >
                <div className='mendivs' style={{backgroundColor:'grey'}}>
                <span style={{margin:'10%'}}>
                <Link to='/menformals'>
                <Image href='' src={Formals} roundedCircle responsive />
                </Link></span>
                <span><p className='MenBigWhite' style={{display:'inline-block'}}>For the core occasions ....</p></span>
                </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInDown" >
                <div className='mendivs' >
                <span><p className='MenBigWhite' style={{display:'inline-block',margin:'10%'}}>Be hot ...  Go strong....</p></span>
                <span style={{marginLeft:'20%'}}>
                <Link to='/winterwear'><Image href='' src={Winter} roundedCircle responsive />
                </Link>
                </span>
                </div>
                </AnimationOnScroll>
            </div>

            <div style={{backgroundColor:'#313639',paddingLeft:'7%'}}>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
                <div style={{padding:'2%'}}>
                <h1 style={{color:'bisque',fontFamily:'Copperplate Gothic Light',fontSize:'3rem'}}>Essentials</h1>
                </div>
                </AnimationOnScroll>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Link to='/shorts'>
                <Image className='hoverExpand' href='' src={Shorts} rounded responsive />
                </Link>
                <p className='essenp'>Shorts</p> 
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image className='hoverExpand' href='' src={Underg} rounded responsive />
                <p className='essenp'>Undergarments</p>
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image className='hoverExpand' href='' src={Deo} rounded responsive />
                <p className='essenp'>Deodrants</p>
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image className='hoverExpand' href='' src={Belts} rounded responsive />
                <p className='essenp'>Belts</p> 
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image className='hoverExpand' href='' src={Trimmer} rounded responsive />
                <p className='essenp'>Trimmers</p>
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Link to='/ethnics'>
                <Image className='hoverExpand' href='' src={Shoes} rounded responsive />
                </Link>
                <p className='essenp'>Shoes</p>
                </div>   

            </div>

            <div style={{backgroundColor:'#002147',paddingLeft:'7%'}}>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
                <div style={{padding:'2%'}}>
                <h1 style={{color:'bisque',fontFamily:'Copperplate Gothic Light',fontSize:'3rem'}}>PREMIUM</h1>
                </div>
                </AnimationOnScroll>
                
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image className='hoverExpand' href='' src={Fossil} rounded responsive />
                <p className='essenp'>Fossil</p> 
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image className='hoverExpand' href='' src={Gucci} rounded responsive />
                <p className='essenp'>Gucci</p>
                </div>
                <div style={{display:'inline-block',padding:'1%'}} >
                <Image className='hoverExpand' href='' src={Nike} rounded responsive />
                <p className='essenp'>Nike</p>
                </div>  
                
            </div>
            
            
            <Assurance />
            <Disclaimer />
            <Footer color="black"/>
        </div>
    )
}

export default Men;