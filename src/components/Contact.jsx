const Contact = () => {
    return (
      <section className="section" id="contact">
        <div className="top-header">
          <h1>Get in touch</h1>
          <span>Do you have a project in your mind? Contact me here</span>
        </div>
        <div className="row">
          <div data-aos="fade-right" className="col">
            <div className="contact-info">
              <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
              <p><i className="uil uil-envelope"></i> Email: parashuramtalwar@gmail.com</p>
              <p><i className="uil uil-phone"></i> Ph No: +91 8899889988</p>
            </div>
          </div>
          <div data-aos="fade-left" className="col">
            <div className="form-control">
              <input type="text" className="input-field" placeholder="Name" />
              <input type="text" className="input-field" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button className="btn">Send <i className="uil uil-message"></i></button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  