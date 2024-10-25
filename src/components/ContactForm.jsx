/* import React, { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (!nameRegex.test(fullName)) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!specialist) {
      newErrors.specialist = 'Please select a specialist';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', { fullName, email, specialist });
      // Proceed with form submission
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="contact-form">
      <h2>Get Online Consultation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="specialist">Specialist</label>
          <select
            id="specialist"
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
          >
            <option value="">Select a type of specialist</option>
            <option value="doctor1">Oncologist</option>
            <option value="doctor2">Cardiologist</option>
            <option value="doctor3">Dermatologist</option>
            <option value="doctor4">Neurologist</option>
            <option value="doctor5">Gynecologist</option>
          </select>
          {errors.specialist && <span className="error-text">{errors.specialist}</span>}
        </div>
        <button type="submit" className="btn-primary">Make an appointment</button>
      </form>
    </div>
  );
};

export default ContactForm;
 */