import React, { useState } from 'react';
import './hero.css';
import me1 from '../dist/images/me1.jpg';
export default function Hero() {
  const [show, setShow] = useState(true);
  return (
    <div className='heroWrapper' id='top'>
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
          <h2 style={{ fontFamily: 'Mono' }}>hey, i'm </h2>
          <div className='nameWrapper'>
            <h1
              onClick={() => setShow(!show)}
              className='name'
              style={{ fontFamily: 'Mono' }}
            >
              miguel!
            </h1>
          </div>
          <h2>web developer</h2>
        </div>
        <div className='nav'>
          <a className='navitem' href='#skills'>
            skills
          </a>
          <a className='navitem' href='#contact'>
            contact
          </a>
          <a className='navitem' href='#projects'>
            projects
          </a>
          <a className='navitem' href='#links'>
            links
          </a>
        </div>
      </div>
    </div>
  );
}
