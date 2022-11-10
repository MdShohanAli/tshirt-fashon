import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <h2>Welcome to TShirt Fashion </h2>
            <ul className='navbar'>
                <li className='navbar-link'> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : '' } }} to="/home"> Home </NavLink></li>
                <li className='navbar-link'><NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : '' } }} to="/about"> About </NavLink ></li>
                <li className='navbar-link'><NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : '' } }} to="/orderReview"> orderReview </NavLink ></li>
                <li className='navbar-link'><NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : '' } }} to="/grandpa"> Grandpa </NavLink ></li>
            </ul>
        </div>
    );
};

export default Header;