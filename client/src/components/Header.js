import React, { useEffect, useState } from 'react'
import ReactBootstrap, { Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import history from '.././History'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './HeaderStyle';
import Avatar from 'react-avatar';
import decode from 'jwt-decode';

const Header = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const hist = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/')

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    
    //JWT
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
    
  },[location])
  
  


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
            {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <h6 className={classes.userName}>{user?.result.name}</h6>
            <Button variant="outline-light" className={classes.logout} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button variant="outline-light" onClick={() => history.push('/Auth')}>Sign In</Button>
            
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
           
    </div>
  );
}

export default Header


      