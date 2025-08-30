import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container">
        <div className="navbar-nav me-auto">
          <button 
            className="nav-link btn btn-link text-decoration-none"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </button>
          <button 
            className="nav-link btn btn-link text-decoration-none"
            onClick={() => {
              document.getElementById('about-me')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            About Me
          </button>
          <button 
            className="nav-link btn btn-link text-decoration-none"
            onClick={() => {
              document.getElementById('education')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Education
          </button>
          <button 
            className="nav-link btn btn-link text-decoration-none"
            onClick={() => {
              document.getElementById('projects-works')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Projects & Works
          </button>
          <button
            className="nav-link btn btn-link text-decoration-none"
            onClick={() => {
              document.getElementById('skills')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Skills
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
