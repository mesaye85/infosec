import React from 'react';

// You can import additional assets like CSS for styling
// import './Form.css';

const Form = () => {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        alert('Form submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>

            {/* Add more input fields as needed */}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
