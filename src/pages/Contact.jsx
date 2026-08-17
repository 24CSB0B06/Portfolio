import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="section-container">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-lead">
        Have a project in mind or want to collaborate? Reach out directly or send me a message below!
      </p>

      {/* Contact Information Cards */}
      <div className="contact-info-grid">
        <a href="tel:+919491348422" className="contact-info-card">
          <div className="contact-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="contact-text">
            <span className="contact-title">Phone</span>
            <span className="contact-detail">+91-9491348422</span>
          </div>
        </a>

        <a href="mailto:deekshithakula3001@gmail.com" className="contact-info-card">
          <div className="contact-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="contact-text">
            <span className="contact-title">Personal Email</span>
            <span className="contact-detail">deekshithakula3001@gmail.com</span>
          </div>
        </a>

        <a href="mailto:ad24csb0b06@student.nitw.ac.in" className="contact-info-card">
          <div className="contact-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div className="contact-text">
            <span className="contact-title">Student Email</span>
            <span className="contact-detail">ad24csb0b06@student.nitw.ac.in</span>
          </div>
        </a>
      </div>

      {/* Controlled Contact Form */}
      <ContactForm />
    </section>
  );
}
