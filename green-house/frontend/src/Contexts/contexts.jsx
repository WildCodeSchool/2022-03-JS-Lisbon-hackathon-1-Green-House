/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { createContext, useState, useEffect } from 'react';



const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
    
    const [userTransportation, setUserTransportation] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [displayCard, setDisplayCard] = useState(false);
    const [resultsCO2, setResultsCO2] = useState(0);
    const [lengthInMeters, setLengthInMeters] = useState('')
    const [travelTimeInSeconds, setTravelTimeInSeconds] = useState('')
    const [tripType, setTripType] = useState('')
    const [frequencyType, setFrequencyType] = useState('')

    return (
        <CurrentUserContext.Provider
            value={{
                userTransportation, 
                setUserTransportation,
                fuelType, 
                setFuelType,
                displayCard,
                setDisplayCard,
                resultsCO2, 
                setResultsCO2,
                lengthInMeters, 
                setLengthInMeters,
                travelTimeInSeconds,
                setTravelTimeInSeconds,
                tripType, 
                setTripType,
                frequencyType,
                setFrequencyType
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    );

};

export default CurrentUserContext;