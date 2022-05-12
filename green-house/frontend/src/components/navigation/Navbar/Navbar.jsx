import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { Logo } from '../../../media/exportMedia'


function Navbar() {

    const [active, setActive] = useState(false);


    const handleHamburger = () => {
        setActive(!active)
    };

    const body = document.querySelector('body');
    active ? body.style.overflowY = "hidden" : body.style.overflowY = "initial";

    return (

        <div className="navbar-container">
            <Link to="/"><Logo/></Link>
            <nav className="navbar-desktop">
 
                    <div className="">
                        <Link to="/">Home</Link>
                        <Link to="/leaderboard">Leaderboard</Link>
                        <Link to="/info">Info</Link>
                    </div>        
            </nav>
            <button className={ active ? "burger-is-active , hamburger" : "hamburger"} onClick={handleHamburger}>
                <div className="bar"></div>
            </button>
            <nav className={ active ? "side-is-active , mobileNav" : "mobileNav"} >
                <Link to="/" onClick={handleHamburger}>Home</Link>
                <Link to="/leaderboard" onClick={handleHamburger}>Leaderboard</Link>
                <Link to="/info" onClick={handleHamburger}>Info</Link>
            </nav>
        </div>
    );
}

export default Navbar;