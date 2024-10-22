// src/components/ServiceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ServiceDetail.css'; // Create this CSS file for styling

const ServiceDetail = () => {
    const { serviceId } = useParams();

    // Mock data for services and team members
    const servicesData = {
        webDevelopment: {
            title: "Web Development",
            description: "Our web development services are tailored to your needs.",
            teamMembers: [
                { name: "Alice", role: "Frontend Developer", calendlyLink: "https://calendly.com/alice" },
                { name: "Bob", role: "Backend Developer", calendlyLink: "https://calendly.com/bob" },
            ],
        },
        // Add more services as needed
    };

    const service = servicesData[serviceId];

    return (
        <div className="service-detail">
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {service.teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <a href={member.calendlyLink} target="_blank" rel="noopener noreferrer" className="hire-button">
                            Hire {member.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDetail;
