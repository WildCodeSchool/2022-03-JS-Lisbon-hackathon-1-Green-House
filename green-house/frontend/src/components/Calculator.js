import React, { useContext, useEffect} from 'react'
import CurrentUserContext from '../Contexts/contexts';

function Calculator() {
  const { userTransportation, setUserTransportation, fuelType, setFuelType, displayCard, setDisplayCard, km, setKmkm, setKm} = useContext(CurrentUserContext)

  useEffect(() => {
    CalculatorCO2Car()
}, [userTransportation, fuelType, km])


  let ResultsCO2


  function CalculatorCO2Car() {
    if(fuelType==="Diesel"){
      ResultsCO2=132*km
      return ResultsCO2
      console.log(km)
    }
    if(fuelType==="Petrol"){
      ResultsCO2=120*km
    }
    if(fuelType==="LPG"){
      ResultsCO2=83*km
    }
    if(fuelType==="CNG"){
      ResultsCO2=113*km
    }
  }

    return (
    <div style={{ display: (displayCard ? "block" : "none") }}>
      <h1>gfdg</h1>
      <h1>{`CO2 ${ResultsCO2}`}</h1>
    </div>

    
  

  );
}

export default Calculator;
