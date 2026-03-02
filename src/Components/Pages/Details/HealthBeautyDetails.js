import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./HealthBeautyDetails.css";
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

// Sample health and beauty product data
const beautyData = {
  1: {
    id: 1,
    title: "Vitamin C Brightening Face Serum",
    category: "Skincare",
    price: 45,
    negotiable: false,
    location: "New York, NY",
    postedDate: "Dec 10, 2024",
    views: 234,
    referenceId: "BEAUTY001",
    images: [
      "https://images.unsplash.com/photo-1631730486211-5b40a54688ea?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8b?w=800",
      "https://images.unsplash.com/photo-1556413713-5d5adba37b75?w=800"
    ],
    description: "Professional-grade Vitamin C serum for brightening and anti-aging. Reduces dark spots, improves skin texture, and boosts collagen production. Suitable for all skin types. Cruelty-free and vegan.",
    seller: {
      name: "Beauty Plus Store",
      rating: 4.8,
      totalReviews: 156,
      location: "New York, NY",
      phone: "+1-555-0123",
      email: "contact@beautyplus.com",
      verified: true,
      responseTime: "Within 2 hours",
      memberSince: "March 2022"
    },
    specs: {
      brand: "SkinGlow",
      volume: "30ml",
      type: "Serum",
      ingredients: "Vitamin C 20%, Hyaluronic Acid",
      skinType: "All Types",
      expiry: "36 months"
    },
    features: [
      "Brightens dull skin",
      "Reduces dark spots",
      "Anti-aging formula",
      "Hyaluronic acid infused",
      "Cruelty-free",
      "Vegan product"
    ]
  },
  2: {
    id: 2,
    title: "Sonic Face Cleansing Brush",
    category: "Beauty Tools",
    price: 89,
    negotiable: false,
    location: "Los Angeles, CA",
    postedDate: "Dec 8, 2024",
    views: 189,
    referenceId: "BEAUTY002",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
      "https://images.unsplash.com/photo-1556413713-5d5adba37b75?w=800"
    ],
    description: "Professional sonic facial cleansing brush with 3 speed settings and 5 brush heads. Deep cleansing with gentle vibrations. USB rechargeable, waterproof design.",
    seller: {
      name: "Tech Beauty Hub",
      rating: 4.9,
      totalReviews: 287,
      location: "Los Angeles, CA",
      phone: "+1-555-0456",
      email: "support@techbeautyhub.com",
      verified: true,
      responseTime: "Within 1 hour",
      memberSince: "January 2021"
    },
    specs: {
      brand: "BeautyTech Pro",
      power: "5V USB Rechargeable",
      speeds: "3 modes",
      brushes: "5 replaceable heads",
      battery: "2000mAh",
      waterproof: "IPX7"
    },
    features: [
      "3 speed modes",
      "5 replaceable brush heads",
      "USB rechargeable",
      "Waterproof design",
      "2-hour battery life",
      "Gentle on skin"
    ]
  }
};

function HealthBeautyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = beautyData[id];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlistKey = `wishlist_beauty_${id}`;
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
    const wishlistKey = `wishlist_beauty_${id}`;
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
      <div className="healthbeauty-details-page-wrapper">
        <div className="healthbeauty-details-container">
          <button className="back-button" onClick={() => navigate("/healthbeauty")}>
            <FaArrowLeft /> Back to Health & Beauty
          </button>

          <div className="healthbeauty-details-content">
            {/* Gallery Section */}
            <div className="healthbeauty-gallery-section">
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

            {/* Details Section */}
            <div className="healthbeauty-details-info">
              <div className="category-badge">{product.category}</div>
              <h1 className="product-title">{product.title}</h1>

              <div className="seller-info-preview">
                <div className="seller-avatar">👤</div>
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

          {/* Description */}
          <div className="healthbeauty-description-section">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="healthbeauty-specs-section">
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

          {/* Features */}
          <div className="healthbeauty-features-section">
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

          {/* Additional Info */}
          <div className="healthbeauty-additional-info">
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

          {/* Seller Card */}
          <div className="seller-details-card">
            <div className="seller-header">
              <div className="seller-avatar-large">👤</div>
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

export default HealthBeautyDetails;
