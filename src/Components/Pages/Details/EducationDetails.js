import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EducationDetails.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaComments, 
  FaShare, 
  FaHeart, 
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaUser,
  FaCheckCircle,
  FaBook,
  FaAward,
  FaEye
} from "react-icons/fa";

// Sample education product data
const educationData = {
  1: {
    id: 1,
    title: "Complete Python Programming Course",
    category: "Online Courses",
    price: 149,
    negotiable: false,
    images: [
      "https://via.placeholder.com/600x600?text=Python+Course+1",
      "https://via.placeholder.com/600x600?text=Python+Course+2",
      "https://via.placeholder.com/600x600?text=Python+Course+3"
    ],
    description: "Comprehensive Python programming course covering basics to advanced topics. Learn from industry experts with real-world projects and hands-on exercises. Includes lifetime access to course materials and community support.",
    specifications: {
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      modules: 45,
      lessons: 250,
      projects: 8,
      language: "English"
    },
    location: "Online",
    seller: {
      name: "Tech Academy",
      rating: 4.8,
      totalReviews: 1250,
      joinedDate: "2020-03-15",
      location: "Colombo",
      responseTime: "Usually responds within 2 hours",
      phone: "+94771234567",
      email: "contact@techacademy.com",
      verified: true,
      memberSince: "5+ years"
    },
    features: [
      "Lifetime Access",
      "Certification",
      "24/7 Support",
      "Community Forum",
      "Code Samples",
      "Video Lectures",
      "Assignments",
      "Progress Tracking"
    ],
    postedDate: "2025-12-01",
    views: 542,
    reference: "EDU001"
  },
  2: {
    id: 2,
    title: "Business English Grammar Book",
    category: "Books",
    price: 35,
    negotiable: true,
    images: [
      "https://via.placeholder.com/600x600?text=English+Book+1",
      "https://via.placeholder.com/600x600?text=English+Book+2"
    ],
    description: "Oxford Business English Grammar comprehensive guide. Perfect for professionals and students preparing for business communication. Includes exercises, answer keys, and practical examples.",
    specifications: {
      pages: 256,
      author: "Oxford Publishers",
      edition: "4th Edition",
      language: "English",
      isbn: "978-0-19-456789-0",
      condition: "New"
    },
    location: "Kandy",
    seller: {
      name: "Oxford Books Store",
      rating: 4.9,
      totalReviews: 89,
      joinedDate: "2021-06-20",
      location: "Kandy",
      responseTime: "Usually responds within 1 hour",
      phone: "+94712345678",
      email: "info@oxfordbooks.com",
      verified: true,
      memberSince: "4 years"
    },
    features: [
      "Quality Paper",
      "Hardcover Binding",
      "Index included",
      "Answer Key",
      "Exercise Solutions",
      "Professional Examples"
    ],
    postedDate: "2025-11-28",
    views: 234,
    reference: "EDU002"
  }
};

function EducationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = educationData[id] || educationData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageToggle = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="education-details-page-wrapper">
        <div className="education-details-container">
          <button className="back-button" onClick={() => navigate("/education")}>
            <FaArrowLeft /> Back
          </button>

          <div className="education-details-content">
            {/* Gallery Section */}
            <div className="education-gallery-section">
              <div className="main-image-container">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="main-image"
                />
                {product.images.length > 1 && (
                  <>
                    <button className="image-nav prev" onClick={handlePrevImage}>
                      ‹
                    </button>
                    <button className="image-nav next" onClick={handleNextImage}>
                      ›
                    </button>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="thumbnail-gallery">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                      onClick={() => handleImageToggle(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="education-details-info">
              <div className="category-badge">{product.category}</div>
              <h1 className="product-title">{product.title}</h1>

              <div className="seller-info-preview">
                <div className="seller-avatar">
                  <FaUser />
                </div>
                <div className="seller-details">
                  <p className="seller-name">{product.seller.name}</p>
                  <div className="seller-rating">
                    <FaStar className="star" />
                    <span>{product.seller.rating}</span>
                    <span className="review-count">({product.seller.totalReviews} reviews)</span>
                  </div>
                  <p className="seller-location">
                    <FaMapMarkerAlt /> {product.seller.location}
                  </p>
                </div>
              </div>

              <div className="product-price-section">
                <div className="price-display">
                  <span className="price">${product.price.toLocaleString()}</span>
                  {product.negotiable && <span className="negotiable">Negotiable</span>}
                </div>
              </div>

              <div className="action-buttons">
                <button 
                  className="btn-contact"
                  onClick={() => {
                    const phoneNumber = product.seller.phone.replace(/[^0-9]/g, '');
                    const message = encodeURIComponent(`Hi, I'm interested in ${product.title} (${product.category}) - Rs.${product.price}`);
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                  }}
                >
                  <FaWhatsapp /> WhatsApp
                </button>
                <button
                  className={`btn-wishlist ${isWishlisted ? "active" : ""}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <FaHeart /> Wishlist
                </button>
              </div>

              <div className="contact-seller-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <FaPhone /> {product.seller.phone}
                </div>
                <div className="contact-item">
                  <FaEnvelope /> {product.seller.email}
                </div>
                <div className="contact-item">
                  <FaCalendarAlt /> Response time: {product.seller.responseTime}
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="education-description-section">
            <h2>About this Product</h2>
            <p>{product.description}</p>
          </div>

          {/* Specifications Section */}
          <div className="education-specs-section">
            <h2>Specifications</h2>
            <div className="specs-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="education-features-section">
            <h2>Features</h2>
            <div className="features-list">
              {product.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="education-additional-info">
            <div className="info-card">
              <FaCalendarAlt className="info-icon" />
              <div>
                <p className="info-label">Posted</p>
                <p className="info-value">{product.postedDate}</p>
              </div>
            </div>
            <div className="info-card">
              <FaEye className="info-icon" />
              <div>
                <p className="info-label">Views</p>
                <p className="info-value">{product.views}</p>
              </div>
            </div>
            <div className="info-card">
              <FaAward className="info-icon" />
              <div>
                <p className="info-label">Reference</p>
                <p className="info-value">{product.reference}</p>
              </div>
            </div>
          </div>

          {/* Seller Details Card */}
          <div className="seller-details-card">
            <div className="seller-header">
              <div className="seller-avatar-large">
                <FaUser />
              </div>
              <div className="seller-info-large">
                <h3>{product.seller.name}</h3>
                <div className="seller-rating-large">
                  <FaStar className="star" />
                  <span>{product.seller.rating}</span>
                  <span>({product.seller.totalReviews} reviews)</span>
                </div>
                {product.seller.verified && (
                  <div className="verified-badge">
                    <FaCheckCircle /> Verified Seller
                  </div>
                )}
              </div>
            </div>

            <div className="seller-meta">
              <div className="meta-item">
                <p className="meta-label">Member Since</p>
                <p className="meta-value">{product.seller.memberSince}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Location</p>
                <p className="meta-value">{product.seller.location}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Response Time</p>
                <p className="meta-value">{product.seller.responseTime}</p>
              </div>
            </div>

            <button className="btn-message-seller">
              <FaComments /> Message Seller
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EducationDetails;
