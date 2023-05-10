import React, { useContext , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {userContext} from  '../App.jsx'

function Login() {
	const {state, dispatch} = useContext(userContext);
	console.log(state);
	const navigate = useNavigate();
	const [uname, setUname] = useState('');
	const [password, setPassword]= useState('');
	
	const loginUser = async(e) => {
		e.preventDefault();
		console.log("Iam here")

		const res=await fetch("http://localhost:3001/login",{
			mode : 'cors', 
			method: "POST",			
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				uname: uname,
				password: password
			})
		});

		const data = await res.json();
		console.log(data)
		console.log("This is res.status: ")
		console.log(res.status);
		if(res.status===400 )
		{
			alert("Invalid credentials")
			setUname("")
			setPassword("")
		}
		else{
			dispatch({type:"USER",payload:true})
			alert("Login Successfull ")			
			navigate("/");
		}
	}
  return (
	<div className='paddingDueToNavbar' >
	  {/* <Navbar /> */}
	  <div class="loginContainer">
	<div class="screen">
		<div class="screen__content">
			<form class="login"  method='POST'>
				<div class="login__field">
				<div className="icon"><PersonIcon /></div>
					<input 
						type="text"
						class="login__input" 
						placeholder="User name / Email" 
						name='username'
						value={uname}
						onChange={(e)=> setUname(e.target.value)} 
					 />
				</div>
				<div class="login__field">
				<div className="icon"><LockOpenIcon /></div>
					<input
						type="password" 
						class="login__input" 
						placeholder="Password" 
						name='password' 
						value={password}
						onChange={(e)=> setPassword(e.target.value)}
					 />
				</div>
				
				<button class="button login__submit" type="submit" onClick={loginUser}>
					<span class="button__text">Log In Now </span>
				</button>
					
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
		<div className="icon"><FacebookIcon /></div>
		<div className="icon"><GoogleIcon /></div>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen_backgroundshape screenbackground_shape4"></span>
			<span class="screen_backgroundshape screenbackground_shape3"></span>		
			<span class="screen_backgroundshape screenbackground_shape2"></span>
			<span class="screen_backgroundshape screenbackground_shape1"></span>
		</div>		
	</div>
</div>
</div>
	
  );
}
export default Login;

// import React from 'react';
// import Navbar from './Navbar'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import PersonIcon from '@mui/icons-material/Person';
// import LockOpenIcon from '@mui/icons-material/LockOpen';

// function App() {
//   return (
//     <div className='paddingDueToNavbar' >
//       <Navbar />
//       <div class="loginContainer">
// 	<div class="screen">
// 		<div class="screen__content">
// 			<form class="login" action='https://backendhost-2auk.onrender.com/login' method='POST'>
// 				<div class="login__field">
// 				<div className="icon"><PersonIcon /></div>
// 					<input type="text" class="login__input" placeholder="User name / Email" name='username'/>
// 				</div>
// 				<div class="login__field">
// 				<div className="icon"><LockOpenIcon /></div>
// 					<input type="password" class="login__input" placeholder="Password" name='password'/>
// 				</div>
				
// 				<button class="button login__submit" type="submit" >
// 					<span class="button__text">Log In Now </span>
// 				</button>
					
// 			</form>
// 			<div class="social-login">
// 				<h3>log in via</h3>
// 				<div class="social-icons">
//         <div className="icon"><FacebookIcon /></div>
//         <div className="icon"><GoogleIcon /></div>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="screen__background">
// 			<span class="screen__background__shape screen__background__shape4"></span>
// 			<span class="screen__background__shape screen__background__shape3"></span>		
// 			<span class="screen__background__shape screen__background__shape2"></span>
// 			<span class="screen__background__shape screen__background__shape1"></span>
// 		</div>		
// 	</div>
// </div>
// </div>
    
//   );
// }

// export default App;
