import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import ProjectsWorks from '../components/ProjectsWorks';
import Skills from '../components/Skills';

function Home() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Hero />
      <AboutMe />
      <Education />
      <ProjectsWorks />
      <Skills />
    </div>
  );
}

export default Home;
