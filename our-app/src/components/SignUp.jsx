import React from 'react';
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  
	const navigate = useNavigate();
  // Too many states so we create only one state as object
  const [user, setUser] = useState({
    name: "", uname: "" , email: "", contact: "", password: "", gender:""
  });

    let named,value;
  const handleInputs=(e)=>
  {
    named=e.target.name;
    value=e.target.value;
    setUser({...user,[named]:value})
  }

  const handleClick= async (e)=> {
    e.preventDefault();
    
    const res=await fetch('/signup',{
      mode : 'cors', 
			method: "POST",			
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				name: user.name,
				uname: user.uname,
        email:user.email,
        contact: user.contact,
        password: user.password,
        Cpassword:user.password,
        gender: user.gender
			})      
		});
      const data = await res.json();
      console.log(data)
		  console.log("This is res.status: ")
		  console.log(res.status);
      if(res.status===400)
		  {
        console.log("in 400 error ")
        alert("User already registered")
        setUser({
          name: "", uname: "" , email: "", contact: "", password: "", gender:""
        })
		  }
      else{        
        alert("Registration Successfull ")			
        navigate("/");
      }
  }

  return (

    <div className='bodyOfSignup' >
      {/* <Navbar /> */}
      <div class="signupContainer" >
      
      <div class="title">Registration</div>
      <form method='POST'>
        <div class="user__details">
          <div class="input__box">
            <span class="details">Full Name</span>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              name='name' 
              value={user.name}   
              onChange={handleInputs }                        
            />
          </div>
          <div class="input__box">
            <span class="details">Username</span>
            <input 
              type="text" 
              placeholder="Enter your user name" 
              name='uname' 
              value={user.uname} 
              onChange={ handleInputs}            
              required 
             />
          </div>
          <div class="input__box">
            <span class="details">Email</span>
            <input 
              type="email" 
              placeholder="Enter your email" 
              name='email' 
              value={user.email} 
              onChange={handleInputs }
              required 
            />
          </div>
          <div class="input__box">
            <span class="details">Phone Number</span>
            <input  
              placeholder="Enter your phone number" 
              name='contact' 
              value={user.contact} 
              onChange={handleInputs }
              required 
            />
          </div>
          <div class="input__box">
            <span class="details">Password</span>
            <input 
              type="password" 
              placeholder="********" 
              name='password' 
              id='pwd' 
              value={user.password} 
              onChange={handleInputs }
              required 
            />
          </div>
          <div class="input__box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="********" name="Cpassword" id='cpwd' required />
            {/* <span>{text}</span> */}
          </div>

        </div>
        <div class="gender__details">
          <input type="radio" name="gender" id="dot-1" value="male" onChange={ handleInputs}/>
          <input type="radio" name="gender" id="dot-2" value="female" onChange={ handleInputs}/>
          <input type="radio" name="gender" id="dot-3" value="notSpecified" onChange={handleInputs}/>
          <span class="gender__title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span>Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span>Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <button class="button login__submit" type="submit" >
					<span class="button__text" onClick={handleClick}>Sign Up </span>
				</button>
      </form>
  </div>
  
  </div>
    
  );

  }
export default Signup;