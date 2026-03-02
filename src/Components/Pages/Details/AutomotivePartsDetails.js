import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AutomotivePartsDetails.css";
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

const automotiveData = {
  1: {
    id: 1,
    title: "Premium Ceramic Brake Pads Set",
    category: "Brakes",
    price: 85,
    negotiable: false,
    location: "Houston, TX",
    postedDate: "Dec 12, 2024",
    views: 312,
    referenceId: "AUTO001",
    images: [
      "https://images.unsplash.com/photo-1486262715619-3417ca7ea84f?w=800",
      "https://images.unsplash.com/photo-1517420879113-f8bacbe5e2e4?w=800",
      "https://images.unsplash.com/photo-1503765917149-0cf873b70585?w=800"
    ],
    description: "High-quality ceramic brake pads with excellent stopping power and durability. Fits most sedan and SUV models. Reduces brake dust and noise. OEM equivalent performance.",
    seller: {
      name: "AutoParts Pro",
      rating: 4.7,
      totalReviews: 234,
      location: "Houston, TX",
      phone: "+1-555-0789",
      email: "sales@autoparts pro.com",
      verified: true,
      responseTime: "Within 3 hours",
      memberSince: "June 2021"
    },
    specs: {
      brand: "BrakeMaster",
      type: "Ceramic",
      fitment: "Universal",
      thickness: "12mm",
      noise: "Low",
      compatibility: "Most Sedans & SUVs"
    },
    features: [
      "Ceramic material",
      "Low noise operation",
      "Reduced dust",
      "Long lasting",
      "OEM equivalent",
      "Easy installation"
    ]
  },
  2: {
    id: 2,
    title: "LED Headlight Conversion Kit",
    category: "Lighting",
    price: 120,
    negotiable: true,
    location: "Phoenix, AZ",
    postedDate: "Dec 10, 2024",
    views: 456,
    referenceId: "AUTO002",
    images: [
      "https://images.unsplash.com/photo-1487495057714-85e57c1b8334?w=800",
      "https://images.unsplash.com/photo-1486262715619-3417ca7ea84f?w=800"
    ],
    description: "Advanced LED headlight conversion kit with 6000K color temperature. Plug-and-play installation. Significantly brighter than halogen bulbs. Waterproof and long-lasting.",
    seller: {
      name: "LitElights Store",
      rating: 4.8,
      totalReviews: 189,
      location: "Phoenix, AZ",
      phone: "+1-555-0321",
      email: "support@litelights.com",
      verified: true,
      responseTime: "Within 1 hour",
      memberSince: "September 2020"
    },
    specs: {
      brand: "LiteLux",
      type: "LED",
      colorTemp: "6000K",
      brightness: "8000 Lumens",
      power: "25W per bulb",
      warranty: "2 years"
    },
    features: [
      "6000K white light",
      "Brightness 8000 lumens",
      "Plug-and-play",
      "Waterproof",
      "2-year warranty",
      "Energy efficient"
    ]
  }
};

function AutomotivePartsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = automotiveData[id];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlistKey = `wishlist_automotive_${id}`;
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
    const wishlistKey = `wishlist_automotive_${id}`;
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
      <div className="automotive-details-page-wrapper">
        <div className="automotive-details-container">
          <button className="back-button" onClick={() => navigate("/automotiveparts")}>
            <FaArrowLeft /> Back to Automotive Parts
          </button>

          <div className="automotive-details-content">
            <div className="automotive-gallery-section">
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

            <div className="automotive-details-info">
              <div className="category-badge">{product.category}</div>
              <h1 className="product-title">{product.title}</h1>

              <div className="seller-info-preview">
                <div className="seller-avatar">🚗</div>
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

          <div className="automotive-description-section">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="automotive-specs-section">
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

          <div className="automotive-features-section">
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

          <div className="automotive-additional-info">
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
              <div className="seller-avatar-large">🚗</div>
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

export default AutomotivePartsDetails;
