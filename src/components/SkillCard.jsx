import React from "react";
import { FaFigma } from "react-icons/fa6";
import { SiFramer, SiNotion, SiCanvas } from "react-icons/si";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";

export default function SkillCard({ skill }) {
  const getToolIcon = (iconKey) => {
    switch (iconKey) {
      case "figma":
        return <FaFigma />;
      case "framer":
        return <SiFramer />;
      case "illustrator":
        return <TbBrandAdobeIllustrator />;
      case "notion":
        return <SiNotion />;
      case "photoshop":
        return <TbBrandAdobePhotoshop />;
      case "canva":
        return <SiCanvas />;
      default:
        return null;
    }
  };

  return (
    <div className="skill-card">
      <div className="skill-icon-badge" aria-hidden="true">
        {getToolIcon(skill.iconKey)}
      </div>
      <div>
        <h3 className="skill-name">{skill.name}</h3>
        <p className="skill-category">{skill.category}</p>
      </div>
    </div>
  );
}
