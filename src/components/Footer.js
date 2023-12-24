import React from 'react';

// Import CSS for styling
// import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2023 InfoSec. All rights reserved.</p>
                {/* Add more footer content here: links, contact information, social media icons, etc. */}
                <ul className="footer-links">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    {/* Add other links as required */}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
