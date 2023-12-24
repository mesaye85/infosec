import React from 'react';
// import './Modal.css'; // Uncomment if you have a separate CSS file for styling

const Modal = ({ show, children, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-button" onClick={onClose}>
                    X
                </button>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
