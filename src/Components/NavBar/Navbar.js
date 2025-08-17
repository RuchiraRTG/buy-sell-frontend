import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">PhoneHub</div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Phones</a>
        <a href="#">Accessories</a>
        <a href="#">Deals</a>
        <a href="#">Support</a>
      </nav>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <div className="cart">
          <FaShoppingCart className="icon" />
          <span className="cart-count">3</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
