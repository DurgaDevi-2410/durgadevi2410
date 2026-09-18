import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app min-vh-100 d-flex flex-column">
      {/* Ambient orbs in a fixed layer so they don't break sticky positioning */}
      <div className="orbs-layer" aria-hidden="true">
        <div className="bg-glow-orb orb-top"></div>
        <div className="bg-glow-orb orb-mid"></div>
      </div>

      {/* Main page container */}
      <main className="flex-grow-1 py-4 py-lg-5">
        <Container fluid="xl">
          <Row className="gy-4 gx-xl-5">
            {/* Left Column: Sticky Profile Sidebar */}
            <Col xs={12} md={5} lg={5} xl={4} className="sidebar-col">
              <Sidebar />
            </Col>

            {/* Right Column: Scrollable Portfolio Sections */}
            <Col xs={12} md={7} lg={7} xl={8} className="portfolio-content-col">
              <Hero />
              <Stats />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
