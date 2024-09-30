
const About = () => {
    return (
      <section className="section" id="about">
        <div className="top-header">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div data-aos="fade-right" className="col">
            <div className="about-info">
              <h3>My introduction</h3>
              <p>A passionate educator with a B.E. in Computer Science and Engineering and a Member of Indian Society for Technical Education (MISTE).<br/> With 29 years of teaching experience, I have served as a Selection Grade Lecturer and Head of Department (HOD), fostering student growth and driving academic excellence.</p>
              <button className="btn">
                <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Click here to see my Projects
                </a>
            </button>            
            </div>
          </div>
          <div data-aos="fade-left" className="col">
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div className="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>Vue</span>
                        <span>React</span>
                        <span>Angular</span>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div className="skills-list">
                        <span>PHP</span>
                        <span>JAVA</span>
                        <span>Python</span>
                        <span>C++</span>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div className="skills-list">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>
          </div>
       </section>
    );
  };
  
  export default About;
  