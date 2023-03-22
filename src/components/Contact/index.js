import React from 'react';
import '../Contact/contact.css';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, we'd love to hear from you. You can reach us through our individual GitHub accounts:</p>
      <div className='github-icons'>
        <a href='https://github.com/eniolaxo' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://github.com/shukri74' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://github.com/Haroon-dev13' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://github.com/Shortms' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
      </div>
      <p>You can also send us an email at <a href='mailto:info@yourcompany.com'>ReadMe@gmail.com</a>.</p>
    </div>
  );
};

export default ContactUs;
