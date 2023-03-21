import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import timg1 from '../images/Watch.png'
import timg2 from '../images/lakme.png'
import timg3 from '../images/Headphone.png'
import timg4 from '../images/Nike.png'
import timg5 from '../images/Trimmer.png'
import timg6 from '../images/ApplePhone.png'
import timg7 from '../images/Cosmetics.png'
import timg8 from '../images/HomeDecor.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


 

 function Design2(){
    return(
        <div>
        <MDBRow>
            <MDBCol  className='mb-4 abcd' >
                <div className='homeBlackSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                    <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                        <img className='trendingImageDimension' src={timg1} alt=""></img>   
                    </div>
                    <div> <p style={{color:'white', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>fastrack</p></div>
                </AnimationOnScroll>
                </div>
                
            </MDBCol>
            <MDBCol  className='mb-4 abcd' >
                <div className='homeWhiteSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                    <img className='trendingImageDimension' src={timg6} alt=""></img>   
                </div>
                <div> <p style={{color:'black', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>Apple</p></div>
                </AnimationOnScroll>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol  className='mb-4 abcd'>
                <div className='homeWhiteSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                    <img className='trendingImageDimension' src={timg5} alt=""></img>   
                </div>
                <div> <p style={{color:'black', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>Grooming Sets</p></div>
                </AnimationOnScroll>
                
                </div>
            </MDBCol>
            <MDBCol  className='mb-4 abcd'>
                <div className='homeBlackSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                    <img className='trendingImageDimension' src={timg2} alt=""></img>   
                    </div>
                    <div> <p style={{color:'white', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>Fragrances</p></div>
                </AnimationOnScroll>
                
                </div>
                
            </MDBCol>
            
        </MDBRow>
        <MDBRow>
            <MDBCol  className='mb-4 abcd' >
                <div className='homeBlackSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                        <img className='trendingImageDimension' src={timg3} alt=""></img>   
                    </div>
                    <div> <p style={{color:'white', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>boat Rockerz</p></div>
                </AnimationOnScroll>
                    
                </div>
            </MDBCol>
            <MDBCol  className='mb-4 abcd' >
                <div className='homeWhiteSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                        <img className='trendingImageDimension' src={timg8} alt=""></img>   
                    </div>
                    <div> <p style={{color:'black', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>Home Decors</p></div>
                </AnimationOnScroll>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol  className='mb-4 abcd'>
                <div className='homeWhiteSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                        <img className='trendingImageDimension' src={timg4} alt=""></img>   
                    </div>
                    <div> <p style={{color:'black', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>Nike</p></div>
                </AnimationOnScroll>
                </div>   
            </MDBCol>
            <MDBCol  className='mb-4 abcd'>
                <div className='homeBlackSquare'>
                <AnimationOnScroll animateIn="animate__zoomIn" >
                <div style={{display:'flex',padding:'1%', justifyContent:'center'}}>
                        <img className='trendingImageDimension' src={timg7} alt=""></img>   
                    </div>
                    <div> <p style={{color:'white', fontSize:'2rem',fontWeight:'bolder',fontStyle:'italic'}}>Cosmetics</p></div>
                </AnimationOnScroll>
                </div>   
            </MDBCol>
            
        </MDBRow>
        
        </div>
    )
 }

 export default Design2;