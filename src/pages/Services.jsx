import React from 'react';
import '../styles/Services.css';
import backgroundImage from '../assets/background.jpg'; // Import your background image
// import webDevelopmentImage from '../assets/web-development.jpg'; // Example image for Web Development
// import seoImage from '../assets/seo.jpg'; // Example image for SEO Optimization
// import digitalMarketingImage from '../assets/digital-marketing.jpg'; // Example image for Digital Marketing
// import brandStrategyImage from '../assets/brand-strategy.jpg'; // Example image for Brand Strategy
// import graphicDesignImage from '../assets/graphic-design.jpg'; // Example image for Graphic Design
// import contentCreationImage from '../assets/content-creation.jpg'; // Example image for Content Creation
// import socialMediaManagementImage from '../assets/social-media-management.jpg'; // Example image for Social Media Management
// import emailMarketingImage from '../assets/email-marketing.jpg'; // Example image for Email Marketing
// import analyticsImage from '../assets/analytics.jpg'; // Example image for Analytics
// import appDevelopmentImage from '../assets/app-development.jpg'; // Example image for App Development

const servicesData = [
    {
        title: 'Web Development',
        // image: webDevelopmentImage,
        description: 'We build responsive and engaging websites tailored to your business needs, ensuring a seamless user experience across all devices.'
    },
    {
        title: 'SEO Optimization',
        // image: seoImage,
        description: 'Our SEO strategies will enhance your online visibility and drive organic traffic to your website, helping you reach your target audience effectively.'
    },
    {
        title: 'Digital Marketing',
        // image: digitalMarketingImage,
        description: 'We create data-driven digital marketing campaigns that engage your audience and boost your brand presence on various platforms.'
    },
    {
        title: 'Brand Strategy',
        // image: brandStrategyImage,
        description: 'Our team crafts unique brand strategies that define your identity, mission, and values, helping you connect with your audience authentically.'
    },
    {
        title: 'Graphic Design',
        // image: graphicDesignImage,
        description: 'Our creative graphic design services help you stand out with visually compelling and professional graphics tailored to your brand.'
    },
    {
        title: 'Content Creation',
        // image: contentCreationImage,
        description: 'We produce high-quality content that resonates with your audience and showcases your brand’s voice across various platforms.'
    },
    {
        title: 'Social Media Management',
        // image: socialMediaManagementImage,
        description: 'We manage your social media presence, ensuring consistent engagement and effective communication with your audience.'
    },
    {
        title: 'Email Marketing',
        // image: emailMarketingImage,
        description: 'Our targeted email marketing campaigns drive customer engagement and retention, keeping your brand top-of-mind.'
    },
    {
        title: 'Analytics and Reporting',
        // image: analyticsImage,
        description: 'We provide insightful analytics and reporting services to help you understand your audience and optimize your strategies effectively.'
    },
    {
        title: 'App Development',
        // image: appDevelopmentImage,
        description: 'We develop intuitive and functional mobile applications that provide value to your customers and enhance user experience.'
    }
];

const Services = () => {
    return (
        <div className="services" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="services-title glowing-text">What We Do Best</h1>
            <p className="services-intro">
                At our agency, we offer a comprehensive range of services designed to elevate your brand and drive business growth. Our team of experts works diligently to provide tailored solutions that meet your specific needs and objectives.
            </p>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div className="service-box" key={index}>
                        <div className="service-image-container">
                            <img src={service.image} alt={service.title} className="service-image" />
                        </div>
                        <h2 className="service-title glowing-text">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
