import React from "react";
import "../App.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function WishListCard(props)
{
    const navigate = useNavigate();
    const onDeleteFromWishlist = async()=>{
            console.log("In delete fe try wishlist",props.prodID)
            
            const token = localStorage.getItem('token');
            const res=await fetch("https://backendhost-2auk.onrender.com/deleteFromWishlist",{
                mode:'no-cors',
                method: 'POST',
                credentials: 'include',	
                headers: {
                    'Authorization': `Bearer ${token}`,                    
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                        _id: props.prodID
                    }) 

            });
            
            const data=await res.json();
            console.log("heyy are you there?")
            console.log(data);
            if(res.status===200)
            {
                alert("Product deleted successfully")
                navigate("/wishlist");
            }
            else{
                alert("Error in deleting the product")
                navigate("/wishlist");
            }

        
    }
    console.log(props); 
    return(
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
            className="btn btn-dark btn-sm" type="button" onClick={()=>onDeleteFromWishlist()} >          
            <ShoppingCartIcon sx={{color: "white", marginRight:'5px'}} />
            Delete
            </button>
            <ToastContainer />
            <button className="btn btn-outline-dark btn-sm mt-2" type="button">
            <FavoriteIcon sx={{color: "black", marginRight:'5px'}}/>
            Buy Now
            </button>
          </div>
      </div>
  </div>
    );
}

export default WishListCard;