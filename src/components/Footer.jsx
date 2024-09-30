const Footer = () => {
    return (
      <footer>
        <div className="top-footer">
          <p>Pasharuram D Talawar.</p>
        </div>
        <div className="middle-footer">
          <ul className="footer-menu">
            <li className="footer-menu_list"><a href="#home">Home</a></li>
            <li className="footer-menu_list"><a href="#about">About</a></li>
            <li className="footer-menu_list"><a href="#projects">Projects</a></li>
            <li className="footer-menu_list"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="social_icons footer-social_icons">
            <div class="icon"><i class="uil uil-instagram"></i></div>
            <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
            <div class="icon"><i class="uil uil-facebook-f"></i></div>
            <div class="icon"><i class="uil uil-github-alt"></i></div>
            <div class="icon"><i class="uil uil-twitter-alt"></i></div>
        </div>
        
        <div className="bottom-footer">
          <p>Copyright &copy; <a href="#home" style={{ textDecoration: 'none' }}>P D Talawar</a>- All rights reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  