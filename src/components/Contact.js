import React from 'react';
import './contact.css';
import illustration from '../dist/images/illustration.png';
export default function Contact() {
  return (
    <div className='contactwrapper' id='contact'>
      <div className='contactText'>
        <h1 data-aos='fade-down'>Contact</h1>
        <h3 data-aos='fade-up-right'>Need a website built? I gotchu 💯 🤝.</h3>
        <h2 data-aos='fade-up-left' style={{ fontSize: '1vw' }}>
          Send me an email at{' '}
          <a href='mailto:miguel.buising1@gmail.com'>
            miguel.buising1@gmail.com
          </a>
        </h2>
      </div>
      <div data-aos='fade-up'>
        <img src={illustration} alt='web development' className='imgSizing' />
      </div>
    </div>
  );
}
