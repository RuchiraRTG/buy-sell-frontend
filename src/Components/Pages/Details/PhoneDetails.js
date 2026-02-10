import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PhoneDetails.css";
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
  FaMicrochip,
  FaBatteryFull,
  FaCamera,
  FaMemory,
  FaWifi,
  FaSimCard
} from "react-icons/fa";

// Sample detailed phone data - in real app, this would come from API
const phoneDetailsData = {
  1: {
    id: 1,
    title: "iPhone 15 Pro 256GB",
    model: "iPhone 15 Pro",
    brand: "Apple",
    storage: "256GB",
    ram: "8GB",
    color: "Natural Titanium",
    condition: "Brand New",
    price: 1200,
    negotiable: true,
    images: [
      "/src/Assets/Img/iPhone15Pro.webp",
      "https://via.placeholder.com/600x600?text=iPhone+15+Pro+Back",
      "https://via.placeholder.com/600x600?text=iPhone+15+Pro+Side",
      "https://via.placeholder.com/600x600?text=iPhone+15+Pro+Box"
    ],
    description: "Brand new iPhone 15 Pro in Natural Titanium. Sealed box with all original accessories. Never used, purchased from Apple Store with full warranty.",
    specifications: {
      display: "6.1-inch Super Retina XDR",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      simCard: "Dual SIM (nano-SIM and eSIM)"
    },
    seller: {
      name: "Pamudu Perera",
      rating: 4.8,
      totalReviews: 47,
      joinedDate: "2023-01-15",
      location: "Piliyandala, Colombo",
      responseTime: "Usually responds within 2 hours",
      phone: "+94712345678",
      email: "pamudu@example.com",
      verified: true,
      memberSince: "2 years"
    },
    features: [
      "Original Apple Warranty",
      "All Original Accessories",
      "Factory Sealed",
      "International Model",
      "Face ID",
      "MagSafe Compatible"
    ],
    postedDate: "2025-09-28",
    views: 156,
    reference: "W34231725092810233"
  }
};

function PhoneDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showSellerContact, setShowSellerContact] = useState(false);

  useEffect(() => {
    // In real app, fetch from API
    const phoneData = phoneDetailsData[id];
    if (phoneData) {
      setPhone(phoneData);
    } else {
      // Handle phone not found
      navigate('/phones');
    }
  }, [id, navigate]);

  if (!phone) {
    return <div className="loading">Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === phone.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? phone.images.length - 1 : prev - 1
    );
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in your ${phone.title} listed for Rs.${phone.price.toLocaleString()}. Is it still available?`;
    const whatsappUrl = `https://wa.me/${phone.seller.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShowContact = () => {
    setShowSellerContact(!showSellerContact);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: phone.title,
        text: `Check out this ${phone.title} for Rs.${phone.price.toLocaleString()}`,
        url: window.location.href
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="phone-details-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/phones')}>
        <FaArrowLeft /> Back to Phones
      </button>

      <div className="phone-details-content">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image-container">
            <img 
              src={phone.images[currentImageIndex]} 
              alt={phone.title}
              className="main-image"
            />
            <button className="image-nav prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="image-nav next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            <div className="image-counter">
              {currentImageIndex + 1}/{phone.images.length}
            </div>
          </div>
          
          <div className="thumbnail-gallery">
            {phone.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${phone.title} ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info">
          <div className="product-header">
            <h1 className="product-title">{phone.title}</h1>
            <div className="product-meta">
              <span className="views">
                <FaEye /> {phone.views} views
              </span>
              <span className="posted-date">
                <FaClock /> Posted {new Date(phone.postedDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="price-section">
            <div className="price-info">
              <span className="currency">Rs.</span>
              <span className="price">{phone.price.toLocaleString()}</span>
              {phone.negotiable && <span className="negotiable">Negotiable</span>}
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
              <span className="label">Type</span>
              <span className="value">Phones & tablets</span>
            </div>
            <div className="info-item">
              <span className="label">Condition</span>
              <span className="value condition-badge">{phone.condition}</span>
            </div>
            <div className="info-item">
              <span className="label">Location</span>
              <span className="value">
                <FaMapMarkerAlt /> {phone.seller.location}
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
                  <FaPhone /> {phone.seller.phone}
                  <button 
                    className="reveal-button"
                    onClick={() => alert(`Phone: ${phone.seller.phone}`)}
                  >
                    Click to reveal
                  </button>
                </div>
                <div className="contact-item">
                  <FaEnvelope /> {phone.seller.email}
                </div>
              </div>
            </div>
          )}

          {/* Reference ID */}
          <div className="reference-section">
            <span className="reference">Ref. {phone.reference}</span>
          </div>
        </div>

        {/* Seller Information */}
        <div className="seller-info">
          <div className="seller-header">
            <div className="seller-avatar">
              <img 
                src={`https://ui-avatars.com/api/?name=${phone.seller.name}&background=6366f1&color=fff`}
                alt={phone.seller.name}
              />
              {phone.seller.verified && (
                <div className="verified-badge">
                  <FaCheckCircle />
                </div>
              )}
            </div>
            <div className="seller-details">
              <h3>{phone.seller.name}</h3>
              <div className="seller-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < Math.floor(phone.seller.rating) ? "#fbbf24" : "#e5e7eb"}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {phone.seller.rating} ({phone.seller.totalReviews} reviews)
                </span>
              </div>
              <div className="member-since">
                <FaCalendarAlt /> Member since {phone.seller.memberSince}
              </div>
            </div>
          </div>

          <div className="seller-stats">
            <div className="stat-item">
              <span className="stat-label">Response Time</span>
              <span className="stat-value">{phone.seller.responseTime}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Location</span>
              <span className="stat-value">
                <FaMapMarkerAlt /> {phone.seller.location}
              </span>
            </div>
          </div>

          <div className="seller-actions">
            <button className="view-profile-button">
              View All Ads by {phone.seller.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details-section">
        {/* Description */}
        <div className="description-section">
          <h3>Description</h3>
          <p className="description">{phone.description}</p>
        </div>

        {/* Features */}
        <div className="features-section">
          <h3>Key Features</h3>
          <div className="features-grid">
            {phone.features.map((feature, index) => (
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
              <div className="spec-item">
                <FaMicrochip />
                <div>
                  <span className="spec-label">Processor</span>
                  <span className="spec-value">{phone.specifications.processor}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaMemory />
                <div>
                  <span className="spec-label">RAM</span>
                  <span className="spec-value">{phone.ram}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaMemory />
                <div>
                  <span className="spec-label">Storage</span>
                  <span className="spec-value">{phone.storage}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaCamera />
                <div>
                  <span className="spec-label">Camera</span>
                  <span className="spec-value">{phone.specifications.camera}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaBatteryFull />
                <div>
                  <span className="spec-label">Battery</span>
                  <span className="spec-value">{phone.specifications.battery}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaWifi />
                <div>
                  <span className="spec-label">Connectivity</span>
                  <span className="spec-value">{phone.specifications.connectivity}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaSimCard />
                <div>
                  <span className="spec-label">SIM Card</span>
                  <span className="spec-value">{phone.specifications.simCard}</span>
                </div>
              </div>
              <div className="spec-item">
                <FaCamera />
                <div>
                  <span className="spec-label">Display</span>
                  <span className="spec-value">{phone.specifications.display}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Policy Section */}
      <div className="company-policy-section">
        <h3>Company Policy</h3>
        <div className="policy-content">
          <div className="policy-item">
            <FaShieldAlt />
            <span>We only build relationships with customers and are not responsible for any errors.</span>
          </div>
          <div className="policy-item">
            <FaCheckCircle />
            <span>All transactions are between buyer and seller directly.</span>
          </div>
          <div className="policy-item">
            <FaShieldAlt />
            <span>Please verify product condition and authenticity before purchase.</span>
          </div>
          <div className="policy-item">
            <FaCheckCircle />
            <span>We recommend meeting in safe, public locations for exchanges.</span>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="share-section">
        <h4>Share this ad</h4>
        <div className="share-buttons">
          <button className="social-share facebook">f</button>
          <button className="social-share twitter">𝕏</button>
          <button className="social-share linkedin">in</button>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;