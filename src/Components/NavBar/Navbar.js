import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useNavigate } from "react-router-dom";
import Accessories from "../Pages/Accessories/Accessories";
 

import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Add subtle shadow & solidify background after scrolling a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);


  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const onClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#" className="logo" aria-label="PhoneHub Home">
          <span className="logo-gradient">PhoneHub</span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links" aria-label="Primary">
          <a href="#" className="nav-link">
            Phones
          </a>
          <a href="/Accessories" className="nav-link">
            Accessories
          </a>
          <a href="#" className="nav-link">
            Deals
          </a>
          <a href="#" className="nav-link">
            Support
          </a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          {/* Expanding Search */}
          <div className={`search ${searchOpen ? "open" : ""}`}>
            <input
              type="search"
              placeholder="Search phones…"
              aria-label="Search"
              onBlur={() => setSearchOpen(false)}
            />
            <button
              className="icon-btn"
              aria-label="Toggle search"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSearchOpen((v) => !v)}
              title="Search"
            >
              <FaSearch />
            </button>
          </div>

          {/* Account */}
          <button
            className="icon-btn"
            aria-label="Profile"
            onClick={() => navigate("/profile")}
          >
            <FaUser className="icon" />
          </button>

          {/* Cart */}
          <a href="#" className="cart icon-btn" aria-label="Cart">
            <FaShoppingCart />
            <span className="cart-count" aria-label="3 items in cart">
              3
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle icon-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-wrap ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <nav className="mobile-nav" aria-label="Mobile">
          <a
            href="#"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Phones
          </a>
          <a
            href="#"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Accessories
          </a>
          <a
            href="#"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Deals
          </a>
          <a
            href="#"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </a>
          <div className="mobile-actions">
            <button className="mobile-btn">Sign In</button>
            <button className="mobile-btn mobile-btn-outline">View Cart</button>
          </div>
        </nav>
      </div>

      {/* Screen dim when menu open */}
      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}
      {showProfile && <Profile />}
    </header>
  );
}

export default Navbar;
