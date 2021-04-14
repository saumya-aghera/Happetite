import React from 'react'
import './Home.css'
import Intro from '../Intro/Intro'
import Module from '../Modules/Module'
import vid from '../../images/vid.mp4'
import FAQ from '../FAQ/FAQ';
import Helplines from '../Helplines/Helplines';


const Home=()=> {
    return (
        
        <div className='home-main' id ='home'>
            {/* <img src="../images/pinkmh.png" style={{width:'100%', height:'1000px'}}/> */}
            {/* <div className='container-home'> */}
                <video autoPlay loop muted id='video'>
                    <source src={vid} type='video/mp4'/>
                </video>
                <div className="home-text">
                <h1 className="home-h1">HAPPETITE</h1>
                <br />
                <h4>Feed Your Happiness</h4>
                </div>
                
            {/* </div> */}
            <Intro />
            <Module />
            <FAQ />
             <Helplines />
           
           
        </div>
        
    );
}

export default Home