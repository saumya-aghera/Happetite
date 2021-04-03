import React, {useState} from 'react'
import './HopeBox.css'
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import axios from 'axios';

function HopeBox() {
    const [hopebox, sethopebox] = useState({
        list: '',
        file: ''
    });
    const createhopebox = () => {
        console.log(`Box submitted: `);
          axios.post('http://localhost:5000/hopebox', hopebox)
      }
    return (
        <>
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
