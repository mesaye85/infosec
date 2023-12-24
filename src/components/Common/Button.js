import React from 'react';
// import './Button.css'; // Uncomment if you have a separate CSS file for styling

const Button = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
