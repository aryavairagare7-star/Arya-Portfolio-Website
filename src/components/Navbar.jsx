import { useState } from "react";
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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">ARYA</div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile Sidebar */}

      <div
        className={`sidebar-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">ARYA</div>

          <button className="close-button" onClick={() => setMenuOpen(false)}>
            ×
          </button>
        </div>

        <div className="mobile-nav">
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Navbar;
