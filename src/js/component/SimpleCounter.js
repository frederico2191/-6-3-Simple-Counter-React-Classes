import React, { useState, useEffect, useRef } from "react";
import './SimpleCounter.css'
import { BsClockFill } from 'react-icons/bs';

const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    const currentTime = useRef()

    useEffect(() => {
        console.log("the counter before setinterval", counter)
        currentTime.currrent = setInterval(() => {
            console.log("I came inside the set interval",counter)
            const newCounter = counter+1
            console.log(newCounter,"newCounter")
            usersCollDataRef.current = newCounter
            setCounter(newCounter)
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    },[])

    // const generateCounter= (index) => {
    //     const stringedCounter= counter.toString()
    //     return (stringedCounter[stringedCounter.length -index]? stringedCounter[stringedCounter.length -index] : 0 )
    // }

    return (
        <div>
            <div className="col-12" id="container">
                {/* <div className="col-2 fs-10 clockCSS"><BsClockFill/></div>
                <div className="numberHolder col-1">{generateCounter(6)}</div>
                <div className="numberHolder col-1">{generateCounter(5)}</div>
                <div className="numberHolder col-1">{generateCounter(4)}</div>
                <div className="numberHolder col-1">{generateCounter(3)}</div>
                <div className="numberHolder col-1">{generateCounter(2)}</div>
                <div className="numberHolder col-1">{generateCounter(1)}</div> */}
                <div className="col-2 fs-10 clockCSS"><BsClockFill/></div>
                <div className="numberHolder col-1">0</div>
                <div className="numberHolder col-1">0</div>
                <div className="numberHolder col-1">0</div>
                <div className="numberHolder col-1">0</div>
                <div className="numberHolder col-1">0</div>
                <div className="numberHolder col-1">0</div>
            </div>
        </div>
    )
}


export default SimpleCounter;

