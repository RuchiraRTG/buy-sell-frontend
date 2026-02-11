import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaBell,
  FaUser,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside on mobile
  React.useEffect(() => {
    const onClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <a href="/home" className="logo" aria-label="PhoneHub Home">
          <span className="logo-text">PhoneHub</span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links" aria-label="Primary">
          <button 
            className="nav-link"
            onClick={() => navigate("/home")}
          >
            Home
          </button>
          <Link to="/Phones" className="nav-link">
            Phones
          </Link>
          <Link to="/electronics" className="nav-link">
            Electronics
          </Link>
          <button 
            className="nav-link"
            onClick={() => navigate("/lands")}
          >
            Property
          </button>
          <Link to="/Support" className="nav-link">Support</Link>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          {/* Cart */}
          {/* <button
            className="icon-btn"
            aria-label="Shopping Cart"
            title="Shopping Cart"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart />
          </button> */}

          {/* Wishlist */}
          <button
            className="icon-btn"
            aria-label="Wishlist"
            title="Wishlist"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart />
          </button>

          {/* Notifications */}
          <button
            className="icon-btn"
            aria-label="Notifications"
            title="Notifications"
            onClick={() => navigate("/notifications")}
          >
            <FaBell />
          </button>

          {/* Account */}
          <button
            className="icon-btn icon-btn-user"
            aria-label="Profile"
            onClick={() => navigate("/profile")}
          >
            <FaUser />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
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
          <button
            className="mobile-link"
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            Home
          </button>
          <Link
            to="/Phones"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Phones
          </Link>
          <Link
            to="/electronics"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Electronics
          </Link>
          <button
            className="mobile-link"
            onClick={() => {
              navigate("/lands");
              setMenuOpen(false);
            }}
          >
            Property
          </button>
          <Link
            to="/Support"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>
          <div className="mobile-actions">
            <button className="mobile-btn" onClick={() => navigate("/profile")}>Sign In</button>
            <button
              className="mobile-btn mobile-btn-outline"
              onClick={() => {
                navigate("/wishlist");
                setMenuOpen(false);
              }}
            >
              Wishlist
            </button>
          </div>
        </nav>
      </div>

      {/* Screen dim when menu open */}
      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Navbar;
