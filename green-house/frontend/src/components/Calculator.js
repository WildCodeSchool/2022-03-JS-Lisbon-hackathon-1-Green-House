import React, { useContext, useEffect, useState} from 'react'
import CurrentUserContext from '../Contexts/Contexts';

function Calculator() {
   
  const { userTransportation, setUserTransportation, fuelType, setFuelType, displayCard, setDisplayCard, lengthInMeters, setLengthInMeters, tripType, setTripType, setFrequencyType, frequencyType, travelTimeInSeconds} = useContext(CurrentUserContext);

 const [result, setResult] = useState(0)
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
    if(fuelType==="Diesel"){
      if(tripType==="One Way"){
        if(frequencyType==="Daily"){
          ResultsCO2 = 132*lengthInMeters/1000*30
          setResult(ResultsCO2)
        }
        if(frequencyType==="Weekly"){
          ResultsCO2 = 132*lengthInMeters/1000*4
          setResult(ResultsCO2)
        }
        if(frequencyType==="Monthly"){
          ResultsCO2 = 132*lengthInMeters/1000
          setResult(ResultsCO2)
        }}
      if(tripType==="Round Trip"){
        if(frequencyType==="Daily"){
          ResultsCO2 = 132*lengthInMeters/1000*30*2
          setResult(ResultsCO2)
        }
        if(frequencyType==="Weekly"){
          ResultsCO2 = 132*lengthInMeters/1000*4*2
          setResult(ResultsCO2)
        }
        if(frequencyType==="Monthly"){
          ResultsCO2 = 132*lengthInMeters/1000*2
          setResult(ResultsCO2)
        }}}

      if(fuelType==="Petrol"){
        if(tripType==="One Way"){
          if(frequencyType==="Daily"){
            ResultsCO2 = 120*lengthInMeters/1000*30
            setResult(ResultsCO2)
          }
          if(frequencyType==="Weekly"){
            ResultsCO2 = 120*lengthInMeters/1000*4
            setResult(ResultsCO2)
          }
          if(frequencyType==="Monthly"){
            ResultsCO2 = 120*lengthInMeters/1000
            setResult(ResultsCO2)
          }}
        if(tripType==="Round Trip"){
          if(frequencyType==="Daily"){
            ResultsCO2 = 120*lengthInMeters/1000*30*2
            setResult(ResultsCO2)
          }
          if(frequencyType==="Weekly"){
            ResultsCO2 = 120*lengthInMeters/1000*4*2
            setResult(ResultsCO2)
          }
          if(frequencyType==="Monthly"){
            ResultsCO2 = 120*lengthInMeters/1000*2
            setResult(ResultsCO2)
          }}}

          if(fuelType==="LPG"){
            if(tripType==="One Way"){
              if(frequencyType==="Daily"){
                ResultsCO2 = 83*lengthInMeters/1000*30
                setResult(ResultsCO2)
              }
              if(frequencyType==="Weekly"){
                ResultsCO2 = 83*lengthInMeters/1000*4
                setResult(ResultsCO2)
              }
              if(frequencyType==="Monthly"){
                ResultsCO2 = 83*lengthInMeters/1000
                setResult(ResultsCO2)
              }}
            if(tripType==="Round Trip"){
              if(frequencyType==="Daily"){
                ResultsCO2 = 83*lengthInMeters/1000*30*2
                setResult(ResultsCO2)
              }
              if(frequencyType==="Weekly"){
                ResultsCO2 = 83*lengthInMeters/1000*4*2
                setResult(ResultsCO2)
              }
              if(frequencyType==="Monthly"){
                ResultsCO2 = 83*lengthInMeters/1000*2
                setResult(ResultsCO2)
              }}}

            if(fuelType==="CNG"){
              if(tripType==="One Way"){
                if(frequencyType==="Daily"){
                  ResultsCO2 = 133*lengthInMeters/1000*30
                  setResult(ResultsCO2)
                }
                if(frequencyType==="Weekly"){
                  ResultsCO2 = 133*lengthInMeters/1000*4
                  setResult(ResultsCO2)
                }
                if(frequencyType==="Monthly"){
                  ResultsCO2 = 133*lengthInMeters/1000
                  setResult(ResultsCO2)
                }}
              if(tripType==="Round Trip"){
                if(frequencyType==="Daily"){
                  ResultsCO2 = 133*lengthInMeters/1000*30*2
                  setResult(ResultsCO2)
                }
                if(frequencyType==="Weekly"){
                  ResultsCO2 = 133*lengthInMeters/1000*4*2
                  setResult(ResultsCO2)
                }
                if(frequencyType==="Monthly"){
                  ResultsCO2 = 113*lengthInMeters/1000*2
                  setResult(ResultsCO2)
                }}}}


  function CalculatorCO2Bicycle() {
    //Cyclists on the average European diet will add 16 g of CO2 per km ridden https://www.ourstreetsmpls.org/does_bike_commuting_affect_your_carbon_footprint_and_how_much
    if(userTransportation==="Bicycle/Walking"){
      ResultsCO2 = 16*lengthInMeters/1000
      setResult(ResultsCO2)
    }
  }
  console.log(result)

  function CalculatorCO2Bus() {
    //https://www.winacc.org.uk/downloads/STAP/Shorter_Transport%20Emissions%20Report_110328.pdf 95 g CO2e/km Per pass 23% full 
    if(userTransportation==="Bus"){
      ResultsCO2 = 95*lengthInMeters/1000
      setResult(ResultsCO2)
    }
  }

  

    return (
    <div className='calculator-card-container'>
     

      <h1 style={{ display: (!displayCard ? "block" : "none") }}>Your results will appear here!</h1>

      <div className='calculator-card' style={{ display: (displayCard ? "block" : "none") }}>
      <h1>{`CO2: ${result} g of CO2`}</h1>
        <h1>{lengthInMeters && lengthInMeters/1000+"Km"}</h1>
        <h2>{travelTimeInSeconds && parseFloat(travelTimeInSeconds/60).toFixed(1)+"min"} </h2>
      </div>
     
    </div>

    
  

  );
}

export default Calculator;
