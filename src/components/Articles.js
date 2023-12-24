import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleItem from './ArticleItem'; // Component for individual articles

// Articles component for displaying articles in an infinite scroll
function Articles() {
    const [articles, setArticles] = useState([]); // State for storing articles
    const [hasMore, setHasMore] = useState(true); // State to track if more articles are available

    // Mock function to simulate fetching articles from an API
    const fetchArticles = () => {
        // Here, you would make an API call to fetch articles
        // For demonstration, we're using a timeout to simulate asynchronous behavior
        setTimeout(() => {
            const newArticles = []; // Replace this with actual fetched data
            setArticles([...articles, ...newArticles]);
            setHasMore(newArticles.length > 0); // Update 'hasMore' based on the fetched data
        }, 1000);
    };

    // Use useEffect to fetch initial articles on component mount
    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchArticles}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more articles to display</p>}
        >
            {articles.map((article, index) => (
                <ArticleItem key={index} data={article} />
            ))}
        </InfiniteScroll>
    );
}

export default Articles;
