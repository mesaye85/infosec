import React from 'react';
// Import other necessary components or assets

// ArticleItem component to display an individual article
function ArticleItem({ data }) {
    // Destructure the necessary article properties from data
    const { title, summary, author, publishedAt } = data;

    return (
        <div className="article-item">
            <h3>{title}</h3>
            <p>{summary}</p> {/* Replace 'summary' with actual content if needed */}
            <div className="article-meta">
                <span>By {author}</span> {/* Display author name */}
                <span>Published on {publishedAt}</span> {/* Display publication date */}
            </div>
            {/* Additional article details or actions (like 'Read More' button) */}
        </div>
    );
}

export default ArticleItem;
