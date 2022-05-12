import React from "react";
import './How.css';
import { Location, Calculate, PointTree } from '../../media/exportMedia'


export default function How() {
    return (
        <div className="how-container">
            <div className="how-title">
            <h1>How ?</h1>
            </div>
            <div className="steps-container">
                
                    <div className="stepOne">
                        <Location/>
                        <p>
                        Insert your trip Begin-Point and End-Point
                        </p>
                    </div>
                    <div className="stepTwo">
                        <Calculate className="icon"/>
                        <p>
                        We calculate based on the type of vehicle the amount of CO2 emitted 
                        </p>
                    </div>
                    <div className="stepThree">
                        <PointTree className="icon"/>
                        <p >
                        You earn Points based on the amount of CO2 you dont pollute 
                        </p>
                    </div>
            </div>
        </div>
    )
}