import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {MakeupImages} from "./WomenSection_ImagesArray"


function Make_up(){
    return(
        <div style={{backgroundColor: '#FCE4EC'}}>
        <h1 style={{textAlign:'center',color:"purple",marginTop:"20px"}}>Enhance your Beauty</h1>

        <table>
                <MDBRow>{MakeupImages.map(OneImg=>{
                    return(
                        <MDBCol style={{padding:"25px"}}><img src={OneImg} style={{borderRadius:"24px"}} alt =""></img></MDBCol>
                    )
                })}
                    
                </MDBRow>
            </table>

    </div>
    )
}

export default Make_up;