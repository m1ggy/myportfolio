import React from 'react';
import './skills.css';
import imghtml from '../dist/images/imghtml.png';
import imgcss from '../dist/images/imgcss.png';
import imgjs from '../dist/images/imgjs.png';
import imgreact from '../dist/images/imgreact.png';
import imgredux from '../dist/images/imgredux.png';
import imgfirebase from '../dist/images/imgfirebase.png';
export default function Skills() {
  return (
    <div className='skillswrapper' id='skills'>
      <div className='skillsHeader' data-aos='fade-down'>
        <h1>skills</h1>
      </div>
      <div data-aos='fade-left'>
        <div className='imgwrapper'>
          <img src={imghtml} alt='html' className='imgsizing' />
          <h3>html</h3>
        </div>
      </div>
      <div data-aos='fade-right'>
        <div className='imgwrapper'>
          <h3>css</h3>
          <img src={imgcss} alt='css' className='imgsizing' />
        </div>
      </div>
      <div data-aos='fade-left'>
        <div className='imgwrapper'>
          <img
            src={imgjs}
            alt='css'
            className='imgsizing'
            style={{ backgroundColor: 'yellow' }}
          />
          <h3>javascript </h3>{' '}
        </div>
      </div>
      <div data-aos='fade-right'>
        <div className='imgwrapper'>
          <h3>react</h3>
          <img src={imgreact} alt='css' className='imgsizing' />
        </div>
      </div>
      <div data-aos='fade-left'>
        <div className='imgwrapper'>
          <img src={imgredux} alt='css' className='imgsizing' />
          <h3>redux toolkit </h3>{' '}
        </div>
      </div>
      <div data-aos='fade-right'>
        <div className='imgwrapper'>
          <h3>firebase</h3>
          <img src={imgfirebase} alt='css' className='imgsizing' />
        </div>
      </div>
    </div>
  );
}
