import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card h-100 d-flex flex-column project-card-interactive">
      {/* Project Image Preview with shimmer reflection */}
      <div className="project-image-wrapper position-relative">
        <img
          src={project.image}
          alt={`Preview of ${project.title}`}
          className="project-image"
          loading="lazy"
        />
        <div className="project-shimmer-sweep" aria-hidden="true"></div>
        <span className="project-index-badge position-absolute top-0 start-0 m-3">
          {project.id}
        </span>
      </div>

      <div className="project-body d-flex flex-column flex-grow-1 p-1">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="project-category text-accent small fw-bold">
            {project.category}
          </span>
        </div>

        <h3 className="project-title mb-2">{project.title}</h3>

        <p className="project-desc small flex-grow-1 mb-3" style={{ color: "#ffffff" }}>
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="project-stack-tags d-flex flex-wrap gap-2 mb-3">
          {project.stack.map((tech, i) => (
            <span key={i} className="project-stack-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links: Demo and Code */}
        <div className="project-action-links d-flex gap-2 pt-2 border-top border-secondary border-opacity-25 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-action btn-project-demo d-inline-flex align-items-center gap-2"
              aria-label={`Live Demo of ${project.title}`}
            >
              <span className="live-demo-dot" aria-hidden="true"></span>
              <span>Demo</span>
              <FiExternalLink size={13} className="project-link-icon" />
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-action btn-project-code d-inline-flex align-items-center gap-1"
              aria-label={`Source Code of ${project.title}`}
            >
              <FiGithub size={13} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
