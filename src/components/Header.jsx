import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './styles/Header.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          {isDarkMode ? (
            <img src="/src/assets/logos/solid-dark.svg" alt="Silicon Logo (Dark Mode)" />
          ) : (
            <img src="/src/assets/logos/solid.svg" alt="Silicon Logo" />
          )}
        </Link>
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/#features" className="nav-link">Features</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>
        <div className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <Link to="/auth" id="auth-signin">
          <FontAwesomeIcon icon={faUser} className="signin-icon" />
          <span>Sign in / up</span>
        </Link>
        <button className="btn-mobile">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Header;
