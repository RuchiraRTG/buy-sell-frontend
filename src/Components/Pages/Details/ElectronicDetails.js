import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ElectronicDetails.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaShare, 
  FaHeart, 
  FaShieldAlt,
  FaCheckCircle, 
  FaClock, 
  FaEye,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaMicrochip
} from "react-icons/fa";

// Sample detailed electronic data
const electronicDetailsData = {
  1: {
    id: 1,
    title: "MacBook Pro 14\" M3 512GB",
    category: "Laptop",
    brand: "Apple",
    model: "MacBook Pro 14-inch",
    storage: "512GB SSD",
    ram: "16GB",
    color: "Space Black",
    condition: "Excellent",
    price: 1800,
    negotiable: true,
    images: [
      "https://via.placeholder.com/600x600?text=MacBook+Pro+Front",
      "https://via.placeholder.com/600x600?text=MacBook+Pro+Back",
      "https://via.placeholder.com/600x600?text=MacBook+Pro+Side",
      "https://via.placeholder.com/600x600?text=MacBook+Pro+Keyboard"
    ],
    description: "Excellent condition MacBook Pro 14-inch with M3 chip. Light usage, no scratches or damage. Includes original charger and box. Perfect for developers and content creators.",
    specifications: {
      processor: "Apple M3 Chip",
      ram: "16GB Unified Memory",
      storage: "512GB SSD",
      display: "14-inch Liquid Retina XDR",
      battery: "Up to 17 hours",
      connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt ports"
    },
    seller: {
      name: "Ruchira Silva",
      rating: 4.7,
      totalReviews: 32,
      joinedDate: "2023-05-10",
      location: "Colombo 7, Colombo",
      responseTime: "Usually responds within 1 hour",
      phone: "+94761234567",
      email: "ruchira@example.com",
      verified: true,
      memberSince: "1 year"
    },
    features: [
      "1 Year Warranty",
      "Original Charger Included",
      "Original Box & Accessories",
      "No Screen Scratches",
      "Full Battery Health",
      "Fully Updated OS"
    ],
    postedDate: "2025-10-15",
    views: 234,
    reference: "E67891234567890123"
  }
};

function ElectronicDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [electronic, setElectronic] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showSellerContact, setShowSellerContact] = useState(false);

  useEffect(() => {
    const electronicData = electronicDetailsData[id];
    if (electronicData) {
      setElectronic(electronicData);
    } else {
      navigate('/electronics');
    }
  }, [id, navigate]);

  if (!electronic) {
    return <div className="loading">Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === electronic.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? electronic.images.length - 1 : prev - 1
    );
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in your ${electronic.title} listed for Rs.${electronic.price.toLocaleString()}. Is it still available?`;
    const whatsappUrl = `https://wa.me/${electronic.seller.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShowContact = () => {
    setShowSellerContact(!showSellerContact);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: electronic.title,
        text: `Check out this ${electronic.title} for Rs.${electronic.price.toLocaleString()}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Navbar />
      <div className="electronic-details-page-wrapper">
        <div className="electronic-details-container">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate('/electronics')}>
            <FaArrowLeft /> Back to Electronics
          </button>

          <div className="electronic-details-content">
            {/* Left Side - Image Gallery */}
            <div className="electronic-gallery-section">
              <div className="main-image-container">
                <img 
                  src={electronic.images[currentImageIndex]} 
                  alt={electronic.title}
                  className="main-image"
                />
                
                {/* Image Navigation */}
                {electronic.images.length > 1 && (
                  <>
                    <button className="image-nav prev" onClick={prevImage}>
                      <FaChevronLeft />
                    </button>
                    <button className="image-nav next" onClick={nextImage}>
                      <FaChevronRight />
                    </button>
                    <div className="image-counter">
                      {currentImageIndex + 1} / {electronic.images.length}
                    </div>
                  </>
                )}

                {/* Action Buttons on Image */}
                <button 
                  className={`like-button ${isLiked ? 'liked' : ''}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <FaHeart />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="thumbnail-gallery">
                {electronic.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${electronic.title} ${index + 1}`}
                    className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="electronic-info-section">
              {/* Header */}
              <div className="electronic-header">
                <div className="electronic-badge">{electronic.category}</div>
                <h1 className="electronic-title">{electronic.title}</h1>
                <div className="electronic-meta">
                  <span className="electronic-views">
                    <FaEye /> {electronic.views} views
                  </span>
                  <span className="electronic-posted">
                    <FaClock /> Posted {new Date(electronic.postedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="electronic-price-section">
                <div className="electronic-price">Rs.{electronic.price.toLocaleString()}</div>
                {electronic.negotiable && <span className="negotiable-tag">Negotiable</span>}
              </div>

              {/* Location */}
              <div className="electronic-location">
                <FaMapMarkerAlt className="location-icon" />
                <span>{electronic.seller.location}</span>
              </div>

              {/* Quick Specs */}
              <div className="quick-specs">
                <div className="spec-item">
                  <FaMicrochip className="spec-icon" />
                  <span>{electronic.category}</span>
                </div>
                <div className="spec-item">
                  <FaCheckCircle className="spec-icon" />
                  <span>{electronic.condition}</span>
                </div>
                <div className="spec-item">
                  <FaStar className="spec-icon" />
                  <span>{electronic.brand}</span>
                </div>
                <div className="spec-item">
                  <FaMicrochip className="spec-icon" />
                  <span>{electronic.model}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="btn-primary" onClick={handleWhatsAppContact}>
                  <FaWhatsapp /> WhatsApp
                </button>
                <button className="btn-secondary" onClick={handleShowContact}>
                  <FaPhone /> Show Number
                </button>
                <button className="btn-outline" onClick={handleShare}>
                  <FaShare /> Share
                </button>
              </div>

              {/* Show Contact Info */}
              {showSellerContact && (
                <div className="contact-info-box">
                  <div className="contact-item">
                    <FaPhone />
                    <a href={`tel:${electronic.seller.phone}`}>{electronic.seller.phone}</a>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope />
                    <a href={`mailto:${electronic.seller.email}`}>{electronic.seller.email}</a>
                  </div>
                </div>
              )}

              {/* Seller Info */}
              <div className="seller-card">
                <h3 className="section-title">Seller Information</h3>
                <div className="seller-info">
                  <div className="seller-avatar">
                    {electronic.seller.name.charAt(0)}
                  </div>
                  <div className="seller-details">
                    <div className="seller-name">
                      {electronic.seller.name}
                      {electronic.seller.verified && (
                        <FaCheckCircle className="verified-icon" />
                      )}
                    </div>
                    <div className="seller-rating">
                      <FaStar className="star-icon" />
                      <span>{electronic.seller.rating}</span>
                      <span className="reviews-count">({electronic.seller.totalReviews} reviews)</span>
                    </div>
                    <div className="seller-meta">
                      <FaCalendarAlt /> Member since {electronic.seller.memberSince}
                    </div>
                    <div className="seller-response">
                      {electronic.seller.responseTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="safety-tips">
                <FaShieldAlt className="safety-icon" />
                <div className="safety-content">
                  <h4>Safety Tips</h4>
                  <ul>
                    <li>Meet seller at a safe public location</li>
                    <li>Check the product in person before making payment</li>
                    <li>Verify the condition matches description</li>
                    <li>Never transfer money without proper verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Sections */}
          <div className="full-width-sections">
            {/* Description */}
            <div className="detail-section">
              <h2 className="section-title">Description</h2>
              <p className="electronic-description">{electronic.description}</p>
            </div>

            {/* Specifications */}
            <div className="detail-section">
              <h2 className="section-title">Specifications</h2>
              <div className="specs-grid">
                {Object.entries(electronic.specifications).map(([key, value]) => (
                  <div key={key} className="spec-row">
                    <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="detail-section">
              <h2 className="section-title">Features & Amenities</h2>
              <div className="features-grid">
                {electronic.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reference Number */}
            <div className="reference-section">
              <span className="reference-label">Reference ID:</span>
              <span className="reference-number">{electronic.reference}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ElectronicDetails;
