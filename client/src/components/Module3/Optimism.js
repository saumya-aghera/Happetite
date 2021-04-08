import React from 'react'
import './Optimism.css'
import ReactPlayer from "react-player";

function Optimism() {
    return (
        <>
            <div className="opti-main">
            <h2>What is learned optimism or positive reappraisal?</h2>
            <p>Have you experienced a situation where you feel stuck or affects you negatively? How we understand a situation or an event determines how we feel about it, stress levels, and subsequent behaviour. By changing the way, we look at a situation we can change how we feel. This process can be called as reality negotiation, which at times, helps you find what is good in a bad experience. This is similar to “seeing the glass as half full rather than half empty”. Research in social psychology demonstrates positive reappraisal to be one of the most effective emotional-regulation strategies, as it is related to overall well-being.
<br />It is important to note that positive reappraisal does not mean that we are living in denial or not accepting that something bad has happened to us but it helps us to accept the bad situation and helps us to focus on the best of that situation.
<br />For example, suppose you had an exciting day planned with your friends to go out, but due to the heavy rain the plan does not seem possible. You get very frustrated. The you remind yourself ‘I can’t control the weather, so I might as well calm down’. In such a manner, you made a conscious decision to stop getting worked up or stressed over a situation you have no control over. You try to focus on the positives. You try to enjoy the cool weather, with a warm beverage and make a plan to indulge in some self-care and relaxation.
In the next video, we will learn about the ABCDE mode/technique related to learned optimism so we get an understanding of how it works and how we can use it on ourselves.
</p>
<div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=S-JOAM9G404"
                    
                    />
                </div>
            </div>
            
        </>
    )
}

export default Optimism
