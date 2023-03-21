import React from 'react';

import {bride} from "./WomenSection_ImagesArray"
import {Link} from 'react-router-dom'

import Image from 'react-bootstrap/Image'

import "../App.css"


function Bridal()
{
    return(
    <div style={{backgroundColor:'#FFF3E0'}}>
                
                <h1 style={{color:'#424242',fontFamily:'Copperplate Gothic Light',fontSize:'3rem'}}>For your Special Day</h1>
                
                <div style={{display:'inline-block',marginLeft:"10px"}}>
                <Link to='/bridalwardrobe'>
                <Image className='my-image-class'  href='' src={bride[1]} rounded responsive style={{padding:"5px"}} />
                </Link>
                </div>
                <div style={{display:'inline-block'}}>
                <Link to='/bridaljewellery'>
                <Image className='my-image-class'  href='' src={bride[0]} rounded responsive style={{padding:"5px"}}/>
                </Link>                
                </div>   
            </div>
    )
}

export default Bridal;

// 