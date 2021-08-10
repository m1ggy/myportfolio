import React from 'react';
import './projects.css';
export default function Projects() {
  return (
    <div className='projectswrapper' id='projects'>
      <h1 data-aos='fade-down'>projects</h1>
      <div className='projectwrapper' data-aos='fade-left'>
        <a href='/' className='projectlink'>
          wedding invitation app
        </a>
        <p>invite guests using a beautiful web app. 🤵👰</p>
      </div>
      <div className='projectwrapper' data-aos='fade-right'>
        <a href='/' className='projectlink'>
          lspu crime report web app
        </a>
        <p>
          platform for reporting and monitoring crime reports in laguna. 👮‍♂️👮‍♀️
        </p>
      </div>
      <div className='projectwrapper' data-aos='fade-left'>
        <a href='/' className='projectlink'>
          bugTracker
        </a>
        <p>web application for tracking bugs in a project. 👩‍💻</p>
      </div>
      <div className='projectwrapper' data-aos='fade-right'>
        <a href='/' className='projectlink'>
          instant messaging app
        </a>
        <p>instant messaging app with authentication. 📧</p>
      </div>
    </div>
  );
}
