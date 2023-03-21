import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample() {
  return (
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;




// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar collapseOnSelect expand="md"  bg="dark" variant="dark">
      
//         <Container>
//         <Nav className="me-auto">
//             <Nav.Link href="login">Login</Nav.Link>
//             <Nav.Link href="signup">Signup</Nav.Link>
//           </Nav>
//         <Navbar.Brand className='brand' href="#home">
//           <Nav.Link href="/">VS Shoppe</Nav.Link>
//           </Navbar.Brand> 
          
//           <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto">
//             <Nav.Link href="men">Men</Nav.Link>
//             <Nav.Link href="women">Women</Nav.Link>
//             <Nav.Link href="kids">Kids</Nav.Link>
//             <Nav.Link href="electronics">Electronics</Nav.Link>
//           </Nav>
//           </Navbar.Collapse>
          
//         </Container>
//       </Navbar>
      
//     </>
//   );
// }

// export default ColorSchemesExample;