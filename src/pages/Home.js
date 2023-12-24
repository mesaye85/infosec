// Home.js
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as per your project structure
import Articles from '../components/Articles';
import MostViewed from '../components/MostViewed';
import Footer from '../components/Footer';
import './Home.css'; // Make sure the path to your CSS file is correct

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="main-content">
                <Articles />
                <MostViewed />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
