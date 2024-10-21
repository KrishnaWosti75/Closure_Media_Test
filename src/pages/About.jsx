import React, { useState } from 'react';
import '../styles/About.css';
import backgroundImage from '../assets/background.jpg'; // Import your background image
import founderImage from '../assets/founder.jpeg'; // Import your founder image

const About = () => {
    const [showContent, setShowContent] = useState(false); // State to manage visibility

    const handleMouseEnter = () => {
        setShowContent(true); // Show content on hover
    };

    const handleMouseLeave = () => {
        setShowContent(false); // Hide content when not hovered
    };

    return (
        <div className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="brand-story">
                <h2 className="brand-title">Our Brand Story</h2>
                <p className="brand-description">
                    At our agency, we harness the transformative power of creativity. Our journey began with a bold vision: to challenge the status quo and craft exceptional experiences that leave a lasting impact. We believe that every idea, no matter how humble, can spark significant change.
                </p>
                <p className="brand-description">
                    With a dedicated team of passionate innovators and storytellers, we create narratives that resonate and designs that inspire. We’re not just in the business of building brands; we’re here to foster movements, ignite meaningful conversations, and drive impactful change. Join us as we turn aspirations into achievements and elevate your brand to new heights.
                </p>
                {/* </div>
            <h2 className="contributors-title">Meet Our Contributors:</h2>
            <div
                className="founder-section"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="founder-image-container">
                    <img src={founderImage} alt="Krishna Wosti" className="founder-image" />
                </div>
                {showContent && (
                    <div className="founder-text">
                        <h3 className="founder-title">Krishna Wosti</h3>
                        <h4 className="founder-role">Founder & Chief Marketer</h4>
                        <p className="founder-message">
                            I embarked on this journey at the age of 18, fueled by a vision to transform nothing into something—and ultimately into everything. My passion for creativity and innovation drives me to inspire others and create impactful solutions.
                        </p>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default About;
