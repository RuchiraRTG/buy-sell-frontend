import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-column footer-brand">
            <h2 className="footer-logo">
              <span className="logo-gradient">PhoneHub</span>
            </h2>
            <p className="footer-description">
              Your trusted destination for the latest smartphones, electronics,
              and tech accessories. Quality products, unbeatable prices.
            </p>
            <div className="social-links">
              <a
                href="#"
                className="social-link"
                aria-label="Facebook"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="YouTube"
                title="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Shop</h3>
            <ul className="footer-list">
              <li>
                <Link to="/Phones" className="footer-link">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/electronics" className="footer-link">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="footer-link">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="footer-link">
                  Deals & Offers
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-list">
              <li>
                <Link to="/Support" className="footer-link">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column footer-newsletter">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>support@phonehub.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Tech Street, Silicon Valley</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="copyright">
              © {new Date().getFullYear()} PhoneHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
