import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import SignInModal from './MessageModal'; // Import the modal component

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isModalOpen, setModalOpen] = useState(false); // Modal state

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setModalOpen(true);
        setMenuOpen(false); // Close menu if open
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="navbar">
                <h1 className="logo">Closure Media</h1>
                {isMobile ? (
                    <>
                        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <FaTimes className="close-icon" onClick={toggleMenu} />
                            <ul>
                                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                                <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                                <li><a onClick={openModal}>Message</a></li> {/* Open modal */}
                            </ul>
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </>
                ) : (
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><a onClick={openModal}>Message</a></li> {/* Open modal */}
                        </ul>
                    </div>
                )}
            </nav>

            {/* Render the modal */}
            <SignInModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Navbar;
