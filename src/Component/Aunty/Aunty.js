import React, { useContext } from 'react';
import { RingContext } from '../GrandaPa/GrandPa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleHouseCount = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div>
            <h3>Aunty</h3>
            <p> house : {house}</p>
            <button onClick={handleHouseCount} >Aunty magice </button>
        </div>
    );
};

export default Aunty; 