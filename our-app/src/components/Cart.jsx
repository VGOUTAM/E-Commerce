import React,{useState, useEffect} from 'react';
import {    MDBContainer,  }   from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
import CartListCard from './CartList_Card';
import Navbar from './Navbar.jsx'

function Cart(){
  const navigate = useNavigate();
    const [cartItems, setCartItems]=useState([]);
    console.log("Heyy I in cart");
    
     useEffect(()=>{
        console.log("Heyy I in cart's useEffect");
        const fetchcartItems=async()=> {
            try{
                const response=await fetch('https://backendhost-2auk.onrender.com/getCartItems',{
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,                        
                      },
                });
                const data=await response.json();
                console.log("data");
                console.log(data);
                if(response.status!==500)
                {                    
                    setCartItems(data);
                }
                else{
                    alert("An error occured, please try later")
                }
               if(data.length===0)
               {
                navigate("/emptyCart");
               }
            }catch(err)
            {
                alert("An error occured, please try again")
            }
        }
        fetchcartItems();
    },[cartItems,navigate]);
    // console.log("This is one elemnet in array")
    // console.log(cartItems[0]);
    return (
        
        <div className='paddingDueToNavbar'>
          <Navbar></Navbar>
          <MDBContainer fluid>
            {cartItems.map(object=>{
              return(
                <CartListCard
                key={object._id}  
                prodID={object._id}
                image={object.product.image} 
                prodName={object.product.prodName} 
                span1={object.product.span1}
                span2={object.product.span2}
                span3={object.product.span3}
                span4={object.product.span4}
                span5={object.product.span5}
                span6={object.product.span6}
                para={object.product.para}
                prevAmount={object.product.prevAmount}
                presAmount={object.product.presAmount}
                />
              )
              })
            }
              
          </MDBContainer>
          
    </div>
        
        
      );

}

export default Cart;