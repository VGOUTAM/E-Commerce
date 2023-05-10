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
import {Link} from 'react-router-dom' 

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
              <Link className="categories" to="/men" style={{textDecoration:"none", color:"grey"}}>Men</Link>
              <Link className="categories" to="/women" style={{textDecoration:"none", color:"grey"}}>Women</Link>
              <Link className="categories" to="/kids" style={{textDecoration:"none", color:"grey"}}>Kids</Link>
              <Link className="categories" to="/electronics" style={{textDecoration:"none", color:"grey"}}>Electronics</Link>
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
                <Link to="/logout" style={{textDecoration:"none", color:"black"}}><LogoutIcon /> Logout</Link>

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
              <Link className="categories" to="/men" style={{textDecoration:"none", color:"grey"}}>Men</Link>
              <Link className="categories" to="/women" style={{textDecoration:"none", color:"grey"}}>Women</Link>
              <Link className="categories" to="/kids" style={{textDecoration:"none", color:"grey"}}>Kids</Link>
              <Link className="categories" to="/electronics" style={{textDecoration:"none", color:"grey"}}>Electronics</Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavItem ><Link  className="categories" to="/login" style={{marginRight:"10px",marginLeft:'10px', textDecoration:"none", color:"grey"}}>Login</Link></NavItem> 
          <NavItem ><Link  className="categories" to="/signup" style={{textDecoration:"none", color:"grey"}}>Signup</Link></NavItem>
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