import img from '../assets/hodImage.png';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';


const Featured = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["Selection Grade Lecturer", "HOD of Computer Science Department"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    return () => typed.destroy();
  }, []);


  return (
    <section className="featured-box" id="home">
      <div data-aos="fade-down" className="featured-text">
        <div className="featured-text-card">
          <span>Parashuram D Talawar</span>
        </div>
        <div className="featured-name">
          <p>I'm <span ref={typedTextRef}></span></p>
        </div>
        <div className="featured-text-info">
          <p>A dedicated educator with 29 years of teaching experience, including roles as a Selection Grade Lecturer and Head of Department, focused on fostering student growth and academic excellence.</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
        </div>
        <div class="social_icons">
            <div class="icon"><i class="uil uil-instagram"></i></div>
            <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
            <div class="icon"><i class="uil uil-facebook-f"></i></div>
            <div class="icon"><i class="uil uil-github-alt"></i></div>
            <div class="icon"><i class="uil uil-twitter-alt"></i></div>
        </div>
          </div>
          <div data-aos="fade-down" class="featured-image">
            <div class="image">
                <img src={img} alt="avatar"/>
            </div>
          </div>
          
    </section>
  );
};

export default Featured;
