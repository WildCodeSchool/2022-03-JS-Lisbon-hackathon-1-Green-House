import React, { useContext, useEffect, useState} from 'react'
import CurrentUserContext from '../Contexts/contexts';

function Calculator() {
  const { userTransportation, setUserTransportation, fuelType, setFuelType, displayCard, setDisplayCard, km, setKmkm, setKm} = useContext(CurrentUserContext)

 const [result, setResult] = useState('')
  let ResultsCO2;

  useEffect(() => {
    CalculatorCO2Car()
  })




  function CalculatorCO2Car() {
    console.log(fuelType)
    if(fuelType==="Diesel"){
      ResultsCO2 = 132*km
      setResult(ResultsCO2)
    }
    else if(fuelType==="Petrol"){
      ResultsCO2=120*km
      setResult(ResultsCO2)

    }
    else if(fuelType==="LPG"){
      ResultsCO2=83*km
      setResult(ResultsCO2)

    }
    else if(fuelType==="CNG"){
      ResultsCO2=113*km
      setResult(ResultsCO2)

    }
  }


    return (
    <div style={{ display: (displayCard ? "block" : "none") }}>
      <h1>gfdg</h1>
      <h1>{`CO2: ${result}`}</h1>
    </div>

    
  

  );
}

export default Calculator;
