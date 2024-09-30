import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            ?.classList.add('active-link');
        } else {
          document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            ?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">PDT.</p>
        
      </div>
      <div className={`nav-menu ${menuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
        <li className="nav_list">
          <a href="#home" className="nav-link">Home</a>
          <div className="circle"></div>
        </li>
        <li className="nav_list">
          <a href="#about" className="nav-link">About</a>
          <div className="circle"></div>
        </li>
        <li className="nav_list">
          <a href="#projects" className="nav-link">Projects</a>
          <div className="circle"></div>
        </li>
        <li className="nav_list">
          <a href="#contact" className="nav-link">Contact</a>
          <div className="circle"></div>
        </li>
        </ul>
      </div>
    
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Header;
