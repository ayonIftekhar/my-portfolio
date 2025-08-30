import React from 'react';

function ProjectsWorks() {
  return (
    <section id="projects-works" className="py-5 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 fw-bold text-light mb-5 text-center">
              <i className="bi bi-folder2-open me-3 text-success"></i>
              Projects & Works
            </h2>
            
            <div className="row g-4">
              {/* BusTopia */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-bus-front text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">BusTopia</h5>
                    </div>
                    <p className="card-text text-muted mb-3">
                      Full-stack bus ticketing and management system with real-time seat booking, JWT authentication, and an admin dashboard. Features demand-based scheduling analytics and an AI chatbot assistant.
                    </p>
                    <div className="mb-3">
                      <small className="text-success fw-semibold">Tech Stack:</small>
                      <p className="text-muted small mb-1">Spring Boot, ReactJS, PostgreSQL, Redis, DevOps, Bootstrap, Azure VM, S3 Bucket</p>
                    </div>
                    <a href="https://github.com/ayonIftekhar/Bustopia" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-github me-2"></i>View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Echo Chatroom */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-chat-dots text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">Echo Chatroom</h5>
                      <span className="badge bg-warning text-dark ms-2">In Progress</span>
                    </div>
                    <p className="card-text text-muted mb-3">
                      Real-time chat application supporting multiple rooms, WebSocket-based messaging, user authentication, and persistent chat history in MongoDB.
                    </p>
                    <div className="mb-3">
                      <small className="text-success fw-semibold">Tech Stack:</small>
                      <p className="text-muted small mb-1">Spring Boot, ReactJS, WebSockets, MySQL, Bootstrap</p>
                    </div>
                    <a href="https://github.com/ayonIftekhar/Echo-ChatRoom" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-github me-2"></i>View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* OrderXpress */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-shop text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">OrderXpress</h5>
                    </div>
                    <p className="card-text text-muted mb-3">
                      Online restaurant management platform enabling customers to order food online with secure authentication and real-time order tracking. Admins can manage menus and orders.
                    </p>
                    <div className="mb-3">
                      <small className="text-success fw-semibold">Tech Stack:</small>
                      <p className="text-muted small mb-1">Spring Boot, ReactJS, Bootstrap, MySQL, S3 Bucket</p>
                    </div>
                    <a href="https://github.com/ayonIftekhar/Restaurant" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-github me-2"></i>View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* CineSphere */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-camera-video text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">CineSphere</h5>
                    </div>
                    <p className="card-text text-muted mb-3">
                      JavaFX desktop application for managing movie production houses, including crew, equipment, and filming schedules. Built with an MVC architecture and structured persistence.
                    </p>
                    <div className="mb-3">
                      <small className="text-success fw-semibold">Tech Stack:</small>
                      <p className="text-muted small mb-1">Java, JavaFX , Scene Builder , CSS</p>
                    </div>
                    <a href="https://github.com/ayonIftekhar/MovieProductionHousesManager" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-github me-2"></i>View on GitHub
                    </a>
                  </div>
                </div>
              </div>

                             {/* University Admission Automation */}
               <div className="col-lg-6">
                 <div className="card bg-dark border border-secondary h-100">
                   <div className="card-body">
                     <div className="d-flex align-items-center mb-3">
                       <i className="bi bi-mortarboard text-success fs-3 me-3"></i>
                       <h5 className="card-title text-light mb-0">University Admission Automation</h5>
                     </div>
                     <p className="card-text text-muted mb-3">
                       Node.js web application to automate university admission workflows, including form submissions, applicant data handling, and evaluation support.
                     </p>
                     <div className="mb-3">
                       <small className="text-success fw-semibold">Tech Stack:</small>
                       <p className="text-muted small mb-1">Node.js, Express, Oracle SQL</p>
                     </div>
                     <a href="https://github.com/ayonIftekhar/UniversityAdmissionAutomation" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                       <i className="bi bi-github me-2"></i>View on GitHub
                     </a>
                   </div>
                 </div>
               </div>

               {/* Protein Attribute Analysis */}
               <div className="col-lg-6">
                 <div className="card bg-dark border border-secondary h-100">
                   <div className="card-body">
                     <div className="d-flex align-items-center mb-3">
                       <i className="bi bi-dna text-success fs-3 me-3"></i>
                       <i className="bi bi-search text-success fs-3 me-2"></i>
                       <h5 className="card-title text-light mb-0">Protein Attribute Analysis</h5>
                       <span className="badge bg-warning text-dark ms-2">Thesis</span>
                       <span className="badge bg-info text-dark ms-2">In Progress</span>
                     </div>
                     <p className="card-text text-muted mb-3">
                       Undergraduate research project in bioinformatics focusing on analyzing protein attributes using ML techniques. Developing predictive models for mutation impact, stability, and functionality using protein sequence and structural features.
                     </p>
                     <div className="mb-3">
                       <small className="text-success fw-semibold">Tech Stack:</small>
                       <p className="text-muted small mb-1">Python, scikit-learn, PyTorch, NumPy, Pandas, BioPython</p>
                     </div>
                     <button className="btn btn-outline-secondary btn-sm" disabled>
                       <i className="bi bi-github me-2"></i>Coming Soon
                     </button>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsWorks;
