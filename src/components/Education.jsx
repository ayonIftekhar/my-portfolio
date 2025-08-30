import React from 'react';
import eceBuilding from '../assets/ECE_Building,_BUET.jpg';

function Education() {
  return (
    <section id="education" className="py-5 bg-dark">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Education Details */}
          <div className="col-lg-7">
            <div className="pe-lg-4">
              <h2 className="display-5 fw-bold text-light mb-4">
                <i className="bi bi-mortarboard me-3 text-success"></i>
                Education
              </h2>
              
              <div className="mb-4">
                {/* School */}
                <div className="mb-4 p-4 bg-dark border border-secondary rounded">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex me-3">
                      <i className="bi bi-building text-success fs-4"></i>
                    </div>
                    <h5 className="text-light mb-0">Bogura Cantonment Public School & College</h5>
                  </div>
                  <div className="ms-5">
                    <p className="text-muted mb-1">
                      <strong>Degree:</strong> Secondary School Certificate (SSC)
                    </p>
                    <p className="text-success mb-1">
                      <strong>GPA:</strong> 5.00
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Duration:</strong> 2006-2018
                    </p>
                  </div>
                </div>

                {/* College */}
                <div className="mb-4 p-4 bg-dark border border-secondary rounded">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex me-3">
                      <i className="bi bi-building text-success fs-4"></i>
                    </div>
                    <h5 className="text-light mb-0">Govt. Azizul Haque College</h5>
                  </div>
                  <div className="ms-5">
                    <p className="text-muted mb-1">
                      <strong>Degree:</strong> Higher Secondary School Certificate
                    </p>
                    <p className="text-success mb-1">
                      <strong>GPA:</strong> 5.00
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Duration:</strong> 2018-2020
                    </p>
                  </div>
                </div>

                {/* University */}
                <div className="p-4 bg-dark border border-secondary rounded">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex me-3">
                      <i className="bi bi-university text-success fs-4 me-2"></i>
                      <i className="bi bi-award text-success fs-4"></i>
                    </div>
                    <h5 className="text-light mb-0">Bangladesh University of Engineering and Technology (BUET)</h5>
                  </div>
                  <div className="ms-5">
                    <p className="text-muted mb-1">
                      <strong>Degree:</strong> BSc in Computer Science & Engineering
                    </p>
                    <p className="text-success mb-1">
                      <strong>CGPA:</strong> 3.92
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Duration:</strong> 2022-Present
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - ECE Building Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="position-relative d-inline-block">
              <div
                className="rounded overflow-hidden shadow-lg"
                style={{
                  width: "400px",
                  height: "300px",
                  backgroundColor: "#6c757d",
                }}
              >
                <img
                  src={eceBuilding}
                  alt="ECE Building, BUET"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              {/* Decorative elements */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded border border-success border-3 opacity-25"
                style={{ transform: "translate(-10px, -10px)" }}
              ></div>
            </div>

            {/* Call to Action */}
            <div className="d-flex justify-content-center mt-4">
              <button 
                className="btn btn-success btn-lg"
                onClick={() => {
                  document.getElementById('projects-works')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <i className="bi bi-folder2-open me-2"></i>
                Projects and Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
