import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function NavLinks({ isMobile, onClose }) {
  return (
    <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
      <li onClick={onClose}><a href="#">Menu</a></li>
      <li onClick={onClose}><a href="#">Location</a></li>
      <li onClick={onClose}><a href="#">About</a></li>
      <li onClick={onClose}><a href="#">Contact</a></li>
    </ul>
  );
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand_logo">
        <img src="/images/brand_logo.png" alt="Brand Logo" />
      </div>
      <div className="desktop-menu">
        <NavLinks />
      </div>
      <div className="nav-btn-container">
        <button className="nav-btn">Login</button>
        <div className="nav-menu">
          {toggleMenu ? (
            <RiCloseLine
              className="menu-icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              className="menu-icon"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="nav-menu_container">
          <NavLinks isMobile={true} onClose={() => setToggleMenu(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
