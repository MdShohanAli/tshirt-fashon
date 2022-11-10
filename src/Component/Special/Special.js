import React, { useContext } from 'react';
import { RingContext } from '../GrandaPa/GrandPa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>Special Person</h2>
            <p> Gift : {house}</p>
            <button onClick={() => setHouse(house + 1)} >add House</button>


        </div>
    );
};

export default Special;