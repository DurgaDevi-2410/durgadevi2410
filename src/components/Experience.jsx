import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { experiences } from "../data/portfolioData";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section className="experience-section reveal-on-scroll" id="experience" aria-label="Career and Milestones">
      <div className="section-badge">
        <span className="section-badge-icon" aria-hidden="true"><FiBriefcase /></span>
        <span>CAREER &amp; MILESTONES</span>
      </div>

      {/* <h2 className="section-title mb-2">Experience &amp; Evolution</h2> */}
      <p className="text-muted-custom mb-4" style={{ maxWidth: "660px" }}>
        A chronological journey of my education, technical evolution, and software engineering achievements.
      </p>

      <div className="experience-timeline-track">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>

      <div className="mt-4 pt-2 text-center text-white small fst-italic">
        Continuous Growth. Learning, building, and delivering impactful digital solutions.
      </div>
    </section>
  );
}
