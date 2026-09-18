import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { education } from "../data/portfolioData";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <section className="education-section reveal-on-scroll" id="education" aria-label="Education and Certifications">
      <div className="section-badge">
        <span className="section-badge-icon" aria-hidden="true"><FaGraduationCap /></span>
        <span>Education</span>
      </div>

      <h2 className="section-title">Academic & Training</h2>

      <div className="education-list">
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
}
