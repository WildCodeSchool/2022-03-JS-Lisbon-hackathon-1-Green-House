import React, { useContext, useEffect, useState} from 'react'
import CurrentUserContext from '../Contexts/contexts';

function Calculator() {
  const { userTransportation, setUserTransportation, fuelType, setFuelType, displayCard, setDisplayCard, km, setKmkm, setKm} = useContext(CurrentUserContext)

 const [result, setResult] = useState('')
  let ResultsCO2;

  useEffect(() => {
    CalculatorCO2()
  })

  function CalculatorCO2(){
    if (userTransportation==="Car"){
      CalculatorCO2Car()
    }
    else if (userTransportation==="Bicycle/Walking"){
      CalculatorCO2Bicycle()
    }
    else if (userTransportation==="Bus"){
      CalculatorCO2Bus()
    }
  }

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


  function CalculatorCO2Bicycle() {
    //Cyclists on the average European diet will add 16 g of CO2 per km ridden https://www.ourstreetsmpls.org/does_bike_commuting_affect_your_carbon_footprint_and_how_much
    if(userTransportation==="Bicycle/Walking"){
      ResultsCO2 = 16*km
      setResult(ResultsCO2)
    }
  }

  function CalculatorCO2Bus() {
    //https://www.winacc.org.uk/downloads/STAP/Shorter_Transport%20Emissions%20Report_110328.pdf 95 g CO2e/km Per pass 23% full 
    if(userTransportation==="Bus"){
      ResultsCO2 = 95*km
      setResult(ResultsCO2)
    }
  }

    return (
    <div style={{ display: (displayCard ? "block" : "none") }}>
      <h1>{`CO2: ${result}`}</h1>
    </div>

    
  

  );
}

export default Calculator;
