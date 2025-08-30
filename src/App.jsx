import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Testimonials from './pages/Testimonials';
import RecentWork from './pages/RecentWork';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-dark text-light min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
