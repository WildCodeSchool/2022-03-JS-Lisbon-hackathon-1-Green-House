import React, { useContext} from 'react'
import CurrentUserContext from '../Contexts/Contexts';


function CalculatorForm() {
    const { userTransportation, setUserTransportation, FuelType, setFuelType, displayCard, setDisplayCard, frequencyType, setFrequencyType, tripType, setTripType,} = useContext(CurrentUserContext)
  

    function handleTranportationType(event) {
        setUserTransportation(event.target.value);
    }
    
    function handleFuelType(event){
        setFuelType(event.target.value);
    }

    function handleDisplayCard(){
        setDisplayCard(true);
    }

     
    function handleTripType(event){
      setTripType(event.target.value);
    }

    function handleFrequencyType(event){
        setFrequencyType(event.target.value);
    }

    

    return (
    <div className='form-container-outer'>
      <form className='form-container'>

        <div>
          <h2>Choose a vehicle</h2>
          <div>
            <input type="radio" id="Car" name="transportation_type" value="Car" onClick={handleTranportationType}/>
            <label htmlFor="Car">Car</label><br/>
            <input type="radio" id="Bicycle/Walking" name="transportation_type" value="Bicycle/Walking" onClick={handleTranportationType}/>
            <label htmlFor="Bicycle/Walking">Bicycle/Walking</label><br/>
  {/*           <input type="radio" id="Bus" name="transportation_type" value="Bus" onClick={handleTranportationType}/>
            <label htmlFor="Bus">Bus</label> */}
          </div>
        </div>
        <div>
          <h2>Trip/Frequency</h2>
          <div>
            <select id="trip" name="trip_type" onClick={handleTripType}>
                <option value="One Way">One Way</option>
                <option  value="Round Trip">Round Trip</option>
            </select>
            <select id="frequency" name="frequency_type" value="frequency" onClick={handleFrequencyType}>
                <option value="Daily">Daily </option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
          </div>
        </div>


        <div>
          <h2>Fuel type</h2>
          <div>
            <label htmlFor="fuelType">Choose your fuel type:</label>
                <select id="fuelType" name="fuelType" onChange={handleFuelType}>
                    <option value="">---</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Petrol">Petrol</option>
                    <option value="LPG">LPG</option>
                    <option value="CNG">CNG</option>
                </select>
            </div>
        </div>
      </form>
        <button className='form-button' onClick={handleDisplayCard}>
        Track your print
        </button>
    </div>


  );
}

export default CalculatorForm;
