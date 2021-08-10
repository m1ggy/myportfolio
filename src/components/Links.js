import React from 'react';
import './links.css';
import imglinkedin from '../dist/images/imglinkedin.png';
import imggithub from '../dist/images/imggithub.png';
export default function Links() {
  return (
    <div className='linkswrapper' id='links'>
      <h1>links</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <a
          href='http://www.github.com/m1ggy'
          style={{ textDecoration: 'none' }}
        >
          <div className='imgwrapper'>
            <img src={imggithub} alt='github' className='imgsizing' />
            <h5>github</h5>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/miguel-buising-639734213/'
          style={{ textDecoration: 'none' }}
        >
          <div className='imgwrapper'>
            <img src={imglinkedin} alt='linkedin' className='imgsizing' />
            <h5>linkedin</h5>
          </div>
        </a>
      </div>
    </div>
  );
}
