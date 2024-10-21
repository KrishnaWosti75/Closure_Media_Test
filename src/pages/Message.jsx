import React, { useState } from 'react';
import '../styles/Message.css';

const Message = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the email and message
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset form fields after submission
        setEmail('');
        setMessage('');
    };

    return (
        <div className="message">
            <h1>Send Message to Closure Media</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="send-button">Send Message</button>
            </form>
        </div>
    );
};

export default Message;
