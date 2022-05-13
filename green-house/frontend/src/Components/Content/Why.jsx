import React from "react";
import './Why.css';

export default function Why() {
    return (
        <div className="whyContainer">
            <div className="why-title">
                <h1>Why ?</h1>
            </div>
            <div className="why-content">
                <div className="whyText">
                    <h2>
                        Distribution of carbon dioxide emissions produced by the transportation sector worldwide in 2020, by subsector.
                    </h2>
                    <p>
                    To reduce the amount of CO2 produced by transportation on a day-to-day basis for more ecologic cities and with the goal of raising awareness to people so they are more aware of how they can be part of the change and have new  and healthier habits.
                    </p>
                </div>
                <div className="graph-container">
                <img src="https://www.statista.com/graphic/1/1185535/transport-carbon-dioxide-emissions-breakdown.jpg" 
                    alt="Statistic: Distribution of carbon dioxide emissions produced by the transportation sector worldwide in 2020, by subsector | Statista" 
                    />
                </div>
            </div>
            
        </div>
    )
}