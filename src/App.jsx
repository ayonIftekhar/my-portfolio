import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ProjectsWorks from './components/ProjectsWorks';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <ProjectsWorks />
      <Skills />
    </div>
  );
}

export default App;
