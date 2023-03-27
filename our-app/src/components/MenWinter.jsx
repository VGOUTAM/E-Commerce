import React from "react";
import "../App.css";
import Navbar from './Navbar'
import EthComp from "./Prod_Card";
import MenWinter_Array from "./MenWinter_Array";


function Men_winterWear() {
  return (
    <div className='paddingDueToNavbar'>
      <Navbar />
      <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            {MenWinter_Array.map(object=>{
          return(
            <EthComp 
            image={object.image} 
            prodName={object.prodName} 
            span1={object.span1}
            span2={object.span2}
            span3={object.span3}
            span4={object.span4}
            span5={object.span5}
            span6={object.span6}
            para={object.para}
            prevAmount={object.prevAmount}
            presAmount={object.presAmount}
            />
          )
          })
        } 
        </div>
    </div>
</div>

    </div>

    
  );
}

export default Men_winterWear;