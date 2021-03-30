import React from 'react'
import ReactBootstrap, { Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";

const Header=()=> {
    return (
        <div>
            
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
  <Navbar.Brand><Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
                            duration={500}
                            activeStyle={{ color: 'white' }}
>WEBSITE Name</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
                            duration={500}
                            activeStyle={{ color: 'white' }}
>About</Link></Nav.Link>
      <Nav.Link><Link
    activeClass="active"
    to="module"
    spy={true}
    smooth={true}
    offset={-70}
                            duration={500}
                            activeStyle={{ color: 'white' }}
>Modules</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Button variant="outline-light">SignIn</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
           
        </div>
    );
}

export default Header;
