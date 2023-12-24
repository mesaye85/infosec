import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

// Navbar component
function Navbar() {
    // This is where you would manage the state or context for user authentication
    // For example, a 'user' state that determines if someone is logged in or not

    return (
        <nav>
            {/* Brand or logo */}
            <div className="navbar-brand">
                <Link to="/">InfoSec</Link>
            </div>

            {/* Navigation Links - adjust these as per your routing setup */}
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* More navigation links as needed */}
            </ul>

            {/* Authentication Links */}
            <div className="auth-links">
                {/* These links could toggle based on user authentication state */}
                <Link to="/signin">Sign In</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
