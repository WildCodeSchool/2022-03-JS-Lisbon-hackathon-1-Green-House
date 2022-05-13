import React from 'react';
import Map from '../map/Map';
import Calculator from '../Calculator';
import CalculatorForm from '../CalculatorForm';
import './Home.css'
import { Location } from '../../media/exportMedia'

function Home() {
    return (
        <div className='main-section-container'>
            <div className='section-title container'>
                <h1 className='home-title'>Calculate your transport carbon footprint</h1>
                
                <div className='location'>
                    <p className='choose-location'>Choose your location on the map</p>
                </div>
            </div>
            
            <div className='section-1-container container'>    
                <h1 className='home-title-desktop'>Calculate your transport carbon footprint</h1>
                <CalculatorForm/>
            </div>
            <div className='section-2-container '>
                <Map />
                <Calculator/>
            </div>
            
      {/* <div>calculate the amount of  co2 emitted and change your life</div> */}
            
        </div>
    );
}

export default Home;