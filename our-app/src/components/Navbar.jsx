import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {userContext} from  '../App.jsx'
import React, {useContext} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Dropdown from 'react-bootstrap/Dropdown';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar1() {
  const {state, dispatch}= useContext(userContext)
  console.log(dispatch)
  console.log("This is navbar")
  console.log(state)
  const RenderNavbar=()=>{
    if(state){
      return(
        <>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto' >
              <Nav.Link className="categories" href="men">Men</Nav.Link>
              <Nav.Link className="categories" href="women">Women</Nav.Link>
              <Nav.Link className="categories" href="kids">Kids</Nav.Link>
              <Nav.Link className="categories" href="electronics">Electronics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            {/* <NavItem ><Nav.Link  className="categories" href="logout">logout</Nav.Link></NavItem>  */}
            <NavItem >
            <Dropdown style={{paddingRight:'20px'}}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <PersonIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>  
                <Dropdown.Item href="logout"><AccountCircleIcon /> Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><LocalShippingIcon /> Orders</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><FavoriteIcon /> Wishlist</Dropdown.Item>
                <Dropdown.Item href="logout"><SettingsIcon /> Settings</Dropdown.Item>
                <Dropdown.Item href="logout"><HeadsetMicIcon /> Help Centre</Dropdown.Item>
                <Dropdown.Item href="logout"><LogoutIcon /> Logout</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </NavItem>
 
  
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      )

    }else{
      return(
        <>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto' >
              <Nav.Link className="categories" href="men">Men</Nav.Link>
              <Nav.Link className="categories" href="women">Women</Nav.Link>
              <Nav.Link className="categories" href="kids">Kids</Nav.Link>
              <Nav.Link className="categories" href="electronics">Electronics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavItem ><Nav.Link  className="categories" href="login">Login</Nav.Link></NavItem> 
          <NavItem ><Nav.Link  className="categories" href="signup">Signup</Nav.Link></NavItem>
          
          {/* <NavItem ><Nav.Link  className="categories" href="logout">logout</Nav.Link></NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
        
      )

    }
    
  }
  return (
    <div>
   
    <RenderNavbar />
    
    </div>
  );
}

export default Navbar1;