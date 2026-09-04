import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ transparent = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`navbar${transparent ? " navbar-transparent" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img className="logo-mark" src="/BSCS%20Logo.svg" alt="" />
          BSCS
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
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
