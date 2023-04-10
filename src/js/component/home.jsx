import React from "react";

import Digit from "./Digit.jsx";
import './home.css'
import { BsClockFill } from 'react-icons/bs';

//include images into your bundle
//create your first component
const Home = ({proppedTime}) => {

	const calculateDigit = ({time,noDivision}) =>{
		if (noDivision) return Math.floor(proppedTime%10)
		return Math.floor(proppedTime/time)%time
	}
	return (
		<div>
			<div className="wrapper">
				{/* <div className="col-2 clockCSS Bs-2xl"><BsClockFill/></div> */}
				<BsClockFill className="col-1" size='2x'/>
				<Digit className="digitHolder" digit={calculateDigit({time: 100000})}/>
				<Digit className="digitHolder" digit={calculateDigit({time: 10000})}/>
				<Digit className="digitHolder" digit={calculateDigit({time: 1000})}/>
				<Digit className="digitHolder" digit={calculateDigit({time: 100})}/>
				<Digit className="digitHolder" digit={calculateDigit({time: 10})}/>
				<Digit className="digitHolder" digit={calculateDigit({noDivision: true})}/>
				{/* <SimpleCounter/> */}
			</div>
		</div>
	);
};

export default Home;
