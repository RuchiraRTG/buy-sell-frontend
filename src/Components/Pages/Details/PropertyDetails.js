import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyDetails.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
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
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHome,
  FaBuilding,
  FaParking
} from "react-icons/fa";

// Sample detailed property data
const propertyDetailsData = {
  1: {
    id: 1,
    title: "Modern Villa with Pool",
    type: "House",
    category: "Residential",
    price: 450000,
    negotiable: true,
    images: [
      "https://via.placeholder.com/600x600?text=Modern+Villa+Front",
      "https://via.placeholder.com/600x600?text=Modern+Villa+Pool",
      "https://via.placeholder.com/600x600?text=Modern+Villa+Interior",
      "https://via.placeholder.com/600x600?text=Modern+Villa+Garden"
    ],
    description: "Stunning modern villa with a beautiful swimming pool in a prime location. Features include spacious living areas, modern kitchen, landscaped garden, and ample parking. Perfect for families looking for luxury living.",
    specifications: {
      size: "3500 sqft",
      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
      parking: "2 car garage",
      yearBuilt: "2023"
    },
    location: "Colombo 7, Sri Lanka",
    seller: {
      name: "Nimal Fernando",
      rating: 4.9,
      totalReviews: 52,
      joinedDate: "2022-08-20",
      location: "Colombo",
      responseTime: "Usually responds within 1 hour",
      phone: "+94771234567",
      email: "nimal@example.com",
      verified: true,
      memberSince: "2 years"
    },
    features: [
      "Swimming Pool",
      "Modern Kitchen",
      "Landscaped Garden",
      "Security System",
      "Air Conditioning",
      "Solar Panels",
      "High-Speed Internet",
      "Backup Generator"
    ],
    postedDate: "2025-11-05",
    views: 342,
    reference: "P12345678901234567"
  },
  2: {
    id: 2,
    title: "Downtown Apartment",
    type: "Apartment",
    category: "Residential",
    price: 185000,
    negotiable: true,
    images: [
      "https://via.placeholder.com/600x600?text=Apartment+Living",
      "https://via.placeholder.com/600x600?text=Apartment+Bedroom",
      "https://via.placeholder.com/600x600?text=Apartment+Kitchen",
      "https://via.placeholder.com/600x600?text=Apartment+Balcony"
    ],
    description: "Recently renovated apartment in the heart of Kandy. Walking distance to shops, restaurants, and public transport. Perfect for young professionals or small families.",
    specifications: {
      size: "1200 sqft",
      bedrooms: 2,
      bathrooms: 2,
      floors: 1,
      parking: "1 spot",
      yearBuilt: "2018"
    },
    location: "Kandy City Center",
    seller: {
      name: "Sanduni Perera",
      rating: 4.6,
      totalReviews: 28,
      joinedDate: "2023-03-15",
      location: "Kandy",
      responseTime: "Usually responds within 3 hours",
      phone: "+94762345678",
      email: "sanduni@example.com",
      verified: true,
      memberSince: "1 year"
    },
    features: [
      "City View",
      "Renovated Kitchen",
      "Built-in Wardrobes",
      "Balcony",
      "24/7 Security",
      "Elevator Access",
      "Gym Facilities",
      "Visitor Parking"
    ],
    postedDate: "2025-10-28",
    views: 189,
    reference: "P23456789012345678"
  }
};

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showSellerContact, setShowSellerContact] = useState(false);

  useEffect(() => {
    const propertyData = propertyDetailsData[id];
    if (propertyData) {
      setProperty(propertyData);
    } else {
      navigate('/lands');
    }
  }, [id, navigate]);

  if (!property) {
    return <div className="loading">Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      });
    } else {
      alert("Share link: " + window.location.href);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in your property: ${property.title} - $${property.price.toLocaleString()}`;
    window.open(`https://wa.me/${property.seller.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <Navbar />
      <div className="property-details-page-wrapper">
        <div className="property-details-container">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate('/lands')}>
            <FaArrowLeft /> Back to Properties
          </button>

        <div className="property-details-content">
          {/* Left Side - Image Gallery */}
          <div className="property-gallery-section">
            <div className="main-image-container">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.title}
                className="main-image"
              />
              
              {/* Image Navigation */}
              {property.images.length > 1 && (
                <>
                  <button className="image-nav prev" onClick={prevImage}>
                    <FaChevronLeft />
                  </button>
                  <button className="image-nav next" onClick={nextImage}>
                    <FaChevronRight />
                  </button>
                  <div className="image-counter">
                    {currentImageIndex + 1} / {property.images.length}
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
              {property.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.title} ${index + 1}`}
                  className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Property Details */}
          <div className="property-info-section">
            {/* Header */}
            <div className="property-header">
              <div className="property-badge">{property.category}</div>
              <h1 className="property-title">{property.title}</h1>
              <div className="property-meta">
                <span className="property-views">
                  <FaEye /> {property.views} views
                </span>
                <span className="property-posted">
                  <FaClock /> Posted {new Date(property.postedDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="property-price-section">
              <div className="property-price">${property.price.toLocaleString()}</div>
              {property.negotiable && <span className="negotiable-tag">Negotiable</span>}
            </div>

            {/* Location */}
            <div className="property-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>{property.location}</span>
            </div>

            {/* Quick Specs */}
            <div className="quick-specs">
              {property.specifications.bedrooms > 0 && (
                <div className="spec-item">
                  <FaBed className="spec-icon" />
                  <span>{property.specifications.bedrooms} Bedrooms</span>
                </div>
              )}
              {property.specifications.bathrooms > 0 && (
                <div className="spec-item">
                  <FaBath className="spec-icon" />
                  <span>{property.specifications.bathrooms} Bathrooms</span>
                </div>
              )}
              <div className="spec-item">
                <FaRulerCombined className="spec-icon" />
                <span>{property.specifications.size}</span>
              </div>
              {property.specifications.parking && (
                <div className="spec-item">
                  <FaParking className="spec-icon" />
                  <span>{property.specifications.parking}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn-primary" onClick={handleWhatsApp}>
                <FaWhatsapp /> WhatsApp
              </button>
              <button className="btn-secondary" onClick={() => setShowSellerContact(!showSellerContact)}>
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
                  <a href={`tel:${property.seller.phone}`}>{property.seller.phone}</a>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <a href={`mailto:${property.seller.email}`}>{property.seller.email}</a>
                </div>
              </div>
            )}

            {/* Seller Info */}
            <div className="seller-card">
              <h3 className="section-title">Seller Information</h3>
              <div className="seller-info">
                <div className="seller-avatar">
                  {property.seller.name.charAt(0)}
                </div>
                <div className="seller-details">
                  <div className="seller-name">
                    {property.seller.name}
                    {property.seller.verified && (
                      <FaCheckCircle className="verified-icon" />
                    )}
                  </div>
                  <div className="seller-rating">
                    <FaStar className="star-icon" />
                    <span>{property.seller.rating}</span>
                    <span className="reviews-count">({property.seller.totalReviews} reviews)</span>
                  </div>
                  <div className="seller-meta">
                    <FaCalendarAlt /> Member since {property.seller.memberSince}
                  </div>
                  <div className="seller-response">
                    {property.seller.responseTime}
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
                  <li>Check the property in person before making payment</li>
                  <li>Verify all legal documents</li>
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
            <p className="property-description">{property.description}</p>
          </div>

          {/* Specifications */}
          <div className="detail-section">
            <h2 className="section-title">Specifications</h2>
            <div className="specs-grid">
              {Object.entries(property.specifications).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2 className="section-title">Features & Amenities</h2>
            <div className="features-grid">
              {property.features.map((feature, index) => (
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
            <span className="reference-number">{property.reference}</span>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default PropertyDetails;
