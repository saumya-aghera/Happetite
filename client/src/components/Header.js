import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link} from "react-scroll";
import './Header.css';
import { Avatar, Button} from '@material-ui/core';
import { refreshTokenSetup } from '../utils/refreshToken';
import { GoogleLogin, GoogleLogout } from 'react-google-login';



const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';




const Header = ({loggedIn,onLogin,user,setUser}) => {
  const onSuccess = (res) => {
    onLogin(true);
    setUser({
      email: res.profileObj.email,
      familyName: res.profileObj.familyName,
      givenName: res.profileObj.givenName,
      googleId: res.profileObj.googleId,
      imageUrl: res.profileObj.imageUrl,
      name: res.profileObj.name
    });
    console.log('login', user, res)
    refreshTokenSetup(res);
  };

    const onFailure = (res) => {
        console.log('Login failed:', res);
        alert('Google Sign In was unsuccessful. Try again later');
  };
  
  const logout = () => {
    onLogin(false);
    console.log('logout',user)  
    };

  
  const popUp = () => {
    console.log('inside function')
    var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  }

  return (
    
            
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Navbar.Brand href="/">HAPPETITE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link><Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={120}
            duration={500}
            activeStyle={{ color: 'white' }}
          >About</Link></Nav.Link>
          <Nav.Link><Link
            activeClass="active"
            to="module"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            activeStyle={{ color: 'white' }}
             
          >Modules</Link></Nav.Link>
          <Nav.Link href="/FAQ" target="blank">FAQ</Nav.Link>
        
        <Nav.Link onClick={()=>window.open('mailto:email@example.com?')}>Contact Us</Nav.Link>
          
        </Nav>
        
        
        {loggedIn ? (<Nav>
          <Nav.Link>
            <GoogleLogout
              clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="grey" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Logout
                  </Button>)}
        buttonText="Logout"
        onLogoutSuccess={logout}
            />
          </Nav.Link>
          <Nav.Link >
            <div className="popup" onClick={popUp} style={{ textAlign: 'center' }}>
              <Avatar alt={user.name} src={user.imageUrl}>{user.name.charAt(0)}
                 </Avatar>
              <p class="popuptext" id="myPopup">
                Signed in as {user.name}
              </p>
                </div>
           
                
            </Nav.Link>
        </Nav>) : (<Nav>
            <Nav.Link>
          <GoogleLogin
            clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="grey" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Sign In
                  </Button>)}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
                isSignedIn={true}
                
              />
              </Nav.Link>
      </Nav>  )}
            
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

