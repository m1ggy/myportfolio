import React from 'react';
import './links.css';
import imglinkedin from '../dist/images/imglinkedin.png';
import imggithub from '../dist/images/imggithub.png';
export default function Links() {
  return (
    <div className='linkswrapper' id='links'>
      <h1 data-aos='flip-down'>links</h1>
      <a
        href='http://www.github.com/m1ggy'
        style={{ textDecoration: 'none' }}
        data-aos='flip-down'
      >
        <div className='imgwrapper'>
          <img src={imggithub} alt='github' className='imgsizing' />
          <h2>github</h2>
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/miguel-buising-639734213/'
        style={{ textDecoration: 'none' }}
        data-aos='flip-down'
      >
        <div className='imgwrapper'>
          <img src={imglinkedin} alt='linkedin' className='imgsizing' />
          <h2>linkedin</h2>
        </div>
      </a>
    </div>
  );
}
