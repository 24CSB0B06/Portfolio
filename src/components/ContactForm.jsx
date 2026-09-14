import React, { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverSuccess, setServerSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (serverError) setServerError(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));
  };

  const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setServerError(null);
    setServerSuccess(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact form.');
      }

      setServerSuccess(data.message || '✓ Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});

      setTimeout(() => {
        setServerSuccess(null);
      }, 7000);
    } catch (err) {
      console.error('Submission error:', err);
      setServerError(err.message || 'Unable to connect to server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {serverSuccess && (
        <div className="form-success-banner" role="alert">
          {serverSuccess}
        </div>
      )}

      {serverError && (
        <div className="form-error-banner" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', padding: '14px', borderRadius: '8px', marginBottom: '16px' }} role="alert">
          ⚠️ <strong>Server Validation Error:</strong> {serverError}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Name"
          className={touched.name && errors.name ? 'input-error' : ''}
          aria-required="true"
        />
        {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Email Address"
          className={touched.email && errors.email ? 'input-error' : ''}
          aria-required="true"
        />
        {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Write your message here..."
          className={touched.message && errors.message ? 'input-error' : ''}
          aria-required="true"
        ></textarea>
        {touched.message && errors.message && <span className="error-text">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={!isFormValid || isSubmitting}
        title={!isFormValid ? 'Please fill out all required fields correctly' : 'Submit message'}
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message ↗'}
      </button>
    </form>
  );
}

