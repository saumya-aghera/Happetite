import React, {useState} from 'react'
import './HopeBox.css'
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function HopeBox({ loggedIn,onLogin}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSuccess = async (res) => {
        onLogin(true);
        handleClose();
    refreshTokenSetup(res);
  };

    const onFailure = (res) => {
        handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };
  


    const [hopebox, sethopebox] = useState({
        list: '',
        file: ''
    });
    const createhopebox = () => {
        if (loggedIn) {
            axios.post('http://localhost:5000/hopebox', hopebox);
            console.log(`Box submitted: `);
        } else {
            handleShow();
        }
        
      }
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Sign Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Sign in before submit</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <GoogleLogin
            clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Sign In
                  </Button>)}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
        </Modal.Footer>
            </Modal>
            
            <div className="HopeBox-main">
                <Typography>
                    <h2>HopeBox</h2>
                    <p>There are certain people or objects that make you feel hopeful, happy and relaxed. In this activity, you need to list down/upload all the items that make you feel hopeful, if it a person you can even add a picture of that individual.</p>
                    <p> There is no limit to the number of items that you would like to submit. </p>
                </Typography>
                
                
   
                
        <div className="box">

                <div className="row">
                <div className="column">
                <div className="list"><TextField id="standard-secondary" label="List it down!" color="primary" value={hopebox.list} onChange={(event)=>{
      sethopebox({ ...hopebox, list: event.target.value})}}/></div>
                </div>
                <div className="column">
                <div className="file-input">
                <input type="file" name="file" id="file" class="inputfile" value={hopebox.file} onChange={(event)=>{
      sethopebox({ ...hopebox, file: event.target.value})}}/>
                    
  
                </div>
                </div>
                    <div className="Submit-btn">
                        <button type="submit" onClick={createhopebox}>
                        Submit
                        </button>
                    
                    </div>
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default HopeBox
