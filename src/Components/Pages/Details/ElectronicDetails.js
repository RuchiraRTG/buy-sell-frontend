import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ElectronicDetails.css";
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaComments, 
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
    <div className="electronic-details-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/electronics')}>
        <FaArrowLeft /> Back to Electronics
      </button>

      <div className="electronic-details-content">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image-container">
            <img 
              src={electronic.images[currentImageIndex]} 
              alt={electronic.title}
              className="main-image"
            />
            <button className="image-nav-button prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="image-nav-button next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            <div className="image-counter">
              {currentImageIndex + 1}/{electronic.images.length}
            </div>
          </div>
          
          <div className="thumbnail-gallery">
            {electronic.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${electronic.title} ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info">
          <div className="product-header">
            <h1 className="product-title">{electronic.title}</h1>
            <div className="product-meta">
              <span className="views">
                <FaEye /> {electronic.views} views
              </span>
              <span className="posted-date">
                <FaClock /> Posted {new Date(electronic.postedDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="price-section">
            <div className="price-info">
              <span className="currency">Rs.</span>
              <span className="price">{electronic.price.toLocaleString()}</span>
              {electronic.negotiable && <span className="negotiable">Negotiable</span>}
            </div>
            <div className="action-buttons">
              <button 
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <FaHeart />
              </button>
              <button className="share-button" onClick={handleShare}>
                <FaShare />
              </button>
            </div>
          </div>

          {/* Quick Info */}
          <div className="quick-info">
            <div className="info-item">
              <span className="label">Category</span>
              <span className="value">{electronic.category}</span>
            </div>
            <div className="info-item">
              <span className="label">Condition</span>
              <span className="value condition-badge">{electronic.condition}</span>
            </div>
            <div className="info-item">
              <span className="label">Location</span>
              <span className="value">
                <FaMapMarkerAlt /> {electronic.seller.location}
              </span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="contact-buttons">
            <button className="whatsapp-button" onClick={handleWhatsAppContact}>
              <FaWhatsapp /> Chat on WhatsApp
            </button>
            <button className="chat-button" onClick={handleShowContact}>
              <FaComments /> Chat with Owner
            </button>
          </div>

          {/* Seller Contact Info */}
          {showSellerContact && (
            <div className="contact-reveal">
              <div className="contact-info">
                <h4>Contact Information</h4>
                <div className="contact-item">
                  <FaPhone /> {electronic.seller.phone}
                </div>
                <div className="contact-item">
                  <FaEnvelope /> {electronic.seller.email}
                </div>
              </div>
            </div>
          )}

          {/* Reference */}
          <div className="reference-section">
            <p className="reference">Ref: {electronic.reference}</p>
          </div>
        </div>

        {/* Seller Information Sidebar */}
        <div className="seller-info">
          <div className="seller-header">
            <div className="seller-avatar">
              <img 
                src={`https://ui-avatars.com/api/?name=${electronic.seller.name}&background=6366f1&color=fff`}
                alt={electronic.seller.name}
              />
              {electronic.seller.verified && (
                <div className="verified-badge">
                  <FaCheckCircle />
                </div>
              )}
            </div>
            <div className="seller-details">
              <h3>{electronic.seller.name}</h3>
              <div className="seller-rating">
                <div className="stars">
                  {[...Array(Math.floor(electronic.seller.rating))].map((_, i) => (
                    <FaStar key={i} style={{ color: '#f59e0b' }} />
                  ))}
                </div>
                <span className="rating-text">{electronic.seller.rating} ({electronic.seller.totalReviews} reviews)</span>
              </div>
              <p className="member-since">
                <FaCheckCircle style={{ color: '#059669' }} /> Member since {electronic.seller.memberSince}
              </p>
            </div>
          </div>

          {/* Seller Stats */}
          <div className="seller-stats">
            <div className="stat-item">
              <span className="stat-label">Response Time</span>
              <span className="stat-value">{electronic.seller.responseTime}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Location</span>
              <span className="stat-value">
                <FaMapMarkerAlt /> {electronic.seller.location}
              </span>
            </div>
          </div>

          <button 
            className="view-profile-button"
            onClick={() => navigate('/profile')}
          >
            View All Ads by {electronic.seller.name.split(' ')[0]}
          </button>
        </div>
      </div>

      {/* Product Details Section - Full Width */}
      <div className="product-details-section">
        {/* Description */}
        <div className="description-section">
          <h3>Description</h3>
          <p className="description">{electronic.description}</p>
        </div>

        {/* Features */}
        <div className="features-section">
          <h3>Key Features</h3>
          <div className="features-grid">
            {electronic.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle /> {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="specifications-section">
          <h3>Specifications</h3>
          <div className="specs-container">
            <div className="specs-grid">
              {Object.entries(electronic.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <FaMicrochip />
                  <div>
                    <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Policy Section */}
      <div className="company-policy-section">
        <h3>Company Policy</h3>
        <div className="policy-content">
          <div className="policy-item">
            <FaShieldAlt /> We only build relationships with customers and are not responsible for any errors.
          </div>
          <div className="policy-item">
            <FaCheckCircle /> All transactions are between buyer and seller directly.
          </div>
          <div className="policy-item">
            <FaShieldAlt /> Please verify product condition and authenticity before purchase.
          </div>
          <div className="policy-item">
            <FaCheckCircle /> We recommend meeting in safe, public locations for exchanges.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicDetails;
