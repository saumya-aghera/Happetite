import React, { useRef, useState, useEffect } from "react";
import './Game.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
//import i1 from '../../images/game.png'
function Game() {
    const [minute, setMinuter] = useState(15);
  const funRef = useRef(null);
  const hourSeconds = 900;
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  useEffect(() => {
    if (minute !== 0) {
      funRef.current = setTimeout(() => {
        setMinuter(minute - 1);
      }, 60000);
    } else {
      clearTimeout(funRef.current);
    }
  });

  const timerProps = {
    isPlaying: true,
    size: 100,
    strokeWidth: 6
  };

    return (
        <>
        <div className="game-main">
            <h2>Let's Play A Game!</h2>
            <div className="row">
                <div className="col">
                <CountdownCircleTimer
        {...timerProps}
        isPlaying
        initialRemainingTime={hourSeconds}
        className="timer-game"
        duration={hourSeconds}
        colors={[["#3f51b5"]]}
        onComplete={() => console.log("times up")}
      >
        {({ elapsedTime }) => {
          //console.log(hourSeconds - elapsedTime / 1000);
          return renderTime("minutes", minute);
        }}
      </CountdownCircleTimer>
                </div>
                <div className="col">
             
                </div>
      
      
    </div>
        </div>
           
        </>
    )
}

  export default Game;