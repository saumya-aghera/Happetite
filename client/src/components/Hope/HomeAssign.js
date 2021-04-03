import React, { useState } from 'react'
import './HomeAssign.css'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 

function HomeAssign() {
 
    const [homeassign, sethomeassign] = useState({
        goal1: '',
        goal2: '',
        goal3: '',
        obs: ''
    });
    // constructor(){
    //     super();
    //     this.state = {
    //       goal1: '',
    //       goal2:'',
    //       goal3:'',
    //       obs:''
    //     };
    //   };
      // onChange = e => {
      //   this.setState({ [e.target.name]: e.target.value });
      // };
    
      // onSubmit = e => {
      //   e.preventDefault();
      //   console.log(`Form submitted: `);
      //   // console.log(`${this.state.goal1} `);
      //   const data = {
      //     goal1: this.state.goal1,
      //     goal2: this.state.goal2,
      //     goal3: this.state.goal3,
      //     obs: this.state.obs
      //   };
    const createhomeassign = () => {
      console.log(`Form submitted: `);
      alert(`thank you for your message`);
      axios.post('http://localhost:5000/assign', homeassign)
      
        
    }
  //   axios
  //     .post('http://localhost:5000/assign', data)
  //     .then(res => {
  //       this.setState({
  //           goal1: '',
  //           goal2:'',
  //           goal3:'',
  //           obs:''
  //       })
  //       this.props.history.push('/');
  //     })
  //     .catch(err => {
  //       console.log("Error in submission");
  //     })
  // };
   
    return (
        <>
        
            <div className="hw-main">
                <Typography>
                <h2>Home Assignment</h2>
                <p>Since you have a basic understanding of hope let’s try and use it. You need to set three  realistic goals for yourself or that you have made and write it down in the section provided to you. Applying the hope theory you saw, note your potential barriers/obstacles and what are the realistic alternatives you have thought of to reach your goal by overcoming those barriers/obstacles.
</p>
                </Typography>
                <div className="box">

<div className="row">
<div className="column">
<div className="list">
    <h5>Set Realistic Goals</h5>
    <TextField id="standard-secondary" label="Goal 1" autocomplete="off" value={homeassign.goal1} onChange={(event)=>{
      sethomeassign({ ...homeassign, goal1: event.target.value})
    }}/>
    <TextField id="standard-secondary" label="Goal 2" autocomplete="off" value={homeassign.goal2} onChange={(event)=>{
      sethomeassign({ ...homeassign, goal2: event.target.value})
    }}/>
    <TextField id="standard-secondary" label="Goal 3" autocomplete="off" value={homeassign.goal3} onChange={(event)=>{
      sethomeassign({ ...homeassign, goal3: event.target.value})
    }}/>
</div>
</div>
<div className="column">
    <h5>Overcoming Obstacles</h5>
<TextField id="outlined-basic" label="" variant="outlined" value={homeassign.obs} onChange={(event)=>{
      sethomeassign({ ...homeassign, obs: event.target.value})
    }}/>

</div>
    <div className="Submit-btn">
        <button type="submit" onClick={createhomeassign}>
        Submit
        </button>
    
    </div>


</div>
      </div>  
      </div>    
        </>
    );
}

export default HomeAssign
