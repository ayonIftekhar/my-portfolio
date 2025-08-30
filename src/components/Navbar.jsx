import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container">
        <div className="navbar-nav me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link 
            className="nav-link" 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about-me')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            About Me
          </Link>
                     <Link 
             className="nav-link" 
             to="/"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('education')?.scrollIntoView({ 
                 behavior: 'smooth' 
               });
             }}
           >
             Education
           </Link>
                     <Link 
             className="nav-link" 
             to="/"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('projects-works')?.scrollIntoView({ 
                 behavior: 'smooth' 
               });
             }}
           >
             Projects & Works
           </Link>
                          <Link
                  className="nav-link"
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  Skills
                </Link>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
