import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiDownload, FiSend, FiMail } from "react-icons/fi";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Sidebar() {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "FaGithub":
        return <FaGithub />;
      case "FaLinkedin":
        return <FaLinkedin />;
      case "FiMail":
        return <FiMail />;
      default:
        return <FiMail />;
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="profile-sidebar-wrapper" aria-label="Profile Sidebar">
      <div className="profile-card profile-sidebar-sticky">
        {/* Profile Image with dark gradient backdrop */}
        <div className="profile-image-container">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="profile-image"
            loading="eager"
          />
        </div>

        {/* Available for work badge */}
        <div>
          <div className="status-badge" role="status" aria-label={personalInfo.status}>
            <span className="status-dot-pulse" aria-hidden="true"></span>
            <span>{personalInfo.status}</span>
          </div>
        </div>

        {/* Person Name & Role */}
        <h2 className="profile-name">{personalInfo.name}</h2>
        <p className="profile-tagline">
          {personalInfo.role} • {personalInfo.location}
        </p>

        {/* Social media icons */}
        <div className="social-icons-group" aria-label="Social Profiles">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label={social.name}
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>

        {/* Bottom Action Buttons */}
        <div className="profile-actions">
          <a
            href={personalInfo.cvFile}
            download="Durga-Devi-CV.pdf"
            className="profile-action-btn btn-dark-secondary"
            aria-label="Download CV"
          >
            <FiDownload />
            <span>Download CV</span>
          </a>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="profile-action-btn btn-accent"
            aria-label="Get in Touch"
          >
            <FiSend />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
