import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";
import { contactCards } from "../data/portfolioData";

const FORMSPREE_FORM_ID = "mvkgowge";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getContactIcon = (key) => {
    switch (key) {
      case "email":
        return <FiMail />;
      case "location":
        return <FiMapPin />;
      case "github":
        return <FiGithub />;
      case "linkedin":
        return <FiLinkedin />;
      default:
        return <FiMail />;
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _to: "durgadevi.nagarajan2410@gmail.com"
        })
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setLoading(false);
      setErrors({ submit: "Failed to send message. Please try again." });
    }
  };

  return (
    <section className="contact-section reveal-on-scroll" id="contact" aria-label="Contact Section">
      <div className="section-badge">
        <span className="section-badge-icon" aria-hidden="true"><FiSend /></span>
        <span>LET'S WORK TOGETHER</span>
      </div>

      {/* <h2 className="section-title mb-2">LET'S BUILD SOMETHING TOGETHER.</h2> */}
      <p className="text-muted-custom mb-4" style={{ maxWidth: "680px" }}>
        I'm always open to discussing new opportunities, exciting projects, or just having a friendly chat. Feel free to reach out! 👋
      </p>

      <Row className="g-4 align-items-stretch">
        {/* Left Column: Direct Contact Info Cards */}
        <Col xs={12} lg={6}>
          <div className="contact-cards-container">
            <h3 className="fs-6 text-uppercase text-accent fw-bold mb-3 letter-spacing-1">
              REACH OUT DIRECTLY
            </h3>

            {contactCards.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="contact-info-card text-decoration-none"
                target={item.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <div className="contact-icon-box" aria-hidden="true">
                  {getContactIcon(item.iconKey)}
                </div>
                <div className="contact-card-text">
                  <div className="contact-card-label">{item.label}</div>
                  <div className="contact-card-value">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Col>

        {/* Right Column: Contact Form */}
        <Col xs={12} lg={6}>
          <div className="contact-form-container">
            <h3 className="fs-6 text-uppercase text-accent fw-bold mb-3 letter-spacing-1">
              LET'S CONNECT
            </h3>

            {submitted && (
              <div className="contact-alert-success mb-3" role="alert">
                <FiCheckCircle size={22} className="flex-shrink-0 me-2" />
                <div>
                  <strong>Thank you!</strong> Your message has been sent successfully to durgadevi.nagarajan2410@gmail.com. I'll get back to you shortly!
                </div>
              </div>
            )}

            {errors.submit && (
              <div className="form-error-msg mb-3">{errors.submit}</div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-group-custom mb-3">
                <label htmlFor="name" className="form-label-custom">
                  YOUR NAME*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control-custom"
                  placeholder="e.g. Durga Devi"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.name && <div className="form-error-msg">{errors.name}</div>}
              </div>

              <Row className="g-3 mb-3">
                <Col xs={12} md={6}>
                  <div className="form-group-custom">
                    <label htmlFor="email" className="form-label-custom">
                      YOUR EMAIL*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control-custom"
                      placeholder="e.g. your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                    />
                    {errors.email && <div className="form-error-msg">{errors.email}</div>}
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className="form-group-custom">
                    <label htmlFor="subject" className="form-label-custom">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control-custom"
                      placeholder="e.g. Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <div className="form-group-custom mb-3">
                <label htmlFor="message" className="form-label-custom">
                  MESSAGE*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-control-custom"
                  placeholder="Tell me about your project, idea, or role..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                ></textarea>
                {errors.message && <div className="form-error-msg">{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="btn-accent w-100 mb-2 mt-4"
                disabled={loading}
              >
                <FiSend />
                <span>{loading ? "SENDING..." : "SEND MESSAGE"}</span>
              </button>

              <p className="text-center text-white small mt-2 mb-0">
                Your information is safe with me. I respect your privacy.
              </p>
            </form>
          </div>
        </Col>
      </Row>
    </section>
  );
}
