import React from 'react';

import bg from "../../resources/images/background.jpg"
import vid from "../../resources/videos/COVID19.mp4"

import "./landing.css";


const Landing = () =>  {
    return( <div>
    <section className="landing">  
        <div className="video-container"> 
            <video src = {vid} autoPlay= {true} muted loop></video>  
        </div>
        <div className="content">
            <h1>End of COVID-19 Countdown</h1>
            <h3>Please dont take this site seriously</h3>
            <a href="#about" className="btn">Read More</a>
        </div>
    </section>
  </div>)
  }
  export default Landing