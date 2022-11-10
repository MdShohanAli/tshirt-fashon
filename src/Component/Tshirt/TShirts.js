import React from 'react';
import './TShirt.css'

const TShirts = ({ cartHandel, tShirt }) => {

    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt' >
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h4>{price}</h4>
            <button onClick={() => cartHandel(tShirt)} >add to cart</button>

        </div>
    );
};

export default TShirts;