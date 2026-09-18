import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer mt-5" role="contentinfo">
      <Container>
        <Row className="align-items-center gy-2">
          <Col xs={12} md={4} className="footer-col-left">
            <span className="fw-bold text-light tracking-wide">{personalInfo.name.toUpperCase()}</span>
          </Col>
          <Col xs={12} md={8} className="footer-col-right text-md-end">
            <span className="text-white small">
              {personalInfo.subRole} // Copyright &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
