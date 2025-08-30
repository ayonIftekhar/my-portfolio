import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-5 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 fw-bold text-light mb-5 text-center">
              <i className="bi bi-gear-wide-connected me-3 text-success"></i>
              Skills & Technologies
            </h2>

            <div className="row g-4">
              {/* Programming Languages */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-code-slash text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">
                        Programming Languages
                      </h5>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-filetype-java text-success me-2"></i>
                          <span className="text-light">Java</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-filetype-py text-success me-2"></i>
                          <span className="text-light">Python</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-filetype-js text-success me-2"></i>
                          <span className="text-light">JavaScript (ES6+)</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-code-slash text-success me-2"></i>
                          <span className="text-light">C++</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-database text-success me-2"></i>
                          <span className="text-light">SQL</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-code-slash text-success me-2"></i>
                          <span className="text-light">Assembly</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-stack text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">
                        Frameworks & Libraries
                      </h5>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-gear text-success me-2"></i>
                          <span className="text-light">Spring Boot 3</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-bootstrap text-success me-2"></i>
                          <span className="text-light">React.js</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-bootstrap text-success me-2"></i>
                          <span className="text-light">Bootstrap</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-bootstrap text-success me-2"></i>
                          <span className="text-light">Node.js / Express</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-window text-success me-2"></i>
                          <span className="text-light">JavaFX</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-graph-up text-success me-2"></i>
                          <span className="text-light">scikit-learn</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-graph-up text-success me-2"></i>
                          <span className="text-light">PyTorch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-database text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">
                        Databases & Data Tools
                      </h5>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-database text-success me-2"></i>
                          <span className="text-light">MySQL</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-database text-success me-2"></i>
                          <span className="text-light">PostgreSQL</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-database text-success me-2"></i>
                          <span className="text-light">MongoDB</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-database text-success me-2"></i>
                          <span className="text-light">Redis</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-database text-success me-2"></i>
                          <span className="text-light">SQLite</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-graph-up text-success me-2"></i>
                          <span className="text-light">Pandas / NumPy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-tools text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">
                        Tools & Technologies
                      </h5>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-git text-success me-2"></i>
                          <span className="text-light">Git / GitHub</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-gear text-success me-2"></i>
                          <span className="text-light">GitHub Actions</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-box text-success me-2"></i>
                          <span className="text-light">Docker</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-cloud text-success me-2"></i>
                          <span className="text-light">Render / Vercel</span>
                        </div>
                      </div>
                                             <div className="col-6">
                         <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                           <i className="bi bi-cloud text-success me-2"></i>
                           <span className="text-light">Azure VM</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                           <i className="bi bi-cloud text-success me-2"></i>
                           <span className="text-light">Amazon S3</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concepts & Practices */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-lightbulb text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">
                        Concepts & Practices
                      </h5>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-diagram-3 text-success me-2"></i>
                          <span className="text-light">OOP</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-arrow-left-right text-success me-2"></i>
                          <span className="text-light">REST APIs</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-shield-lock text-success me-2"></i>
                          <span className="text-light">JWT / OAuth</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-gear text-success me-2"></i>
                          <span className="text-light">DevOps / CI/CD</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-people text-success me-2"></i>
                          <span className="text-light">Agile / Scrum</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-search text-success me-2"></i>
                          <span className="text-light">Research Methods</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-person-check text-success fs-3 me-3"></i>
                      <h5 className="card-title text-light mb-0">
                        Soft Skills
                      </h5>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-lightbulb text-success me-2"></i>
                          <span className="text-light">Problem Solving</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-people text-success me-2"></i>
                          <span className="text-light">Team Collaboration</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-file-text text-success me-2"></i>
                          <span className="text-light">Technical Writing</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                          <i className="bi bi-lightning text-success me-2"></i>
                          <span className="text-light">Quick Learner</span>
                        </div>
                      </div>
                                             <div className="col-6">
                         <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                           <i className="bi bi-graph-up text-success me-2"></i>
                           <span className="text-light">
                             Analytical Thinking
                           </span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="d-flex align-items-center p-2 bg-dark border border-secondary rounded">
                           <i className="bi bi-chat-dots text-success me-2"></i>
                           <span className="text-light">Communication</span>
                         </div>
                       </div>
                    </div>
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

export default Skills;
