import React from 'react';
// Optionally, import Link from react-router-dom if you want to make each item a link to the full article

// MostViewedItem component to display an individual most viewed article
function MostViewedItem({ data }) {
    // Destructure the necessary properties from data, adjust based on your data structure
    const { title, excerpt, viewCount } = data;

    return (
        <div className="most-viewed-item">
            <h4>{title}</h4>
            <p>{excerpt}</p> {/* Short excerpt or summary of the article */}
            <span>Views: {viewCount}</span> {/* Display the number of views if available */}
            {/* Optionally, add a link to the full article */}
            {/* <Link to={`/article/${data.id}`}>Read More</Link> */}
        </div>
    );
}

export default MostViewedItem;
