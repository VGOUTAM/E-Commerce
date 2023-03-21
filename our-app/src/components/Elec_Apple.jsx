import React from "react";
import {Apple1,Apple2} from "./ElectronicsSection_ImagesArray";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "../App.css";


function Apple()
{
    return(
        <div style={{backgroudColor:"grey"}}>
            {/* <h1 style={{textAlign:"center",color:"#354A21"}}>Apple At Company</h1> */}

            <MDBRow>
            <div style={{backgroundColor:"#bbbbbb",height:"480px"}} > 
                <MDBCol style={{display:"inline-block"}} >
                    <div style={{display:"inline-block"}}>
                        <Image href='' src={Apple1} responsive style={{borderRadius:"20px",marginTop:"40px",display:'inline-block',width:"723px !important",height:"404px !important"}}/>
                    </div>
                </MDBCol>
                <MDBCol style={{display:"inline-block"}}>
                <div>
                    <h3 style={{display:'inline-block',padding:"20px"}}>Embrace yourself with the classic ethnic designs</h3>
                </div>
                </MDBCol>
                </div>
            </MDBRow>

            <MDBRow>
            <div style={{backgroundColor:"#444444",height:"480px"}} >                
            <MDBCol style={{display:"inline-block"}}>
                <div>
                    <h3 style={{display:'inline-block',padding:"20px",color:"white"}}>Embrace yourself with the classic ethnic designs</h3>
                </div>
                </MDBCol>
                <MDBCol style={{display:"inline-block"}} >
                    <div style={{display:"inline-block"}}>
                        <Image href='' src={Apple2} responsive style={{borderRadius:"20px",marginTop:"40px",display:'inline-block',width:"723px !important",height:"404px !important"}}/>
                    </div>
                </MDBCol>
                </div>
            </MDBRow>
            

        </div>
    )
}

export default Apple;