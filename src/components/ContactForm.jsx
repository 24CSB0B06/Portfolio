import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form inputs dynamically whenever formData changes
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
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));
  };

  const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Simulate successful form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTouched({});

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {isSubmitted && (
        <div className="form-success-banner" role="alert">
          ✓ Thank you! Your message has been sent successfully. I will get back to you soon!
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
        disabled={!isFormValid}
        title={!isFormValid ? 'Please fill out all required fields correctly' : 'Submit message'}
      >
        Send Message 
      </button>
    </form>
  );
}
