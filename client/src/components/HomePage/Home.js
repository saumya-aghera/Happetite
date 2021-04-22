import React, { useEffect} from 'react'
import './Home.css'
import Intro from '../Intro/Intro'
import Module from '../Modules/Module'
import vid from '../../images/vid.mp4'
import sunset from '../../images/sunset.mp4'
import FAQ from '../FAQ/FAQ';
import Helplines from '../Helplines/Helplines';


const Home = ({ updatedModuleStatus, changeUpdatedModuleStatus }) => {
    
    useEffect(() => {
         window.scrollTo(0, 0);
    }, [])

    return (
        
        <div className='home-main' id ='home'>
            {/* <img src="../images/pinkmh.png" style={{width:'100%', height:'1000px'}}/> */}
            {/* <div className='container-home'> */}
                <video autoPlay loop muted id='video'>
                    <source src={sunset} type='video/mp4'/>
                </video>
                <div className="home-text">
                <h1 className="home-h1">HAPPETITE</h1>
                <br />
                <h4>Feed Your Happiness</h4>
                </div>
                
            {/* </div> */}
            <Intro />
            <Module updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
           
           
           
        </div>
        
    );
}

export default Home