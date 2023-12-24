import React from 'react';

// Import CSS for styling
// import './Detail.css';

const Detail = ({ item }) => {
    // Assuming 'item' is an object with properties like 'title', 'description', 'image', etc.
    // Destructure the properties you need
    // const { title, description, image } = item;

    return (
        <div className="detail">
            <h2 className="detail-title">{item.title}</h2>
            <img src={item.image} alt={item.title} className="detail-image" />
            <p className="detail-description">{item.description}</p>

            {/* Add more HTML elements to display other parts of the item details, like price, author, date, etc. */}
            {/* <p className="detail-price">{item.price}</p>
                <p className="detail-author">{item.author}</p>
                <p className="detail-date">{item.date}</p> */}
        </div>
    );
};

export default Detail;
