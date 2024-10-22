import React, { useState } from 'react';
import { init, send } from 'emailjs-com'; // Import EmailJS
import './MessageModal.css'; // Import CSS styles

// Initialize EmailJS
init('vSFcHm8i4Q3l35FiI'); // Replace with your EmailJS user ID

const MessageModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the email parameters
        const templateParams = {
            email: email,
            message: message,
        };

        // Send the email using EmailJS
        send('service_yzn1v59', 'template_5odibwr', templateParams)
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                setIsSubmitted(true); // Set submission status to true
                // Reset form fields after submission
                setEmail('');
                setMessage('');

                // Close the modal after a short delay
                setTimeout(() => {
                    onClose();
                }, 2000); // Close after 2 seconds
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    if (!isOpen) return null; // Do not render if the modal is closed

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                {isSubmitted ? (
                    <h1 className="submission-message">Your message has been delivered!</h1>
                ) : (
                    <>
                        <h1 className="modal-title">Send Message to Closure Media</h1>
                        <form onSubmit={handleSubmit} className="message-form">
                            <label className="message-label">
                                <span>Email:</span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="message-input"
                                />
                            </label>
                            <label className="message-label">
                                <span>Message:</span>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="message-textarea"
                                />
                            </label>
                            <button type="submit" className="send-button">Send Message</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default MessageModal;
