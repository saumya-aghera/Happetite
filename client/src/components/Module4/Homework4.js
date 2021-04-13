import React, { useState,useEffect } from 'react'
import './Homework4.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useLocation } from 'react-router-dom';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Homework4({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

   const onSuccess = async (res) => {
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
     handleClose();
    };

  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };
  const [hw4_1, sethw4_1] = useState({
    d1_1: '',
    d1_2: '',
    d1_3: '',
  });
  const [hw4_2, sethw4_2] = useState({
    d2_1: '',
    d2_2: '',
    d2_3: '',
  });
  const [hw4_3, sethw4_3] = useState({
    d3_1: '',
    d3_2: '',
    d3_3: '',
  });
  const [hw4_4, sethw4_4] = useState({
    d4_1: '',
    d4_2: '',
    d4_3: '',
  });
  const [hw4_5, sethw4_5] = useState({
    d5_1: '',
    d5_2: '',
    d5_3: '',
  });
  const [hw4_6, sethw4_6] = useState({
    d6_1: '',
    d6_2: '',
    d6_3: '',
  });
  const [hw4_7, sethw4_7] = useState({
    d7_1: '',
    d7_2: '',
    d7_3: '',
  });
  const createhw4_1 = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/hw4_1', hw4_1);
      console.log(`Exercise submitted: `,hw4_1,user.name,user.email);
      sethw4_1({
        d1_1: '',
        d1_2: '',
        d1_3: ''
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
   
      
       
}
const createhw4_2 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_2', hw4_2);
    console.log(`Exercise submitted: `,hw4_2,user.name,user.email);
    sethw4_2({
      d2_1: '',
      d2_2: '',
      d2_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
const createhw4_3 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_3', hw4_3);
    console.log(`Exercise submitted: `,hw4_3,user.name,user.email);
    sethw4_3({
      d3_1: '',
      d3_2: '',
      d3_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
const createhw4_4 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_4', hw4_4);
    console.log(`Exercise submitted: `,hw4_4,user.name,user.email);
    sethw4_4({
      d4_1: '',
      d4_2: '',
      d4_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
const createhw4_5 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_5', hw4_5);
    console.log(`Exercise submitted: `,hw4_5,user.name,user.email);
    sethw4_5({
      d5_1: '',
      d5_2: '',
      d5_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
const createhw4_6 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_6', hw4_6);
    console.log(`Exercise submitted: `,hw4_6,user.name,user.email);
    sethw4_6({
      d6_1: '',
      d6_2: '',
      d6_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
const createhw4_7 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_7', hw4_7);
    console.log(`Exercise submitted: `,hw4_7,user.name,user.email);
    sethw4_7({
      d7_1: '',
      d7_2: '',
      d7_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
    return (
        
      <div className="hw4-main" id='home4'>
        <div className='hw4-cont'>
            <h2>Home Assignment</h2>
            <div style={{
                    textAlign:'center',
                    fontSize: 'medium',
                    fontWeight:'500',
                    paddingBottom: '20px',
                    paddingLeft: '75px',
                    paddingRight: '75px'
                }}><u>Instructions:</u> Your home activity for this week is maintaining an online gratitude journal. As your day ends, fill in the aspects of the journal required for that day. Each day you will have three good things visible to you to write about or fill in by completing the sentences. Make sure that you practise gratitude daily by filling the journal. Remember practise strengthens habits.
          </div>
          <div className='hw4-pointer'>

            <div className='pointer1' onClick={()=>console.log('day1')}>DAY 1</div>
            <div className='pointer2' onClick={()=>console.log('day1')}>DAY 2</div>
            <div className='pointer3' onClick={()=>console.log('day1')}>DAY 3</div>
            <div className='pointer4' onClick={() => console.log('day1')}>DAY 4</div>
            <div className='pointer5' onClick={() => console.log('day1')}>DAY 5</div>
            <div className='pointer6' onClick={() => console.log('day1')}>DAY 6</div>
            <div className='pointer7' onClick={() => console.log('day1')}>DAY 7</div>

          </div>
<h2>Day 1</h2>
<p>One good thing that happened to me today... </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_1.d1_1}
              onChange={(event) => {
                sethw4_1({ ...hw4_1, d1_1: event.target.value })
              }}
        />
<p>Something good that I saw someone do... 
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_1.d1_2}
              onChange={(event) => {
                sethw4_1({ ...hw4_1, d1_2: event.target.value })
              }}
        />
<p>Today I had fun when... 
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_1.d1_3}
              onChange={(event) => {
                sethw4_1({ ...hw4_1, d1_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_1} className='primary'>
                        Submit
                        </button>
                    
                    </div>
                    <h2>Day 2</h2>
<p>Something I accomplished today...  </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_2.d2_1}
              onChange={(event) => {
                sethw4_2({ ...hw4_2, d2_1: event.target.value })
              }}
        />
<p>Something funny that happened today...
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_2.d2_2}
              onChange={(event) => {
                sethw4_2({ ...hw4_2, d2_2: event.target.value })
              }}
        />
<p>Someone I was thankful for today... 
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_2.d2_3}
              onChange={(event) => {
                sethw4_2({ ...hw4_2, d2_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_2} className='primary'>
                        Submit
                        </button>
                    
                    </div>
                    <h2>Day 3</h2>
<p>Something I was thankful for today... 
  </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_3.d3_1}
              onChange={(event) => {
                sethw4_3({ ...hw4_3, d3_1: event.target.value })
              }}
        />
<p>Today I smiled when... 
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_3.d3_2}
              onChange={(event) => {
                sethw4_3({ ...hw4_3, d3_2: event.target.value })
              }}
        />
<p>Something about today I’ll always want to remember...
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_3.d3_3}
              onChange={(event) => {
                sethw4_3({ ...hw4_3, d3_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_3} className='primary'>
                        Submit
                        </button>
                    
                    </div>
                    <h2>Day 4</h2>
<p>One good thing that happened to me today... 
  </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_4.d4_1}
              onChange={(event) => {
                sethw4_4({ ...hw4_4, d4_1: event.target.value })
              }}
        />
<p>Today was special because...  
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_4.d4_2}
              onChange={(event) => {
                sethw4_4({ ...hw4_4, d4_2: event.target.value })
              }}
        />
<p>Today I was proud of myself because... 
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_4.d4_3}
              onChange={(event) => {
                sethw4_4({ ...hw4_4, d4_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_4} className='primary'>
                        Submit
                        </button>
                    
                    </div>
                    <h2>Day 5</h2>
<p>Something interesting that happened today... 
  </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_5.d5_1}
              onChange={(event) => {
                sethw4_5({ ...hw4_5, d5_1: event.target.value })
              }}
        />
<p>Someone I was thankful for today... 
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_5.d5_2}
              onChange={(event) => {
                sethw4_5({ ...hw4_5, d5_2: event.target.value })
              }}
        />
<p>Today I had fun when...
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_5.d5_3}
              onChange={(event) => {
                sethw4_5({ ...hw4_5, d5_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_5} className='primary'>
                        Submit
                        </button>
                    
                    </div>
                   
       
                    
                    <h2>Day 6</h2>
<p>Something about today I’ll always want to remember... 
  </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_6.d6_1}
              onChange={(event) => {
                sethw4_6({ ...hw4_6, d6_1: event.target.value })
              }}
        />
<p>Something funny that happened today...
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_6.d6_2}
              onChange={(event) => {
                sethw4_6({ ...hw4_6, d6_2: event.target.value })
              }}
        />
<p>My favorite part of today... 
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_6.d6_3}
              onChange={(event) => {
                sethw4_6({ ...hw4_6, d6_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_6} className='primary'>
                        Submit
                        </button>
                    
                    </div>
                    <h2>Day 7</h2>
<p>Something I was happy about today... 
  </p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_7.d7_1}
              onChange={(event) => {
                sethw4_7({ ...hw4_7, d7_1: event.target.value })
              }}
        />
<p>Something good I saw someone do today... 
</p>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_7.d7_2}
              onChange={(event) => {
                sethw4_7({ ...hw4_7, d7_2: event.target.value })
              }}
        />
<p>Something I did well today... 
</p>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_7.d7_3}
              onChange={(event) => {
                sethw4_7({ ...hw4_7, d7_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_7} className='primary'>
                        Submit
                        </button>
                    
                    </div>
        </div>
      </div> 
    )
            }

export default Homework4