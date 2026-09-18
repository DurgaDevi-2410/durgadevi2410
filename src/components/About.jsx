import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiUser, FiCheckCircle } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section className="about-section reveal-on-scroll" id="about" aria-label="About Me">
      <div className="section-badge">
        <span className="section-badge-icon" aria-hidden="true"><FiUser /></span>
        <span>ABOUT ME</span>
      </div>

      <div className="about-header-group mb-4">
        <span className="text-accent text-uppercase fw-bold letter-spacing-1 small d-block mb-1">
          BACKGROUND &amp; EXPERIENCE
        </span>
        {/* <h2 className="section-title mb-2">
          Building ideas into <span className="text-accent">REALITY</span>
        </h2> */}
        <p className="lead text-secondary fw-semibold">
          {personalInfo.aboutTagline}
        </p>
      </div>

      {/* Full Width Biography Card */}
      <div className="about-bio-card p-4 p-md-5 rounded-4 bg-dark-card mb-4">
        <p className="text-light fs-6 mb-4" style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
          {personalInfo.aboutFull}
        </p>

        <div className="specializations-grid mt-4 pt-4 border-top border-secondary border-opacity-25">
          <h4 className="fs-6 text-uppercase text-accent fw-bold mb-3">Core Specializations</h4>
          <Row className="g-3">
            {personalInfo.specializations.map((item, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <div className="spec-badge d-flex align-items-center gap-2 py-2 px-3 rounded-pill">
                  <FiCheckCircle className="text-accent flex-shrink-0" />
                  <span className="text-light small fw-medium">{item}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
