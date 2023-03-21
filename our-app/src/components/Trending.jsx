import React from 'react'
import '../App.css'
import timg1 from '../images/Watch.png'
import timg2 from '../images/lakme.png'
import timg3 from '../images/Headphone.png'
import Image from 'react-bootstrap/Image'


// import trendcards from './Home_Trending_Images_Array';
// import Container from 'react-bootstrap/Container';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

 function trending(){
    return(
   <div className='paddingDueToNavbar'>
            

            <div style={{backgroundColor:'#002147',paddingLeft:'7%'}}>
                <div style={{padding:'2%'}}>
                <h1 style={{color:'bisque',fontFamily:'Copperplate Gothic Light',fontSize:'3rem'}}>PREMIUM</h1>
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image  href='' src={timg1} rounded responsive />
                <p className='trendingImageDimension'>Fossil</p> 
                </div>
                <div style={{display:'inline-block',padding:'1%'}}>
                <Image  href='' src={timg2} rounded responsive />
                <p className='trendingImageDimension'>Gucci</p>
                </div>
                <div style={{display:'inline-block',padding:'1%'}} >
                <Image href='' src={timg3} rounded responsive />
                <p className='trendingImageDimension'>Nike</p>
                </div>  
            </div>
                
                    {/* <MDBRow>
                        <MDBCol lg='4' md='6' className='mb-4 '>
                        <img 
                            style={{display:'inline-block'}}  
                            src={timg1}
                            className='img-fluid rounded trendingImageDimension'
                            alt=''
                        />
                        <div style={{textAlign:"center",color:"white"}}>fastrack watch</div>
                        </MDBCol>
                        <MDBCol lg='4' md='6' className='mb-4'>
                        <img 
                            style={{display:'inline-block'}}  
                            src={timg2}
                            className='img-fluid rounded trendingImageDimension'
                            alt=''
                        />
                        </MDBCol>
                        <MDBCol lg='4' md='6' className='mb-4'>
                        <img 
                            style={{display:'inline-block'}}  
                            src={timg3}
                            className='img-fluid rounded trendingImageDimension'
                            alt=''
                        />
                        </MDBCol>

                    </MDBRow> */}
              
           

            
    </div>

    )

 }

 export default trending;