import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SportsOutdoorsDetails.css";
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

const sportsData = {
  1: {
    id: 1,
    title: "Professional Yoga Mat with Carrying Strap",
    category: "Fitness",
    price: 45,
    negotiable: false,
    location: "San Francisco, CA",
    postedDate: "Dec 11, 2024",
    views: 278,
    referenceId: "SPORTS001",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
      "https://images.unsplash.com/photo-1598971457317-530b3359f16d?w=800"
    ],
    description: "Premium non-slip yoga mat made from eco-friendly TPE material. 6mm thickness provides excellent cushioning. Includes carrying strap for easy transport. Perfect for yoga, pilates, and floor exercises.",
    seller: {
      name: "FitLife Gear Store",
      rating: 4.6,
      totalReviews: 145,
      location: "San Francisco, CA",
      phone: "+1-555-0654",
      email: "support@fitlifegear.com",
      verified: true,
      responseTime: "Within 2 hours",
      memberSince: "April 2021"
    },
    specs: {
      brand: "YogaPro",
      material: "TPE Eco-friendly",
      thickness: "6mm",
      length: "72 inches",
      width: "24 inches",
      weight: "2.2 lbs"
    },
    features: [
      "Non-slip surface",
      "Eco-friendly TPE",
      "6mm cushioning",
      "Carrying strap included",
      "Lightweight",
      "Easy to clean"
    ]
  },
  2: {
    id: 2,
    title: "Mountain Bike Helmet with LED Lights",
    category: "Cycling",
    price: 95,
    negotiable: false,
    location: "Denver, CO",
    postedDate: "Dec 9, 2024",
    views: 324,
    referenceId: "SPORTS002",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1608110429206-a2d6aa99f989?w=800"
    ],
    description: "High-quality mountain bike helmet with integrated LED front and rear lights. DOT certified for safety. Adjustable fit system. Excellent ventilation for long rides.",
    seller: {
      name: "CycleMaster Hub",
      rating: 4.9,
      totalReviews: 267,
      location: "Denver, CO",
      phone: "+1-555-0987",
      email: "sales@cyclemasterhub.com",
      verified: true,
      responseTime: "Within 1 hour",
      memberSince: "July 2020"
    },
    specs: {
      brand: "CyclePro Elite",
      type: "Mountain Bike",
      certification: "DOT",
      color: "Matte Black",
      features: "LED lights, ventilation",
      weight: "280g"
    },
    features: [
      "DOT certified",
      "LED front light",
      "LED rear light",
      "Adjustable fit",
      "Great ventilation",
      "Lightweight design"
    ]
  }
};

function SportsOutdoorsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = sportsData[id];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlistKey = `wishlist_sports_${id}`;
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
    const wishlistKey = `wishlist_sports_${id}`;
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
      <div className="sportsoutdoors-details-page-wrapper">
        <div className="sportsoutdoors-details-container">
          <button className="back-button" onClick={() => navigate("/sportsandoutdoors")}>
            <FaArrowLeft /> Back to Sports & Outdoors
          </button>

          <div className="sportsoutdoors-details-content">
            <div className="sportsoutdoors-gallery-section">
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

            <div className="sportsoutdoors-details-info">
              <div className="category-badge">{product.category}</div>
              <h1 className="product-title">{product.title}</h1>

              <div className="seller-info-preview">
                <div className="seller-avatar">⛹️</div>
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

          <div className="sportsoutdoors-description-section">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="sportsoutdoors-specs-section">
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

          <div className="sportsoutdoors-features-section">
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

          <div className="sportsoutdoors-additional-info">
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
              <div className="seller-avatar-large">⛹️</div>
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

export default SportsOutdoorsDetails;
