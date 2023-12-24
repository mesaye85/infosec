import React from 'react';

// You can import additional assets like images or CSS files here
// import './Header.css';
// import logo from '../path-to-logo/logo.png';

const Header = () => {
    return (
        <header className="header">
            {/* You can add an image or logo here if you have one */}
            {/* <img src={logo} alt="Logo" className="header-logo" /> */}
            
            <h1 className="header-title">Welcome to InfoSec</h1>

            {/* Add additional navigation or interactive elements here if needed */}
            {/* <nav>
                <ul className="header-nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
        </header>
    );
};

export default Header;
