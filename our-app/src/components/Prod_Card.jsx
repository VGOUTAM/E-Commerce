import React,{useContext} from "react";
import "../App.css";
import {userContext} from  '../App.jsx'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'


function EthComp(props)
{
    const navigate = useNavigate();
    const {state, dispatch}= useContext(userContext)
    console.log(dispatch);
    
    console.log("My state is ");
    console.log(state);

    const addToCart = async() => {
        if(state){
            const token = localStorage.getItem('token');
            console.log("This is token in frontend")
            console.log(token); 
            const res=await fetch('https://backendhost-2auk.onrender.com/addtocart',{
                    mode : 'cors', 
                    method: "POST",		
                    credentials: 'include',	
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        
                        prodName: props.prodName, 
                        image: props.image,
                        span1: props.span1,
                        span2: props.span2,
                        span3: props.span3,
                        span4: props.span4,
                        span5: props.span5,
                        span6: props.span6,
                        para: props.para,
                        prevAmount: props.prevAmount,
                        presAmount: props.presAmount
                    })      
                });
                
                const data = await res.json();
                console.log("Add to cart response")
                console.log(data.status);
                if(res.status===200)
                {
                    alert("Product added to the cart");
                }
                else{
                    alert("An error ocurred. Please try later");
                }
            
        }
        else{
            alert("Please Login")
            navigate("/login");
        }
    }

    const addToWishlist = async() => {
        if(state){
            const token = localStorage.getItem('token');
            console.log("This is token in frontend")
            console.log(token); 
            const res=await fetch('https://backendhost-2auk.onrender.com/addtowishlist',{
                    mode : 'cors', 
                    method: "POST",		
                    credentials: 'include',	
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        
                        prodName: props.prodName, 
                        image: props.image,
                        span1: props.span1,
                        span2: props.span2,
                        span3: props.span3,
                        span4: props.span4,
                        span5: props.span5,
                        span6: props.span6,
                        para: props.para,
                        prevAmount: props.prevAmount,
                        presAmount: props.presAmount
                    })      
                });
                
                const data = await res.json();
                console.log("Add to wishlist response")
                console.log(data.status);
                if(res.status===200)
                {
                    alert("Product added to the wishlist");
                    navigate('')
                }
                else{
                    alert("An error ocurred. Please try later");
                }
            
        }
        else{
            alert("Please Login")
            navigate("/login");
        }
    }

    return(
    <>
    <Navbar></Navbar>
      <div className="row p-2 border rounded mt-2" style={{backgroundColor:"#DCDCDC"}}>
      <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={props.image} alt=''/></div>
      <div className="col-md-6 mt-1">
          <h5>{props.prodName}</h5>
          <div className="d-flex flex-row">
              <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
          </div>
          <div className="mt-1 mb-1 spec-1"><span>{props.span1}</span><span className="dot"></span><span>{props.span2}</span><span className="dot"></span><span>{props.span3}<br /></span></div>
          <div className="mt-1 mb-1 spec-1"><span>{props.span4}</span><span className="dot"></span><span>{props.span5}</span><span className="dot"></span><span>{props.span6}<br /></span></div>
          <p className="text-justify text-truncate para mb-0">{props.para}<br /><br /></p>
      </div>
      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
          <div className="d-flex flex-row align-items-center">
              <h4 className="mr-1"><CurrencyRupeeIcon />{props.presAmount}</h4><span className="strike-text"><CurrencyRupeeIcon />{props.prevAmount}</span>
          </div>
          <h6 className="text-success">Free shipping</h6>
          <div className="d-flex flex-column mt-4">
            <button 
            className="btn btn-dark btn-sm" type="button" onClick={()=>addToCart()}>          
            <ShoppingCartIcon sx={{color: "white", marginRight:'5px'}} />
            Add to Cart
            </button>
            <ToastContainer />
            <button className="btn btn-outline-dark btn-sm mt-2" type="button" onClick={()=>addToWishlist()}>
            <FavoriteIcon sx={{color: "black", marginRight:'5px'}}/>
            Add to wishlist
            </button>
          </div>
      </div>
  </div>
  </>
    );
}

export default EthComp;