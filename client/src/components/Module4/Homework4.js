import React from 'react'
import './Homework4.css'
import TextField from '@material-ui/core/TextField';

function Homework4() {
    return (
        <>
        <div className="hw4-main">
            <h2>Home Assignment</h2>
            <p><u>Instructions:</u> Your home activity for this week is maintaining an online gratitude journal. As your day ends, fill in the aspects of the journal required for that day. Each day you will have three good things visible to you to write about or fill in by completing the sentences. Make sure that you practise gratitude daily by filling the journal. Remember practise strengthens habits.
</p>
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
        />
        </div>
        </>
    )
}

export default Homework4
