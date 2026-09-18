import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FiLayers } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filterTabs = ["All", "Web Apps", "E-Commerce", "Full Stack", "Business Systems", "Mobile Apps", "Games"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t.toLowerCase() === filter.toLowerCase()));

  return (
    <section className="projects-section reveal-on-scroll" id="projects" aria-label="Featured Projects">
      <div className="section-badge">
        <span className="section-badge-icon" aria-hidden="true"><FiLayers /></span>
        <span>MY WORK</span>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
        <div>
          {/* <h2 className="section-title mb-2">Featured Projects</h2> */}
          <p className="text-muted-custom mb-0" style={{ maxWidth: "620px" }}>
            A collection of projects that showcase my skills, creativity, and problem-solving abilities.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="project-filter-group d-flex flex-wrap gap-2" role="tablist">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`filter-pill-btn ${filter === tab ? "active" : ""}`}
              role="tab"
              aria-selected={filter === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <Row className="g-4">
        {filteredProjects.map((project) => (
          <Col key={project.id} xs={12} md={6}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>

      <div className="mt-4 pt-3 text-center text-white small fst-italic">
        Each project is a step towards creating impactful digital solutions.
      </div>
    </section>
  );
}
