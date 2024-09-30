const Projects = () => {
    return (
      <section className="section" id="projects">
        <div className="top-header">
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          <div data-aos="zoom-in" className="project-box">
            <i className="uil uil-briefcase-alt"></i>
            <h3>Completed</h3>
            <label>15+ Finished Projects</label>
          </div>
          <div data-aos="zoom-in" className="project-box">
            <i className="uil uil-users-alt"></i>
            <h3>Clients</h3>
            <label>25+ Happy Clients</label>
          </div>
          <div data-aos="zoom-in" className="project-box">
            <i className="uil uil-award-alt"></i>
            <h3>Experience</h3>
            <label>29+ years of Experience</label>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  