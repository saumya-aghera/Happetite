import React from 'react'
import './Template.css'
import temp from '../../images/vidtemp.mp4'
import left from '../../images/left.jpeg'
import right from '../../images/right.jpeg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Template() {
    
    return (
        <div className="tp-main">
            {/* <video autoPlay muted id='video_temp'>
                    <source src={temp} type='video/mp4'/>
                </video> */}
                {/* <AliceCarousel autoPlay autoPlayInterval="10">
      <img src={left} className="sliderimg"/>
      <img src={right} className="sliderimg"/>
      <img src={temp} className="sliderimg"/>
     
</AliceCarousel>  */}
        </div>
    )
}

export default Template
