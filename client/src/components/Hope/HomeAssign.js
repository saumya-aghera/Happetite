import React from 'react'
import './HomeAssign.css'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function HomeAssign() {
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
    <TextField id="standard-secondary" label="Goal 1" color="primary" />
    <TextField id="standard-secondary" label="Goal 2" color="primary" />
    <TextField id="standard-secondary" label="Goal 3" color="primary" />
</div>
</div>
<div className="column">
    <h5>Overcoming Obstacles</h5>
<TextField id="outlined-basic" label="" variant="outlined" />

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

export default HomeAssign
