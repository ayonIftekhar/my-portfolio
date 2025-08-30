import React from 'react';
import dpImage from '../assets/dp.jpg';

function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-5 bg-dark"
      style={{ marginTop: "2rem" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Profile Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="position-relative d-inline-block">
              <div
                className="rounded-circle overflow-hidden shadow-lg"
                style={{
                  width: "350px",
                  height: "350px",
                  backgroundColor: "#6c757d",
                }}
              >
                <img
                  src={dpImage}
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              {/* Decorative elements */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-success border-3 opacity-25"
                style={{ transform: "translate(-10px, -10px)" }}
              ></div>
            </div>
          </div>

          {/* Right Column - About Me Content */}
          <div className="col-lg-7">
            <div className="ps-lg-4">
              <h2 className="display-5 fw-bold text-light mb-4">
                <i className="bi bi-person-lines-fill me-3 text-success"></i>
                About Me
              </h2>

              <div className="mb-4">
                <p className="lead text-muted lh-base">
                  I am a Computer Science & Engineering student at
                  <span className="text-success fw-semibold"> BUET</span> with a
                  strong foundation in
                  <span className="text-success fw-semibold">
                    {" "}
                    full-stack development
                  </span>{" "}
                  and growing expertise in
                  <span className="text-success fw-semibold">
                    {" "}
                    machine learning
                  </span>{" "}
                  and
                  <span className="text-success fw-semibold">
                    {" "}
                    bioinformatics
                  </span>
                  .
                </p>

                <p className="text-muted lh-base">
                  My academic journey (CGPA 3.92; Dean’s List; University Merit Scholarship) and hands-on
                  experience with projects like
                  <span className="fw-semibold"> BusTopia</span>,
                  <span className="fw-semibold"> OrderXpress</span>, and
                  <span className="fw-semibold"> Echo Chatroom</span> have
                  equipped me with practical skills in
                  <span className="text-success fw-semibold"> Spring Boot</span>
                  ,<span className="text-success fw-semibold"> React</span>,
                  <span className="text-success fw-semibold"> DevOps</span>, and
                  <span className="text-success fw-semibold">
                    {" "}
                    relational and non-relational databases
                  </span>
                  . I enjoy building scalable systems that combine clean
                  architecture with real-world impact.
                </p>

                <p className="text-muted lh-base">
                  Beyond software engineering, I am conducting my undergraduate
                  thesis on
                  <span className="text-success fw-semibold">
                    {" "}
                    protein attribute analysis
                  </span>
                  , applying{" "}
                  <span className="text-success fw-semibold">
                    {" "}
                    ML frameworks (scikit-learn, PyTorch)
                  </span>
                   to solve problems in computational biology. 
                </p>
              </div>

                             {/* Key Highlights */}
               <div className="row g-3 mb-4">
                 <div className="col-md-6">
                   <div className="d-flex align-items-center p-3 bg-dark border border-secondary rounded">
                     <div className="d-flex me-3">
                       <i className="bi bi-code-square text-success fs-4"></i>
                     </div>
                     <div>
                       <h6 className="text-light mb-1">
                         Full-Stack Development
                       </h6>
                       <small className="text-muted">Frontend & Backend</small>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <div className="d-flex align-items-center p-3 bg-dark border border-secondary rounded">
                     <div className="d-flex me-3">
                       <i className="bi bi-brain text-success fs-4 me-2"></i>
                       <i className="bi bi-robot text-success fs-4"></i>
                     </div>
                     <div>
                       <h6 className="text-light mb-1">AI & Machine Learning</h6>
                       <small className="text-muted">Research Focused</small>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <div className="d-flex align-items-center p-3 bg-dark border border-secondary rounded">
                     <div className="d-flex me-3">
                       <i className="bi bi-dna text-success fs-4 me-2"></i>
                       <i className="bi bi-graph-up text-success fs-4"></i>
                     </div>
                     <div>
                       <h6 className="text-light mb-1">Bioinformatics</h6>
                       <small className="text-muted">Computational Biology</small>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <div className="d-flex align-items-center p-3 bg-dark border border-secondary rounded">
                     <div className="d-flex me-3">
                       <i className="bi bi-database text-success fs-4"></i>
                     </div>
                     <div>
                       <h6 className="text-light mb-1">Database Design</h6>
                       <small className="text-muted">
                         Relational and Non-Relational
                       </small>
                     </div>
                   </div>
                 </div>
               </div>

                             {/* Call to Action */}
               <div className="d-flex justify-content-center">
                 <button 
                   className="btn btn-success btn-lg"
                   onClick={() => {
                     document.getElementById('education')?.scrollIntoView({ 
                       behavior: 'smooth' 
                     });
                   }}
                 >
                   <i className="bi bi-arrow-right-circle me-2"></i>
                   Continue Tour
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
