import React from 'react'
import './Ques.css'
function Ques() {
    return (
        <div className="ques-main" id='questionare'>
        <div className='ques-cont'>
            <h2>Post Intervention Questionnaire</h2>
            <div style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'20px'
                    
                    }}>Kindly fill the questionnaire present below, please make sure that you answer all the items
</div>
<div className='ques1'>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6eOcEot7bp64NdDRlOqrVD5qTmqGhhS3bAroIq5NWTANwrQ/viewform?embedded=true" width="900" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>		</div>
        </div>
        </div>
        
    )
}

export default Ques