import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VehicleDetails.css";
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
  FaCar,
  FaTachometerAlt,
  FaGasPump,
  FaCog
} from "react-icons/fa";

// Sample detailed vehicle data
const vehicleDetailsData = {
  1: {
    id: 1,
    title: "Toyota Land Cruiser Prado",
    brand: "Toyota",
    type: "SUV",
    price: 45000,
    negotiable: true,
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
      "https://images.unsplash.com/photo-1605559424843-9e4c3ca4628d?w=600",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600"
    ],
    description: "Well-maintained Toyota Land Cruiser Prado with full service history. This premium SUV offers exceptional off-road capabilities, luxury interior, and advanced safety features. Perfect for families and adventure enthusiasts. Regular maintenance records available.",
    specifications: {
      year: "2020",
      mileage: "45,000 km",
      fuelType: "Diesel",
      transmission: "Automatic",
      color: "White Pearl",
      engineSize: "2.8L",
      seats: "7"
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
      "Full Service History",
      "Original Paint",
      "New Tires",
      "Air Conditioning",
      "Power Steering",
      "ABS Brakes",
      "Sunroof",
      "Leather Interior"
    ],
    postedDate: "2025-11-05",
    views: 342,
    reference: "V12345678901234567"
  },
  2: {
    id: 2,
    title: "Honda Civic 2022",
    brand: "Honda",
    type: "Sedan",
    price: 28000,
    negotiable: true,
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
      "https://images.unsplash.com/photo-1605559424843-9e4c3ca4628d?w=600"
    ],
    description: "Latest Honda Civic with advanced safety features and fuel-efficient engine. Perfect for city driving with excellent fuel economy. Low mileage, pristine condition. All original documents and warranty transfer available.",
    specifications: {
      year: "2022",
      mileage: "12,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      color: "Metallic Gray",
      engineSize: "1.5L",
      seats: "5"
    },
    location: "Gampaha, Sri Lanka",
    seller: {
      name: "Sanduni Perera",
      rating: 4.6,
      totalReviews: 28,
      joinedDate: "2023-03-15",
      location: "Gampaha",
      responseTime: "Usually responds within 3 hours",
      phone: "+94762345678",
      email: "sanduni@example.com",
      verified: true,
      memberSince: "1 year"
    },
    features: [
      "Factory Warranty",
      "Zero Accident History",
      "Original Paperwork",
      "Cruise Control",
      "Rear Camera",
      "Power Windows",
      "Touch Screen Display",
      "Bluetooth Connectivity"
    ],
    postedDate: "2025-10-28",
    views: 189,
    reference: "V23456789012345678"
  }
};

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showSellerContact, setShowSellerContact] = useState(false);

  useEffect(() => {
    const vehicleData = vehicleDetailsData[id];
    if (vehicleData) {
      setVehicle(vehicleData);
    } else {
      navigate('/vehical');
    }
  }, [id, navigate]);

  if (!vehicle) {
    return <div className="loading">Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: vehicle.title,
        text: vehicle.description,
        url: window.location.href,
      });
    } else {
      alert("Share link: " + window.location.href);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in your vehicle: ${vehicle.title} - Rs.${vehicle.price.toLocaleString()}`;
    window.open(`https://wa.me/${vehicle.seller.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <Navbar />
      <div className="vehicle-details-page-wrapper">
        <div className="vehicle-details-container">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate('/vehicles')}>
            <FaArrowLeft /> Back to Vehicles
          </button>

        <div className="vehicle-details-content">
          {/* Left Side - Image Gallery */}
          <div className="vehicle-gallery-section">
            <div className="main-image-container">
              <img 
                src={vehicle.images[currentImageIndex]} 
                alt={vehicle.title}
                className="main-image"
              />
              
              {/* Image Navigation */}
              {vehicle.images.length > 1 && (
                <>
                  <button className="image-nav prev" onClick={prevImage}>
                    <FaChevronLeft />
                  </button>
                  <button className="image-nav next" onClick={nextImage}>
                    <FaChevronRight />
                  </button>
                  <div className="image-counter">
                    {currentImageIndex + 1} / {vehicle.images.length}
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
              {vehicle.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${vehicle.title} ${index + 1}`}
                  className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Vehicle Details */}
          <div className="vehicle-info-section">
            {/* Header */}
            <div className="vehicle-header">
              <div className="vehicle-badge">{vehicle.type}</div>
              <h1 className="vehicle-title">{vehicle.title}</h1>
              <div className="vehicle-meta">
                <span className="vehicle-views">
                  <FaEye /> {vehicle.views} views
                </span>
                <span className="vehicle-posted">
                  <FaClock /> Posted {new Date(vehicle.postedDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="vehicle-price-section">
              <div className="vehicle-price">Rs.{vehicle.price.toLocaleString()}</div>
              {vehicle.negotiable && <span className="negotiable-tag">Negotiable</span>}
            </div>

            {/* Location */}
            <div className="vehicle-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>{vehicle.location}</span>
            </div>

            {/* Quick Specs */}
            <div className="quick-specs">
              <div className="spec-item">
                <FaCalendarAlt className="spec-icon" />
                <span>{vehicle.specifications.year}</span>
              </div>
              <div className="spec-item">
                <FaTachometerAlt className="spec-icon" />
                <span>{vehicle.specifications.mileage}</span>
              </div>
              <div className="spec-item">
                <FaGasPump className="spec-icon" />
                <span>{vehicle.specifications.fuelType}</span>
              </div>
              <div className="spec-item">
                <FaCog className="spec-icon" />
                <span>{vehicle.specifications.transmission}</span>
              </div>
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
                  <a href={`tel:${vehicle.seller.phone}`}>{vehicle.seller.phone}</a>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <a href={`mailto:${vehicle.seller.email}`}>{vehicle.seller.email}</a>
                </div>
              </div>
            )}

            {/* Seller Info */}
            <div className="seller-card">
              <h3 className="section-title">Seller Information</h3>
              <div className="seller-info">
                <div className="seller-avatar">
                  {vehicle.seller.name.charAt(0)}
                </div>
                <div className="seller-details">
                  <div className="seller-name">
                    {vehicle.seller.name}
                    {vehicle.seller.verified && (
                      <FaCheckCircle className="verified-icon" />
                    )}
                  </div>
                  <div className="seller-rating">
                    <FaStar className="star-icon" />
                    <span>{vehicle.seller.rating}</span>
                    <span className="reviews-count">({vehicle.seller.totalReviews} reviews)</span>
                  </div>
                  <div className="seller-meta">
                    <FaCalendarAlt /> Member since {vehicle.seller.memberSince}
                  </div>
                  <div className="seller-response">
                    {vehicle.seller.responseTime}
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
                  <li>Conduct a test drive and mechanical inspection</li>
                  <li>Verify all vehicle documents and ownership</li>
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
            <p className="vehicle-description">{vehicle.description}</p>
          </div>

          {/* Specifications */}
          <div className="detail-section">
            <h2 className="section-title">Vehicle Specifications</h2>
            <div className="specs-grid">
              {Object.entries(vehicle.specifications).map(([key, value]) => (
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
              {vehicle.features.map((feature, index) => (
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
            <span className="reference-number">{vehicle.reference}</span>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default VehicleDetails;
