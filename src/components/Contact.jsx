import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression for alphabets only
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      setNameError('Please enter a valid name (only alphabets and spaces allowed).');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Process feedback here (e.g., send to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');

    // Set form submitted status to true
    setSubmitted(true);
  };


  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>
      {!submitted ? (
        <form className='form' onSubmit={handleSubmit}>
          <p> Have a question , feedback or problem? We'd love to hear from you! Write message in below to get in touch. </p>
          <div>
            <label className='label'>Name: </label>
            <input
              className='input'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>
          <div>
            <label className='label'>Email: </label>
            <input
              className='input'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div>
            <label className='label'>Message </label>
            <textarea
              className='input'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className='contact-submit' type="submit">Submit</button>
        </form>
      ) : (
        <div className='message'>
          <p>Thank you for your message, We have received your request.</p>
        </div>
      )}

      {/* Button to navigate back */}
      <button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page</button>
    </div>
  );
};


export default Contact;
