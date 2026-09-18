import React, { useState, useEffect } from "react";
import { FiArrowDownRight, FiSend } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const roles = [
    "PYTHON & DJANGO DEVELOPER",
    "FULL STACK DEVELOPER",
    "REACT.JS & NODE.JS SPECIALIST",
    "API & DATABASE ARCHITECT"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayedText(roles[0]);
      return;
    }

    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 45 : 85;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at full word before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero-section" id="home">
      <div className="section-badge">
        <span className="wave-hand" role="img" aria-label="Waving hand">👋</span>
        <span>{personalInfo.sayHello}</span>
      </div>

      <h1 className="hero-heading">
        {personalInfo.heroHeading.prefix}
        <br />
        <span className="text-accent text-accent-animated hero-typing-text">
          {displayedText || "\u00A0"}
        </span>
        <span className="typing-cursor" aria-hidden="true">|</span>
      </h1>

      <p className="hero-description">
        {personalInfo.heroDescription}
      </p>

      {/* Hero CTA Action Buttons */}
      <div className="hero-actions d-flex flex-wrap gap-3 mt-4">
        <a
          href="#projects"
          onClick={handleScroll("projects")}
          className="btn-accent"
          aria-label="View My Work"
        >
          <span>VIEW MY WORK</span>
          <FiArrowDownRight className="btn-icon-bounce" />
        </a>

        <a
          href="#contact"
          onClick={handleScroll("contact")}
          className="btn-dark-secondary"
          aria-label="Get in Touch"
        >
          <FiSend />
          <span>GET IN TOUCH</span>
        </a>
      </div>
    </header>
  );
}
