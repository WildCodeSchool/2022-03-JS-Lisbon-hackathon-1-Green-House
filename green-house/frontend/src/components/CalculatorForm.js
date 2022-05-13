import React, { useContext} from 'react'
import CurrentUserContext from '../contexts/contexts';


function CalculatorForm() {
    const { userTransportation, setUserTransportation, FuelType, setFuelType, displayCard, setDisplayCard} = useContext(CurrentUserContext)
  

    function handleTranportationType(event) {
        setUserTransportation(event.target.value);
    }
    
    function handleFuelType(event){
        setFuelType(event.target.value);
    }

    function handleDisplayCard(){
        setDisplayCard(true);
    }


    

    return (
    <div>
      <form>

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
            <select id="trip" name="trip_type" value="trip">
              <option>Day</option>
              <option>Round Trip</option>
            </select>
           
            <select id="frequency" name="frequency_type" value="frequency">
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
        <button onClick={handleDisplayCard}>
        Track your print
        </button>
    </div>


  );
}

export default CalculatorForm;
