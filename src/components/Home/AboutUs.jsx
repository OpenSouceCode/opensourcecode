import React from 'react';

import styles from '../../scss/home.module.scss';

export default function AboutUs() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f7f7f7"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,218.7C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      <div className={styles['about-us-container']}>
        <div className={styles['about-left-col']}>
          <img alt="about-left-svg" src="/images/about-left-svg.svg" />
        </div>
        <div className={styles['about-right-col']}>
          <h1>
            About <u> Open Source Code </u>
          </h1>

          <p>
          The idea of open source excites you but not sure where to begin or which project to choose? 
          Often feel confused and uncomfortable while using GitHub, and can’t think of any available alternative? Well, 
          you have arrived at the correct place! 
          "Open Source Code" is an open source platform targeted solely for beginners to help them contribute to real life projects, 
          from developing new ideas and approaches, to exploring the world of open sourcing.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f7f7f7"
          fillOpacity="1"
          d="M0,192L48,165.3C96,139,192,85,288,64C384,43,480,53,576,85.3C672,117,768,171,864,186.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </div>
  );
}
