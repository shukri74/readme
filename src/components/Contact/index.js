import React from 'react';
import './ContactUs.css';
import bookImage1 from '../../assets/contact-book-1.png';
import bookImage2 from '../../assets/contact-book-2.png';
import bookImage3 from '../../assets/contact-book-3.png';
import bookImage4 from '../../assets/contact-book-4.png';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, we'd love to hear from you. You can reach us through our individual GitHub accounts:</p>
      <div className='github-icons'>
        <a href='https://github.com/github-account-1' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://github.com/github-account-2' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://github.com/github-account-3' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://github.com/github-account-4' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
      </div>
      <p>You can also send us an email at <a href='mailto:info@yourcompany.com'>info@yourcompany.com</a>.</p>
      <div className='book-images'>
        <img src={bookImage1} alt='Book 1' />
        <img src={bookImage2} alt='Book 2' />
        <img src={bookImage3} alt='Book 3' />
        <img src={bookImage4} alt='Book 4' />
      </div>
    </div>
  );
};

export default ContactUs;
