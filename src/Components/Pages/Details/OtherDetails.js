import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OtherDetails.css";
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
  FaEye
} from "react-icons/fa";

const otherData = {
  1: {
    id: 1,
    title: "Vintage Automatic Wristwatch",
    category: "Accessories",
    price: 180,
    negotiable: true,
    location: "New Orleans, LA",
    postedDate: "Dec 12, 2024",
    views: 289,
    referenceId: "OTHER001",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
      "https://images.unsplash.com/photo-1523879541855-76b996b0bfd2?w=800"
    ],
    description: "Beautiful vintage automatic wristwatch from the 1970s. Classic design with leather strap. Keeps excellent time. Scratches present on crystal (shown in photos). A true collector's piece.",
    seller: {
      name: "Vintage Collectors Hub",
      rating: 4.9,
      totalReviews: 178,
      location: "New Orleans, LA",
      phone: "+1-555-7890",
      email: "info@vintagecollectors.com",
      verified: true,
      responseTime: "Within 4 hours",
      memberSince: "October 2019"
    },
    specs: {
      brand: "Seiko",
      year: "1970s",
      movement: "Automatic",
      caseMaterial: "Stainless Steel",
      condition: "Used - Excellent",
      waterResistant: "30m"
    },
    features: [
      "Automatic movement",
      "Stainless steel case",
      "Leather strap",
      "Date display",
      "Clean dial",
      "Reliable timekeeper"
    ]
  },
  2: {
    id: 2,
    title: "Antique Wooden Dresser",
    category: "Furniture",
    price: 450,
    negotiable: true,
    location: "Charleston, SC",
    postedDate: "Dec 10, 2024",
    views: 521,
    referenceId: "OTHER002",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
    ],
    description: "Gorgeous antique wooden dresser from the 1950s. Hand-crafted oak with original brass handles. 4 spacious drawers. Solid construction. Great addition to any bedroom.",
    seller: {
      name: "Antique Finds Store",
      rating: 4.8,
      totalReviews: 212,
      location: "Charleston, SC",
      phone: "+1-555-2468",
      email: "sales@antiquefinds.com",
      verified: true,
      responseTime: "Within 2 hours",
      memberSince: "February 2020"
    },
    specs: {
      brand: "Handcrafted",
      era: "1950s",
      material: "Oak Wood",
      drawers: "4",
      dimensions: "36x18x32 inches",
      condition: "Excellent"
    },
    features: [
      "Solid oak construction",
      "4 spacious drawers",
      "Original brass handles",
      "Well preserved",
      "Authentic 1950s",
      "Statement piece"
    ]
  }
};

function OtherDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = otherData[id];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlistKey = `wishlist_other_${id}`;
    setIsWishlisted(localStorage.getItem(wishlistKey) === "true");
  }, [id]);

  const handlePrevImage = () => {
    if (product?.images) {
      setCurrentImageIndex(
        currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (product?.images) {
      setCurrentImageIndex(
        currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1
      );
    }
  };

  const toggleWishlist = () => {
    const newState = !isWishlisted;
    const wishlistKey = `wishlist_other_${id}`;
    if (newState) {
      localStorage.setItem(wishlistKey, "true");
    } else {
      localStorage.removeItem(wishlistKey);
    }
    setIsWishlisted(newState);
  };

  if (!product) {
    return <div className="error-page">Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="other-details-page-wrapper">
        <div className="other-details-container">
          <button className="back-button" onClick={() => navigate("/other")}>
            <FaArrowLeft /> Back to Other Items
          </button>

          <div className="other-details-content">
            <div className="other-gallery-section">
              <div className="main-image-container">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="main-image"
                />
                <button className="image-nav prev" onClick={handlePrevImage}>
                  ‹
                </button>
                <button className="image-nav next" onClick={handleNextImage}>
                  ›
                </button>
              </div>
              <div className="thumbnail-gallery">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`View ${idx + 1}`}
                    className={`thumbnail ${idx === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>

            <div className="other-details-info">
              <div className="category-badge">{product.category}</div>
              <h1 className="product-title">{product.title}</h1>

              <div className="seller-info-preview">
                <div className="seller-avatar">🏪</div>
                <div className="seller-details">
                  <p className="seller-name">{product.seller.name}</p>
                  <div className="seller-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                    <span className="review-count">({product.seller.totalReviews})</span>
                  </div>
                  <p className="seller-location">
                    <FaMapMarkerAlt /> {product.seller.location}
                  </p>
                </div>
              </div>

              <div className="product-price-section">
                <div className="price-display">
                  <span className="price">${product.price}</span>
                  {product.negotiable && (
                    <span className="negotiable">Negotiable</span>
                  )}
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
                  onClick={toggleWishlist}
                >
                  <FaHeart /> {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
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
                  <FaCalendarAlt /> Response Time: {product.seller.responseTime}
                </div>
              </div>
            </div>
          </div>

          <div className="other-description-section">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="other-specs-section">
            <h2>Specifications</h2>
            <div className="specs-grid">
              {Object.entries(product.specs).map(([key, value]) => (
                <div className="spec-item" key={key}>
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="other-features-section">
            <h2>Key Features</h2>
            <div className="features-list">
              {product.features.map((feature, idx) => (
                <div className="feature-item" key={idx}>
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="other-additional-info">
            <div className="info-card">
              <FaEye className="info-icon" />
              <div>
                <p className="info-label">Product Views</p>
                <p className="info-value">{product.views}</p>
              </div>
            </div>
            <div className="info-card">
              <FaCalendarAlt className="info-icon" />
              <div>
                <p className="info-label">Posted On</p>
                <p className="info-value">{product.postedDate}</p>
              </div>
            </div>
            <div className="info-card">
              <FaUser className="info-icon" />
              <div>
                <p className="info-label">Reference ID</p>
                <p className="info-value">{product.referenceId}</p>
              </div>
            </div>
          </div>

          <div className="seller-details-card">
            <div className="seller-header">
              <div className="seller-avatar-large">🏪</div>
              <div className="seller-info-large">
                <h3>{product.seller.name}</h3>
                <div className="seller-rating-large">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
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
                <p className="meta-label">Response Time</p>
                <p className="meta-value">{product.seller.responseTime}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Location</p>
                <p className="meta-value">{product.seller.location}</p>
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

export default OtherDetails;
