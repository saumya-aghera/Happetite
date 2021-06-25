import React from 'react'
import './Template.css'
import temp1 from '../../images/t1.png'
import temp2 from '../../images/t2.png'
import temp3 from '../../images/t3.png'
//import left from '../../images/left.jpeg'
//import right from '../../images/right.jpeg'
//import AliceCarousel from 'react-alice-carousel';
//import "react-alice-carousel/lib/alice-carousel.css";

function Template() {
    
    return (
        <div className="tp-main" >
           
            
      <img src={temp1} style={{ marginBottom:'5%', width:'75%'}} />
      
      <img src={temp2} style={{ width:'75%'}} />
      <img src={temp3} style={{marginTop:'5%', marginBottom:'5%', width:'75%'}} />
        </div>
    )
}

export default Template
