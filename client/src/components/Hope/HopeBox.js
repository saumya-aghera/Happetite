import React, { useState } from 'react'
import './HopeBox.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


function HopeBox() {
    
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
                <div className="list"><TextField id="standard-secondary" label="List it down!" color="primary" /></div>
                </div>
                <div className="column">
                <div className="file-input">
                <input type="file" name="file" id="file" class="inputfile" />
                    <label for="file">Choose A File</label>
  
                </div>
                </div>
                    <div className="Submit-btn">
                        <button type="submit">
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
