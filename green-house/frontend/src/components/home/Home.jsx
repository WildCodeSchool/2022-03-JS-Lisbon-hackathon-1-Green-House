import React from 'react';
import Map from '../map/Map';
import Calculator from '../Calculator';
import CalculatorForm from '../CalculatorForm';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Map />
            <CalculatorForm/>
      {/* <div>calculate the amount of  co2 emitted and change your life</div> */}
            <Calculator/>
        </div>
    );
}

export default Home;