import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ToysGamesDetails.css";
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

const toysData = {
  1: {
    id: 1,
    title: "LEGO Classic Building Set - 900 Pieces",
    category: "Building Blocks",
    price: 120,
    negotiable: false,
    location: "Seattle, WA",
    postedDate: "Dec 13, 2024",
    views: 452,
    referenceId: "TOYS001",
    images: [
      "https://images.unsplash.com/photo-1594787318286-3d835b1fa53d?w=800",
      "https://images.unsplash.com/photo-1569580883490-20ddb09da237?w=800"
    ],
    description: "Complete LEGO Classic set with 900 colorful bricks. Perfect for children ages 4+. Includes instruction booklets with multiple building ideas. Develops creativity and problem-solving skills.",
    seller: {
      name: "ToyWorld Express",
      rating: 4.8,
      totalReviews: 298,
      location: "Seattle, WA",
      phone: "+1-555-1234",
      email: "toys@toyworld.com",
      verified: true,
      responseTime: "Within 2 hours",
      memberSince: "May 2020"
    },
    specs: {
      brand: "LEGO",
      pieces: "900",
      ageRange: "4-99 years",
      themes: "Classic Multi-color",
      storage: "Stackable container",
      material: "Plastic"
    },
    features: [
      "900 colorful bricks",
      "Multiple building ideas",
      "Stackable storage",
      "Ages 4 and up",
      "Classic collection",
      "Educational toy"
    ]
  },
  2: {
    id: 2,
    title: "PlayStation 5 Game Bundle",
    category: "Video Games",
    price: 280,
    negotiable: true,
    location: "Boston, MA",
    postedDate: "Dec 11, 2024",
    views: 567,
    referenceId: "TOYS002",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5ef5ce9a35e?w=800",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800"
    ],
    description: "PS5 game bundle including 3 popular titles. Games are in excellent condition. Perfect for PS5 console owners looking to expand their library. Includes physical copies.",
    seller: {
      name: "GameStop Local",
      rating: 4.7,
      totalReviews: 156,
      location: "Boston, MA",
      phone: "+1-555-4567",
      email: "games@gamestop.com",
      verified: true,
      responseTime: "Within 3 hours",
      memberSince: "August 2021"
    },
    specs: {
      brand: "PlayStation",
      console: "PS5",
      count: "3 Games",
      condition: "Like New",
      format: "Physical Copies",
      genre: "Mixed"
    },
    features: [
      "3 popular PS5 titles",
      "Like new condition",
      "Physical copies",
      "All original cases",
      "Manuals included",
      "Great value bundle"
    ]
  }
};

function ToysGamesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = toysData[id];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlistKey = `wishlist_toys_${id}`;
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
    const wishlistKey = `wishlist_toys_${id}`;
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
      <div className="toysgames-details-page-wrapper">
        <div className="toysgames-details-container">
          <button className="back-button" onClick={() => navigate("/toysandgames")}>
            <FaArrowLeft /> Back to Toys & Games
          </button>

          <div className="toysgames-details-content">
            <div className="toysgames-gallery-section">
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

            <div className="toysgames-details-info">
              <div className="category-badge">{product.category}</div>
              <h1 className="product-title">{product.title}</h1>

              <div className="seller-info-preview">
                <div className="seller-avatar">🎮</div>
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

          <div className="toysgames-description-section">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="toysgames-specs-section">
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

          <div className="toysgames-features-section">
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

          <div className="toysgames-additional-info">
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
              <div className="seller-avatar-large">🎮</div>
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

export default ToysGamesDetails;
