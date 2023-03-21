// import React from 'react';
// import '../App.css'
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import Navbar from './Navbar'

// function login() {
  
//   return (
//     <div className='paddingDueToNavbar'>
//     <Navbar />
//     <MDBContainer className="my-5">
//       <MDBCard>
//         <MDBRow className='g-0'>

//           <MDBCol md='6'>
//             <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
//           </MDBCol>

//           <MDBCol md='6'>
//             <MDBCardBody className='d-flex flex-column'>

//               <div className='d-flex flex-row mt-2'>
//                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//                 <span className="h1 fw-bold mb-0">Logo</span>
//               </div>

//               <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

//               <form action='/login' method='post'>
//               <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='abc'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//               <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit'>Login</MDBBtn>
//               </form>
//               <a className="small text-muted belowButton" href="#!">Forgot password?</a>
//               <p className="mb-5 pb-lg-2 belowButton" style={{color: '#393f81'}}>Don't have an account? <a href="signup" style={{color: '#393f81'}}>Register here</a></p>

//               <div className='d-flex flex-row justify-content-start abc'>
//                 <a href="#!" className="small text-muted me-1">Terms of use.</a>
//                 <a href="#!" className="small text-muted">Privacy policy</a>
//               </div>

//             </MDBCardBody>
//           </MDBCol>

//         </MDBRow>
//       </MDBCard>

//     </MDBContainer>

//     </div>
    
//   );
// }

// export default login;

// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer className="my-5">

//       <MDBCard>
//         <MDBRow className='g-0'>

//           <MDBCol md='6'>
//             <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
//           </MDBCol>

//           <MDBCol md='6'>
//             <MDBCardBody className='d-flex flex-column'>

//               <div className='d-flex flex-row mt-2'>
//                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//                 <span className="h1 fw-bold mb-0">Logo</span>
//               </div>

//               <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

//                 <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//                 <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//               <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
//               <a className="small text-muted" href="#!">Forgot password?</a>
//               <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

//               <div className='d-flex flex-row justify-content-start'>
//                 <a href="#!" className="small text-muted me-1">Terms of use.</a>
//                 <a href="#!" className="small text-muted">Privacy policy</a>
//               </div>

//             </MDBCardBody>
//           </MDBCol>

//         </MDBRow>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export default App;

import React from 'react';

import Navbar from './Navbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { Link,useNavigate } from 'react-router-dom'

function App() {
	// const navigate = useNavigate();

	// function navigateHome(){
	// 	navigate('/')
	// }

  return (
    <div className='paddingDueToNavbar' >
      <Navbar />
      <div class="loginContainer">
	<div class="screen">
		<div class="screen__content">
			<form class="login" action='/login' method='POST'>
				<div class="login__field">
				<div className="icon"><PersonIcon /></div>
					<input type="text" class="login__input" placeholder="User name / Email" name='username'/>
				</div>
				<div class="login__field">
				<div className="icon"><LockOpenIcon /></div>
					<input type="password" class="login__input" placeholder="Password" name='password'/>
				</div>
				
				<button class="button login__submit" type="submit" >
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
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
    
  );
}

export default App;