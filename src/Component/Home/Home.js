import React, { useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useTshirts from '../../Hook/useTshirt';
import TShirts from '../Tshirt/TShirts';

const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const cartHandel = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('already add ')
        }

    }

    const removeItem = (selectedItem) => {


        const restCart = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(restCart)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirts
                        tShirt={tShirt}
                        key={tShirt._id}
                        cartHandel={cartHandel}>
                    </TShirts>)

                }
            </div>
            <div className="cart-container">
                <Cart removeItem={removeItem} cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default Home;