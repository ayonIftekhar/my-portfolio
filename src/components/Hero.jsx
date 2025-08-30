import React from 'react';
import dpImage from '../assets/dp.jpg';

function Hero() {
  return (
         <section className="container py-5" style={{minHeight: '100vh'}}>
      <div className="row align-items-center min-vh-75">
        {/* Left Column - Text Content */}
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">
            <i className="bi bi-person-circle me-3 text-success"></i>
            Iftekhar Sanwar Talukdar
          </h1>
                     <h4 className="text-success mb-3">
             <i className="bi bi-mortarboard me-2"></i>
             Computer Science & Engineering Student 
           </h4>
          <h5 className="text-muted mb-4">
            <i className="bi bi-code-slash me-2"></i>
            Full-Stack Developer
          </h5>
          <p className="text-muted mb-3 fs-5">
            <i className="bi bi-gear-wide-connected me-2"></i>
            <strong>Web Development | Java | Python | Machine Learning</strong>
          </p>
          <p className="text-muted mb-5 fs-5">
            <i className="bi bi-stack me-2"></i>
            <strong>Spring Boot • React • Bootstrap • Cloud • Database</strong>
          </p>
                     <button 
             className="btn btn-success btn-lg px-5 py-3 shadow-sm"
             onClick={() => {
               document.getElementById('about-me')?.scrollIntoView({ 
                 behavior: 'smooth' 
               });
             }}
           >
             <i className="bi bi-rocket-takeoff me-2"></i>
             Let's get started 
           </button>
        </div>

        {/* Right Column - Profile Image */}
        <div className="col-lg-6 text-center">
          <div className="position-relative d-inline-block">
            <div
              className="rounded-circle overflow-hidden"
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "#6c757d",
              }}
            >
              <img
                src={dpImage}
                alt="Profile"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-4">
            <div className="row g-3 justify-content-center">
              <div className="col-12">
                <a 
                  href="https://www.linkedin.com/in/iftekhar-ayon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm me-2"
                >
                  <i className="bi bi-linkedin me-2"></i>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/ayonIftekhar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm me-2"
                >
                  <i className="bi bi-github me-2"></i>
                  GitHub
                </a>
              </div>
              <div className="col-12">
                <a 
                  href="mailto:ayon21.official@gmail.com"
                  className="btn btn-outline-success btn-sm me-2"
                >
                  <i className="bi bi-envelope me-2"></i>
                  ayon21.official@gmail.com
                </a>
              </div>
              <div className="col-12">
                <a 
                  href="tel:+8801793684454"
                  className="btn btn-outline-success btn-sm"
                >
                  <i className="bi bi-telephone me-2"></i>
                  +880 1793684454
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
