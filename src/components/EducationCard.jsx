import React from "react";

export default function EducationCard({ edu }) {
  return (
    <div className="education-card">
      <div className="education-header">
        <div>
          <h3 className="education-title">{edu.title}</h3>
          <p className="education-institution">{edu.institution}</p>
        </div>
        <span className="education-date-badge">{edu.period}</span>
      </div>

      <p className="education-desc">{edu.description}</p>
    </div>
  );
}
