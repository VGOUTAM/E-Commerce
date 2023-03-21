import React from "react";
import {MDBContainer} from "mdb-react-ui-kit";
import "../App.css";
import Navbar from './Navbar'
import EthComp from "./Ethnics_component";
import formals_array from "./MenFormals_Array";


function Ethnics() {
  return (
    <div className='paddingDueToNavbar'>
      <Navbar />
      <MDBContainer fluid>
        {formals_array.map(object=>{
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
          
      </MDBContainer>
    </div>

    
  );
}

export default Ethnics;