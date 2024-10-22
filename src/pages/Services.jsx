import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import '../styles/Services.css';
import backgroundImage from '../assets/background.jpg'; // Import your background image
import webDevelopmentImage from '../assets/web-development.jpg'; // Example image for Web Development
import seoImage from '../assets/seo.jpg'; // Example image for SEO Optimization
import digitalMarketingImage from '../assets/digital-marketing.jpg'; // Example image for Digital Marketing
import brandStrategyImage from '../assets/brand-strategy.jpg'; // Example image for Brand Strategy
import graphicDesignImage from '../assets/graphic-design.jpg'; // Example image for Graphic Design
import contentCreationImage from '../assets/content-creation.jpg'; // Example image for Content Creation
import socialMediaManagementImage from '../assets/social-media-management.jpg'; // Example image for Social Media Management
import emailMarketingImage from '../assets/email-marketing.jpg'; // Example image for Email Marketing
import analyticsImage from '../assets/analytics.jpg'; // Example image for Analytics
import appDevelopmentImage from '../assets/app-development.jpg'; // Example image for App Development


const servicesData = [
    {
        title: 'Web Development',
        image: webDevelopmentImage,
        path: 'service/web-development', // Add a path for redirection
    },
    {
        title: 'SEO Optimization',
        image: seoImage,
        path: 'services/seo-optimization',
    },
    {
        title: 'Digital Marketing',
        image: digitalMarketingImage,
        path: '/digital-marketing',
    },
    {
        title: 'Brand Strategy',
        image: brandStrategyImage,
        path: '/brand-strategy',
    },
    {
        title: 'Graphic Design',
        image: graphicDesignImage,
        path: '/graphic-design',
    },
    {
        title: 'Content Creation',
        image: contentCreationImage,
        path: '/content-creation',
    },
    {
        title: 'Social Media Management',
        image: socialMediaManagementImage,
        path: '/social-media-management',
    },
    {
        title: 'Email Marketing',
        image: emailMarketingImage,
        path: '/email-marketing',
    },
    {
        title: 'Analytics and Reporting',
        image: analyticsImage,
        path: '/analytics',
    },
    {
        title: 'App Development',
        image: appDevelopmentImage,
        path: '/app-development',
    },
];

const Services = () => {
    return (
        <div className="services" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="services-title">Our Services:</h1>
            <p className="services-intro">
                Our team of experts works diligently to provide tailored solutions that meet your specific needs and objectives in these fields:
            </p>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div className="service-box" key={index}>
                        <Link to={service.path} className="service-image-container">
                            <img src={service.image} alt={service.title} className="service-image" />
                        </Link>
                        <Link to={service.path} className="service-title">
                            {service.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
