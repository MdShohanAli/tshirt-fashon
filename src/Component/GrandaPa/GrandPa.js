import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrnadPa.css';

export const RingContext = createContext('diamond');

const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const houseCardHandle = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    const gift = 'dimond Ring ';
    return (
        <RingContext.Provider value={[house, setHouse]} >
            <div className='grandpa'>

                <h3>Grand Pa</h3>
                <p>House {house}</p>
                <button onClick={houseCardHandle} >Buy A House</button>
                <div className='size' >
                    <Father house={house} gift={gift} ></Father>
                    <Uncle house={house} ></Uncle>
                    <Aunty house={house} ></Aunty>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;