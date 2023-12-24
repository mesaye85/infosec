import React, { useState, useEffect } from 'react';
import MostViewedItem from './MostViewedItem'; // Component for individual most viewed articles

// MostViewed component to display most viewed articles in a sidebar
function MostViewed() {
    const [mostViewedArticles, setMostViewedArticles] = useState([]); // State for storing most viewed articles

    // Mock function to simulate fetching most viewed articles from an API
    const fetchMostViewedArticles = () => {
        // Here, you would make an API call to fetch most viewed articles
        // For demonstration, we're using a timeout to simulate asynchronous behavior
        setTimeout(() => {
            const newArticles = []; // Replace this with actual fetched data
            setMostViewedArticles(newArticles);
        }, 1000);
    };

    // Use useEffect to fetch initial most viewed articles on component mount
    useEffect(() => {
        fetchMostViewedArticles();
    }, []);

    return (
        <div className="most-viewed-sidebar">
            {mostViewedArticles.map((article, index) => (
                <MostViewedItem key={index} data={article} />
            ))}
        </div>
    );
}

export default MostViewed;
