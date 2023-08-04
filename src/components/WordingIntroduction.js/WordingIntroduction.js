import './WordingIntroduction.css';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export default function WordingIntroduction() {

    const typingRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: ["Frontend Developer", "YouTuber + Spotify Verified artist", "Web Developer", "Musician"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      };
  
      const typed = new Typed(typingRef.current, options);
  
      return () => {
        // Clean up the Typed instance on unmounting
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="typing-container">
          <div className="home-content">
              <h3>Hello, It's Me</h3>
              <h1>Wathsala Yahamapath</h1>
              <h3>And I'm a <span className="text" ref={typingRef}></span></h3>
              <p>I'm a web designer with extensive experience for over 3 year.
                  <br/>expertise is to create and website design, Frontend design, and many more.... 
              </p>
              <div className="home-sci">
                  <a href="#"><i class='bx bxl-facebook'></i></a>
                  <a href="#"><i class='bx bxl-instagram' ></i></a>
                  <a href="#"><i class='bx bxl-whatsapp' ></i></a>
                  <a href="#"><i class='bx bxl-tiktok' ></i></a>
              </div>
              <a href="#" className="btn-box">Further Consultation</a>
          </div>
        
      </div>
    );
  };
  
 

