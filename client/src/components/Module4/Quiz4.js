import React from 'react'
import './Quiz4.css'
function Quiz4() {
    return (
      
        <div className="quiz4-main" id='quiz4'>
            <div className='quiz4-cont'>
            <h2>Take This Quiz!</h2>
            <div style={{
                    textAlign:'center',
                    fontSize: 'medium',
                    fontWeight:'500',
                    paddingBottom: '20px',
                    paddingLeft: '75px',
                    paddingRight: '75px'
                }}><u>Instructions:</u> After a week of practising gratitude, let’s take a quick quiz to understand how gratitude relates to us. Each statement has a range of options from ‘never’ to ‘more than once a week’. You need to choose the option best suited for you for that statement. Try not to over think it and choose the answer that you feel best describes you.
                </div>
                <div className='quiz4'>
<iframe src="https://greatergood.berkeley.edu/quizzes/embed/gratitude" width="900" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            </div>
        </div>
    )
}

export default Quiz4