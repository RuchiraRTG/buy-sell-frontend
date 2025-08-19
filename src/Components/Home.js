import React from "react";
import "./Home.css";
import Navbar from "./NavBar/Navbar";

// IMAGES
import ip15pro from "../Assets/Img/ip15pro.avif";
import sS24 from "../Assets/Img/s24.jpg";
import O12 from "../Assets/Img/oneplus12.png";
import HM1 from "../Assets/Img/HM1.png";

function HomePage() {
  return (
    <>
      <Navbar />

      
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">New arrivals • Top brands</p>
            <h1>
              The Future is in <span className="gradient-text">Your Hands</span>
            </h1>
            <p className="subhead">
              Discover the latest smartphones with cutting-edge tech, stunning
              displays, and powerful performance—curated for you.
            </p>

            <div className="buttons">
              <a href="#featured" className="primary-btn">Shop Now</a>
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
            <img src={HM1} alt="Flagship phone showcase" />
            <div className="glow" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="section section-light" aria-labelledby="brands">
        <div className="container">
          <h2 id="brands">Shop by Brand</h2>
          <div className="brand-grid">
            <button className="brand-chip">Apple</button>
            <button className="brand-chip">Samsung</button>
            <button className="brand-chip">Xiaomi</button>
            <button className="brand-chip">OnePlus</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section section-gradient" id="featured" aria-labelledby="featured-title">
        <div className="container">
          <h2 id="featured-title">Featured Phones</h2>
          <div className="product-grid">
            <article className="product-card">
              <div className="badge">New</div>
              <img src={ip15pro} alt="iPhone 15 Pro" />
              <h3>iPhone 15 Pro</h3>
              <p className="price">$999</p>
              <button className="btn-outline">Add to Cart</button>
            </article>

            <article className="product-card">
              <div className="badge badge-alt">Hot</div>
              <img src={sS24} alt="Samsung Galaxy S24" />
              <h3>Samsung Galaxy S24</h3>
              <p className="price">$899</p>
              <button className="btn-outline">Add to Cart</button>
            </article>

            <article className="product-card">
              <img src={O12} alt="OnePlus 12" />
              <h3>OnePlus 12</h3>
              <p className="price">$799</p>
              <button className="btn-outline">Add to Cart</button>
            </article>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section section-offers" aria-labelledby="offers-title">
        <div className="container">
          <div className="offer-card">
            <div className="offer-copy">
              <h2 id="offers-title">Special Offers</h2>
              <p>Up to <strong>30% Off</strong> on selected models this week only.</p>
            </div>
            <button className="primary-btn">Shop Deals</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-light" aria-labelledby="newsletter-title">
        <div className="container newsletter">
          <h2 id="newsletter-title">Stay Updated</h2>
          <p className="muted">Get the latest deals and updates right to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" required />
            <button className="primary-btn">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} PhoneHub. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
