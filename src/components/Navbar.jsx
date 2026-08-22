import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Resume",
    "Contact",
  ];

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================================
          NAVBAR
      ================================= */}

      <nav className="navbar">
        {/* Logo */}

        <a href="#home" className="navbar-logo">
          ARYA <span>VAIRAGARE</span>
        </a>

        {/* Desktop Navigation */}

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ================================
          MOBILE OVERLAY
      ================================= */}

      <div
        className={`sidebar-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* ================================
          MOBILE SIDEBAR
      ================================= */}

      <aside
        className={`mobile-sidebar ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Sidebar Header */}

        <div className="sidebar-header">
          <a href="#home" className="sidebar-logo" onClick={closeMenu}>
            ARYA <span>VAIRAGARE</span>
          </a>

          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        {/* Mobile Navigation */}

        <nav className="mobile-nav">
          {navItems.map((item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={closeMenu}
              style={{
                transitionDelay: menuOpen ? `${index * 0.04}s` : "0s",
              }}
            >
              <span>0{index + 1}</span>

              {item}
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}

        <div className="sidebar-footer">
          <p>Java Full Stack Developer</p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
