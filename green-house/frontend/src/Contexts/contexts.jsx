/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { createContext, useState, useEffect } from 'react';



const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
    const [userTransportation, setUserTransportation] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [km, setKm] = useState();
    const [displayCard, setDisplayCard] = useState(false);
    const [resultsCO2, setResultsCO2] = useState(0);


    return (
        <CurrentUserContext.Provider
            value={{
                userTransportation, 
                setUserTransportation,
                fuelType, 
                setFuelType,
                displayCard,
                setDisplayCard,
                km, 
                setKm,
                resultsCO2, 
                setResultsCO2}}
        >
            {children}
        </CurrentUserContext.Provider>
    );

};

export default CurrentUserContext;