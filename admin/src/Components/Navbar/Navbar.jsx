import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="pocket-logo">
                <img src={navlogo} alt="" className="navlogo" />
                <p>Pocket</p>
                <div className='admin-panel'>
                    <p>Admin Panel</p>
                </div>
            </div>
            <img src={navProfile} className='nav-profile' alt="" />
        </div>
    )
}

export default Navbar;