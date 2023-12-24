import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollList = () => {
    // State to store the list items
    const [items, setItems] = useState([]);

    // State to track if there are more items to load
    const [hasMore, setHasMore] = useState(true);

    // Function to fetch more items (replace with your actual data fetching logic)
    const fetchMoreData = () => {
        if (items.length >= 100) {  // Arbitrary limit for demonstration; adjust as needed
            setHasMore(false);
            return;
        }

        // Simulate an API call
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 }))); // Add 20 more items
        }, 1500);
    };

    // Initial data fetch
    useEffect(() => {
        fetchMoreData();
    }, []);

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>You have seen it all</b>
                </p>
            }
        >
            {items.map((item, index) => (
                <div key={index} style={{ height: 30, border: '1px solid green', margin: 6, padding: 8 }}>
                    {/* Replace this div with your actual item component */}
                    Row {index + 1}
                </div>
            ))}
        </InfiniteScroll>
    );
};

export default InfiniteScrollList;
