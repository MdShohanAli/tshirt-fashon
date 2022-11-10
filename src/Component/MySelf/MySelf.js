import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, gift }) => {
    return (
        <div>
            <h3>My Self</h3>
            <p>{house}</p>
            <Special gift={gift}> Special </Special>


        </div>
    );
};

export default MySelf; <h3>My  Self</h3>