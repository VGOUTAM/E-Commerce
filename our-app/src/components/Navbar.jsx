import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' >
            <Link to="/men" className="categories" style={{textDecoration:"none", color:"grey"}} >Men</Link>
            <Link className="categories" to="/women" style={{textDecoration:"none", color:"grey"}}>Women</Link>
            <Link className="categories" to="/kids" style={{textDecoration:"none", color:"grey"}}>Kids</Link>
            <Link className="categories" to="/electronics" style={{textDecoration:"none", color:"grey"}}>Electronics</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
            <NavItem >
            <Link>
            <Badge badgeContent={0} color="primary" style={{marginRight:'15px'}}>
            <ShoppingCartIcon sx={{color: "white"}}/>
            </Badge>
            </Link>
            </NavItem>
            <NavItem>
            <Link>
            <Badge badgeContent={0} color="primary" style={{marginRight:'15px'}}>
            <FavoriteIcon sx={{color: "white"}}/>
            </Badge></Link></NavItem>
            
            <NavItem ><Link  className="categories" to="/login" style={{marginRight:"10px",marginLeft:'10px', textDecoration:"none", color:"grey"}}> Login</Link></NavItem>
            <NavItem ><Link  className="categories" to="/signup" style={{textDecoration:"none", color:"grey"}}>Signup</Link></NavItem>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;