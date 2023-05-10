import React,{useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import {userContext} from  '../App.jsx'
const cors=require("cors");

function Logout()
{
    console.log("I am in logout frontend")
    const {state, dispatch} = useContext(userContext);
    console.log(state)
    const navigate = useNavigate();
    //sending data to backend to /logout route using promises
    useEffect(()=>{
        fetch('https://backendhost-2auk.onrender.com/logout',{
                mode:'cors' ,
                method: "GET",
                headers: { 
                Accept: "application/json",
                "Content-Type": "application/json"
            },
                credentials: "include"
        }).then((res) => {
            dispatch({type: "USER", payload: false})
            navigate("/");
            if(!res.status === 200){
                const error = new Error(res.error)
                throw error;
            }
        }).catch((err) => {
            console.log(err)
         })

    });

    return(
        <div>
            <h1>In logout</h1>
        </div>
    )
}

export default Logout;
