import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Navbar from './Navbar.jsx'

function EmptyCart()
{
    return(
        <>
                <Navbar />   
                <h1 style={{textAlign:"center", paddingTop:"300px", fontWeight:'bold'}} >Your Wishlist is empty</h1>
                <br />
                <h5 style={{textAlign:"center"}}>Please add Items to your wishlist</h5>
                <br />
                <div className='center-screen'>
                <ProductionQuantityLimitsIcon style={{fontSize:70}} />
                </div>
        </>
    )
}

export default EmptyCart;

