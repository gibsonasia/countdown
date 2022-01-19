import React from 'react';
import "./countdown.css";

const Countdown = () =>  {
    const time = document.querySelector(".time");

//get the interval of time
const interval = setInterval(()=>{
    //timer for date of when it'll end: year, month, date, hr:min:sec
    const end = new Date("2024 jan 16 00:00:00");
    //current date/time/year whatever
    const current = new Date();
    // get the time difference left from when it'll end and now
    const timeLeft = end - current;
    //get days hr min and sec 
    // multiply 1000 miliseconds * 60 sec * 60 min * 24 num
    //Math.floor will get the floor of the number or round it down
    const days = Math.floor(timeLeft/(1000*60*60*24));
    //get remaining hr will always get less than 24
    const hr = Math.floor((timeLeft/(1000*60*60*24))%24);
    //get the remaining minutes
    const min = Math.floor((timeLeft/(1000*60))%60);
    //get the remaining seconds
    const sec = Math.floor((timeLeft/1000)%60);

    if(timeLeft<0){
        //if the time left is 0 or its done, print its over
        time.innerHTML = `
            <h2>IS FINALLY OVER!!!</h2>
            `
    }else{
        //will display in html the times left
        time.innerHTML= `
            <ul>
            <li>${days} Days</li>
            <li>${hr} Hours</li>
            <li>${min} Minutes</li>
            <li>${sec} Seconds</li>
            </ul>
        `;
    }

    
    //change display every second by or 1000 miliseconds
}, 1000);
    return(
    <div>
        <div className="countdown_container">
        <div className="time"></div>
        </div>
    </div>);
}

export default Countdown;