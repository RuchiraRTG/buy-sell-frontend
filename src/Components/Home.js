import React from "react";
import "./Home.css";
import Navbar from "./NavBar/Navbar";
import iphone15 from "../Assets/Img/iPhone15Pro.webp";
import ip15pro from "../Assets/Img/ip15pro.avif"
import sS24 from "../Assets/Img/s24.jpg";
import OnePlus12 from "../Assets/Img/One12.jpeg";
import O12 from "../Assets/Img/oneplus12.png";
import HM1 from "../Assets/Img/HM1.png";
import S24U from "../Assets/Img/s24.png";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            The Future is in <span>Your Hands</span>
          </h1>
          <p>
            Discover the latest smartphones with cutting-edge technology,
            stunning displays, and powerful performance.
          </p>
          <div className="buttons">
            <button className="primary-btn">Shop Now</button>
            <button className="secondary-btn">Learn More</button>
          </div>
          <div className="stats">
            <div>
              <strong>50K+</strong>
              <p>Happy Customers</p>
            </div>
            <div>
              <strong>100+</strong>
              <p>Phone Models</p>
            </div>
            <div>
              <strong>24/7</strong>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={HM1}
            alt="Phone"
          />
        </div>
      </section>

      {/* Category Navigation */}
      <section className="section-gradient categories">
        <h2>Shop by Brand</h2>
        <div className="category-grid">
          <div className="category-card">Apple</div>
          <div className="category-card">Samsung</div>
          <div className="category-card">Xiaomi</div>
          <div className="category-card">OnePlus</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-gradient">
        <h2>Featured Phones</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={ip15pro} alt="Phone" />
            <h3>iPhone 15 Pro</h3>
            <p>$999</p>
          </div>
          <div className="product-card">
            <img src={sS24} alt="Phone" />
            <h3>Samsung Galaxy S24</h3>
            <p>$899</p>
          </div>
          <div className="product-card">
            <img src= {O12} alt="Phone" />
            <h3>OnePlus 12</h3>
            <p>$799</p>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers">
        <h2>Special Offers</h2>
        <div className="offer-banner">
          <h3>Up to 30% Off on Selected Models</h3>
          <button className="primary-btn">Shop Deals</button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Get the latest deals and updates right to your inbox.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="primary-btn">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 PhoneHub. All rights reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
