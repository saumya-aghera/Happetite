import React, { useEffect, useState } from 'react'
import ReactBootstrap, { Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import history from '.././History'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const hist = useHistory();
  const location = useLocation();


  useEffect(() => {
    const token = user?.token;

    //JWT

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/')

    setUser(null);
  }


  return (
    <div>
            
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Navbar.Brand ><Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeStyle={{ color: 'white' }}
          onClick={() => history.push('/')}
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
              onClick={() => history.push('/')}
            >About</Link></Nav.Link>
            <Nav.Link><Link
              activeClass="active"
              to="module"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeStyle={{ color: 'white' }}
              onClick={() => history.push('/')}
            >Modules</Link></Nav.Link>
            <Nav.Link><Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeStyle={{ color: 'white' }}
              onClick={() => history.push('/FAQ')}
            >FAQ</Link></Nav.Link>
            <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Email ID</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact Number</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="outline-light" onClick={() => history.push('/Auth')}>SignIn</Button>
            <Button variant="outline-light" onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
           
    </div>
  );
}

export default Header