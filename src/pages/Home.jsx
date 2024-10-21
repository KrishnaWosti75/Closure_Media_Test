import React from 'react';
import '../styles/Home.css';
import backgroundImage from '../assets/background.jpg'; // Import your background image

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="main-title">Closure Media</h1>
            <h2 className="sub-title">January 2025</h2>
            <p className="description">Your one-stop gateway to marketing, closing sales, and overall digital services.</p>
        </div>
    );
};

export default Home;
