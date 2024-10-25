import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUsers, faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import './styles/Contact.css';

const ContactPage = () => {
  useEffect(() => {
    // Set header and body background on mount
    document.querySelector('header').style.backgroundColor = '#F3F6FF';
    document.body.style.backgroundColor = '#FFFFFF';
    
    // Reset on unmount
    return () => {
      document.querySelector('header').style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="container">
        <nav className="breadcrumb">
          <FontAwesomeIcon icon={faHome} />
          <span>Homepage</span>
          <span>/</span>
          <span>Contact</span>
        </nav>

        <h1>Contact Us</h1>

        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-left">
            {/* Email Us */}
            <div className="contact-box">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="content">
                <h2>Email us</h2>
                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="#" className="btn-text">Leave a message</a>
              </div>
            </div>

            {/* Careers */}
            <div className="contact-box">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="content">
                <h2>Careers</h2>
                <p>Find your path in healthcare and join our team of dedicated medical professionals.</p>
                <a href="#" className="btn-text">Send an application</a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Get Online Consultation</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullname">Full name</label>
                <input 
                  type="text" 
                  id="fullname" 
                  name="fullname"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="specialist">Specialist</label>
                <select id="specialist" name="specialist">
                  <option value="">Choose Medical Specialty</option>
                  <option value="1">Cardiology</option>
                  <option value="2">Neurology</option>
                  <option value="3">Pediatrics</option>
                  <option value="4">Oncology</option>
                  <option value="5">Orthopedics</option>
                  <option value="6">Dermatology</option>
                  <option value="7">Gynecology</option>
                  <option value="8">Urology</option>
                </select>
              </div>
              <button type="submit" className="btn-primary">Make an appointment</button>
            </form>
          </div>
        </div>

        {/* Map and Medical Centers */}
        <div className="contact-bottom">
          <div className="map-section">
            <img src="/src/assets/images/map.png" alt="Location Map" />
          </div>
          <div className="medical-centers">
            <div className="medical-center">
              <h3>Medical Center 1</h3>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p><FontAwesomeIcon icon={faPhone} /> (406) 555-0120</p>
              <p>
                <FontAwesomeIcon icon={faClock} /> <strong>Mon - Fri:</strong> 9:00 am - 22:00 am
              </p>
              <p>
                <span className="time-icon-spacer"></span>
                <strong>Sat - Sun:</strong> 9:00 am - 20:00 am
              </p>
            </div>
            <div className="medical-center">
              <h3>Medical Center 2</h3>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 2464 Royal Ln. Mesa,New Jersey 45463</p>
              <p><FontAwesomeIcon icon={faPhone} /> (406) 544-0123</p>
              <p>
                <FontAwesomeIcon icon={faClock} /> <strong>Mon - Fri:</strong> 9:00 am - 22:00 am
              </p>
              <p>
                <span className="time-icon-spacer"></span>
                <strong>Sat - Sun:</strong> 9:00 am - 20:00 am
              </p>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
