import { useState } from "react";
import { Link } from "react-router-dom";
import bscsLogo from "../assets/BSCS-logo-trans.png";
import "./Navbar.css";

function Navbar({ transparent = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className={`navbar${transparent ? " navbar-transparent" : ""}`}>
        <div className="navbar-inner">
          <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
            <img className="logo-mark" src={bscsLogo} alt="BSCS logo" width={38} height={38} />
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/events" onClick={() => setIsOpen(false)}>
              Events
            </Link>
            <Link to="/socials" onClick={() => setIsOpen(false)}>
              Socials
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;