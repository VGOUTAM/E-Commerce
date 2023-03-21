import React from "react";
import Image from 'react-bootstrap/Image'
import {women_ess1,women_ess2,women_ess3} from "./WomenSection_ImagesArray"
import {Link} from 'react-router-dom'

function ess_Carousel()
{
    return(
    <div>
        <div style={{backgroundColor:'#002147',paddingLeft:'7%'}}>
        <div style={{padding:'2%'}}>
        <h1 style={{color:'bisque',fontFamily:'Copperplate Gothic Light',fontSize:'3rem'}}>Essentials</h1>
        </div>
        <div style={{display:'inline-block',padding:'1%'}}>
        <Link to='/aprons'>
        <Image className='hoverExpand' href='' src={women_ess1[0]} rounded responsive />
        </Link>
        <p className='essenp'>Apron</p>        
        </div>
        <div style={{display:'inline-block',padding:'1%'}}>
        <Image className='hoverExpand' href='' src={women_ess1[1]} rounded responsive />
        <p className='essenp'>Totes and Slings</p>
        </div>
        <div style={{display:'inline-block',padding:'1%'}} >
        <Image className='hoverExpand' href='' src={women_ess1[2]} rounded responsive />
        <p className='essenp'>Flats</p>
        </div>
        <div style={{display:'inline-block',padding:'1%'}} >
        <Image className='hoverExpand' href='' src={women_ess1[3]} rounded responsive />
        <p className='essenp'>Hair Dryers</p>
        </div>  
    </div>

    <div style={{backgroundColor:'#002147',paddingLeft:'7%'}}>
        <div style={{display:'inline-block',padding:'1%'}}>
        <Link to='/lingerie'>
        <Image className='hoverExpand' href='' src={women_ess2[0]} rounded responsive />
        </Link>
        <p className='essenp'>Lingerie</p> 
        </div>
        <div style={{display:'inline-block',padding:'1%'}}>
        <Link to='/tops'>
        <Image className='hoverExpand' href='' src={women_ess2[1]} rounded responsive />
        </Link>
        <p className='essenp'>Tops</p>
        </div>
        <div style={{display:'inline-block',padding:'1%'}} >
        <Image className='hoverExpand' href='' src={women_ess2[2]} rounded responsive />
        
        <p className='essenp'>Watches</p>
        </div>
        <div style={{display:'inline-block',padding:'1%'}} >
        <Image className='hoverExpand' href='' src={women_ess2[3]} rounded responsive />
        <p className='essenp'>Sports Wear</p>
        </div>  
    </div>
    <div style={{backgroundColor:'#002147',paddingLeft:'7%'}}>
        <div style={{display:'inline-block',padding:'1%'}}>
        <Image className='hoverExpand' href='' src={women_ess3[0]} rounded responsive />
        <p className='essenp'>Hair and Skin care</p> 
        </div>
        <div style={{display:'inline-block',padding:'1%'}}>
        <Image className='hoverExpand' href='' src={women_ess3[1]} rounded responsive />
        <p className='essenp'>To be Moms</p>
        </div>
        <div style={{display:'inline-block',padding:'1%'}} >
        <Image className='hoverExpand' href='' src={women_ess3[2]} rounded responsive />
        <p className='essenp'>Chains</p>
        </div>
        <div style={{display:'inline-block',padding:'1%'}} >           
        <Image className='hoverExpand' href='' src={women_ess3[3]} rounded responsive />
        <p className='essenp'>Earrings</p>
        </div>
        </div>
    </div>
    )
}

export default ess_Carousel;