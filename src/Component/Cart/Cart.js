import React from 'react';
import './Cart.css'


const Cart = ({ cart, removeItem }) => {
    // conditional rendering option
    //  1. element variable
    // 2. ternary  operator 
    // 3 && operator 
    let command;
    if (cart.length === 0) {
        command = <p> Please Add at lest one Item </p>
    }
    else if (cart.length === 1) {
        command = <p> Please Enter some One </p>
    }
    else {
        command = <p>Thanks for adding Item</p>
    }

    return (
        <div>
            <h2>select cart {cart.length}</h2>

            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove All</button>}
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => removeItem(tShirt)} >X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange' >Yeah You are Buying</p>}
            {cart.length === 3 && <div className='orange' >
                <p>Triangoler</p>
            </div>
            }
            {cart.length === 4 && <button>Review Order</button>} {command}

        </div>
    );
};


export default Cart;