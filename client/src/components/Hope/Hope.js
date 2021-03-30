import React,{useState} from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';





const Hope = () => {
    
    const [content, setContent] = useState(false);

    const showContents = () => {
        
        if (content) {
            return (<div>
        <Video />
        <HopeBox />
        <Quiz />
        <HomeAssign />
    </div>)
        }
        else {
            return null
        }
        
        
}
    

    return (
        <div>
            
            <div className="Hope-main" id='module' onClick={() => setContent(!content)} >
                    <h2>Hope</h2>     
            </div>
            {showContents()}
        </div>
    );
}

export default Hope
