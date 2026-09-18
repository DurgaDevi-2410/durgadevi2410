import React from "react";
import { FiBriefcase, FiBookOpen, FiCode, FiServer, FiLayers, FiCheck, FiMonitor, FiTool } from "react-icons/fi";

export default function ExperienceCard({ experience }) {
  const getIcon = (tag) => {
    switch (tag) {
      case "EDUCATION":
        return <FiBookOpen />;
      case "INTERNSHIP":
        return <FiCode />;
      case "EXPERIENCE":
        return <FiMonitor />;
      case "PROFESSIONAL EXPERIENCE":
        return <FiTool />;
      case "FRONTEND DEVELOPMENT":
        return <FiCode />;
      case "BACKEND DEVELOPMENT":
        return <FiServer />;
      case "PROJECT EXPERIENCE":
        return <FiLayers />;
      default:
        return <FiBriefcase />;
    }
  };

  return (
    <div className="experience-card timeline-interactive-card p-4 rounded-4 mb-4 bg-dark-card position-relative">
      <div className="experience-header d-flex justify-content-between align-items-start gap-3 flex-wrap mb-2">
        <div className="d-flex align-items-center gap-3">
          <div className="company-logo-badge flex-shrink-0 company-logo-pulse" aria-hidden="true">
            {getIcon(experience.tag)}
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge bg-accent-soft text-accent text-uppercase small fw-bold px-2 py-1 rounded-pill">
                {experience.tag}
              </span>
            </div>
            <h3 className="experience-role fs-5 fw-bold text-light mb-1">
              {experience.role}
            </h3>
          </div>
        </div>

        <span className="experience-date-badge font-monospace small">
          {experience.period}
        </span>
      </div>

      <hr className="experience-divider my-3" />

      <p className="experience-desc text-white mb-3" style={{ lineHeight: "1.7" }}>
        {experience.description}
      </p>

      {/* Highlights tags */}
      {experience.highlights && (
        <div className="d-flex flex-wrap gap-2 pt-1">
          {experience.highlights.map((item, idx) => (
            <span key={idx} className="timeline-tag-pill timeline-tag-hover">
              <FiCheck size={12} className="text-accent me-1" />
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
