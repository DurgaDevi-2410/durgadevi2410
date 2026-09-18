import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { FiSliders, FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { key: "all", label: "All Skills", icon: <FiSliders /> },
    { key: "frontend", label: "Frontend", icon: <FiCode /> },
    { key: "backend", label: "Backend", icon: <FiServer /> },
    { key: "database", label: "Database", icon: <FiDatabase /> },
    { key: "tools", label: "Tools", icon: <FiTool /> }
  ];

  const getFilteredSkills = () => {
    if (activeTab === "all") {
      return [
        ...skillsData.frontend.map((s) => ({ ...s, cat: "Frontend" })),
        ...skillsData.backend.map((s) => ({ ...s, cat: "Backend" })),
        ...skillsData.database.map((s) => ({ ...s, cat: "Database" })),
        ...skillsData.tools.map((s) => ({ ...s, cat: "Tools" }))
      ];
    }
    return skillsData[activeTab].map((s) => ({
      ...s,
      cat: categories.find((c) => c.key === activeTab)?.label
    }));
  };

  const displaySkills = getFilteredSkills();

  return (
    <section
      ref={sectionRef}
      className="skills-section reveal-on-scroll"
      id="skills"
      aria-label="Technical Proficiency"
      style={{marginTop: 20 }}
    >
      <div className="section-badge">
        <span className="section-badge-icon" aria-hidden="true"><FiSliders /></span>
        <span>Skills & Technologies</span>
      </div>

      {/* <h2 className="section-title mb-2">Skills &amp; Technologies</h2> */}
      <p className="text-muted-custom mb-4" style={{ maxWidth: "680px" }}>
        A comprehensive breakdown of tools, frameworks, languages, and databases I utilize to build modern web solutions.
      </p>

      {/* Category Filter Pills */}
      <div className="filter-pill-group d-flex flex-wrap gap-2 mb-4" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`filter-pill-btn ${activeTab === cat.key ? "active" : ""}`}
            role="tab"
            aria-selected={activeTab === cat.key}
          >
            <span className="me-1">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <Row className="g-3">
        {displaySkills.map((skill, idx) => (
          <Col key={`${activeTab}-${idx}`} xs={12} md={6}>
            <div className="skill-meter-card p-3 rounded-4 bg-dark-card h-100 skill-card-animated">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold text-light fs-6">{skill.name}</span>
                  <span className="skill-cat-tag small">{skill.cat}</span>
                </div>
                <span className="skill-level-number fw-bold text-accent">{skill.level}%</span>
              </div>

              <p className="small mb-2" style={{ color: "#ffffff" }}>{skill.desc}</p>

              <div className="skill-progress-track">
                <div
                  className="skill-progress-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transition: `width 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.04}s`
                  }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="mt-4 pt-2 text-center text-white small fst-italic">
        Always learning. Always building.
      </div>
    </section>
  );
}
