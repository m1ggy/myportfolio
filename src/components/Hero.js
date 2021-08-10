import React, { useState } from 'react';
import './hero.css';
import me1 from '../dist/images/me1.jpg';
export default function Hero() {
  const [show, setShow] = useState(false);
  return (
    <div className='heroWrapper'>
      <div className='aligner'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={me1}
            alt='me'
            className='mugshot'
            style={
              show
                ? { animation: `slidein 1s forwards ease-out` }
                : { animation: `slideout .1s forwards ease-out` }
            }
          />
        </div>
        <div className='heroText'>
          <h1 style={{ fontSize: '400%', fontFamily: 'Mono' }}>
            hey, i'm{' '}
            <span onClick={() => setShow(!show)} className='name'>
              miguel!
            </span>
          </h1>
          <h3>web developer</h3>
        </div>
        <div className='nav'>
          <a className='navitem' href='#skills'>
            skills
          </a>
          <a className='navitem' href='#contact'>
            contact
          </a>
          <a className='navitem' href='#links'>
            links
          </a>
        </div>
      </div>
    </div>
  );
}