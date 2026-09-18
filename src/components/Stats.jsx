import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { stats } from "../data/portfolioData";

function CountUpNumber({ value }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const duration = 1600; // 1.6s

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stats-number">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section reveal-on-scroll" aria-label="Key Statistics">
      <Row className="g-3">
        {stats.map((stat, idx) => (
          <Col key={idx} xs={6} md={3}>
            <div className="stats-card">
              <CountUpNumber value={stat.value} />
              <p className="stats-label">{stat.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
