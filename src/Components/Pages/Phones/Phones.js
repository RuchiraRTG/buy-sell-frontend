import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Phones.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import iPhone15Pro from "../../../Assets/Img/iPhone15Pro.webp";
import oneplus12 from "../../../Assets/Img/oneplus12.png";
import s24 from "../../../Assets/Img/s24.jpg";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes } from "react-icons/fa";
 

const phonesData = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1200,
    image: iPhone15Pro,
    location: "Colombo",
    condition: "Brand New",
    storage: "256GB",
    description: "The iPhone 15 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.",
    colors: [
      { name: "Natural Titanium", color: "#F5F5DC" },
      { name: "Blue Titanium", color: "#1e3a8a" },
      { name: "White Titanium", color: "#ffffff" },
      { name: "Black Titanium", color: "#1f2937" }
    ],
    selectedColor: 0
  },
  {
    id: 2,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 800,
    image: oneplus12,
    location: "Gampaha",
    condition: "Like New",
    storage: "128GB",
    description: "OnePlus 12 features advanced camera technology with stunning display quality and premium build materials for exceptional user experience.",
    colors: [
      { name: "Silky Black", color: "#1f2937" },
      { name: "Flowy Emerald", color: "#059669" },
      { name: "Glacial White", color: "#ffffff" }
    ],
    selectedColor: 0
  },
  {
    id: 3,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 900,
    image: s24,
    location: "Kandy",
    condition: "Brand New",
    storage: "256GB",
    description: "Samsung Galaxy S24 delivers exceptional performance with AI-powered features and professional-grade camera capabilities.",
    colors: [
      { name: "Phantom Black", color: "#1f2937" },
      { name: "Cream", color: "#fef3c7" },
      { name: "Lavender", color: "#c084fc" },
      { name: "Jade Green", color: "#10b981" }
    ],
    selectedColor: 0
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 1000,
    image: "https://via.placeholder.com/300x300?text=iPhone+14+Pro",
    location: "Colombo",
    condition: "Excellent",
    storage: "128GB",
    description: "iPhone 14 Pro with advanced camera system and A16 Bionic chip delivers incredible performance and stunning photo quality.",
    colors: [
      { name: "Deep Purple", color: "#663399" },
      { name: "Gold", color: "#ffd700" },
      { name: "Silver", color: "#c0c0c0" },
      { name: "Space Black", color: "#1f2937" }
    ],
    selectedColor: 0
  },
  {
    id: 5,
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1100,
    image: "https://via.placeholder.com/300x300?text=Galaxy+S23+Ultra",
    location: "Matale",
    condition: "Brand New",
    storage: "512GB",
    description: "Galaxy S23 Ultra with S Pen functionality and advanced camera capabilities for professional photography and productivity.",
    colors: [
      { name: "Phantom Black", color: "#1f2937" },
      { name: "Cream", color: "#fef3c7" },
      { name: "Green", color: "#10b981" },
      { name: "Lavender", color: "#c084fc" }
    ],
    selectedColor: 0
  },
  {
    id: 6,
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 700,
    image: "https://via.placeholder.com/300x300?text=OnePlus+11",
    location: "Kalutara",
    condition: "Like New",
    storage: "256GB",
    description: "OnePlus 11 features flagship performance with smooth display and fast charging capabilities for an enhanced user experience.",
    colors: [
      { name: "Titan Black", color: "#1f2937" },
      { name: "Eternal Green", color: "#059669" }
    ],
    selectedColor: 0
  }
];

const locations = [
  "All Locations",
  "Colombo",
  "Gampaha",
  "Kalutara", 
  "Kandy",
  "Matale",
  "Nuwaraeliya",
  "Batticaloa",
  "Trincomalee"
];

const brands = [
  "All Brands",
  "Apple",
  "Samsung", 
  "OnePlus",
  "Google"
];

const conditions = [
  "All Conditions",
  "Brand New",
  "Like New",
  "Excellent", 
  "Good"
];

function Phones() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const itemsPerPage = 9; // Optimized for 3x3 grid layout

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLocation, selectedBrand, selectedCondition, searchKeyword, priceRange.min, priceRange.max]);

  // Filter phones based on selected criteria
  const filteredPhones = phonesData.filter(phone => {
    const locationMatch = selectedLocation === "All Locations" || phone.location === selectedLocation;
    const brandMatch = selectedBrand === "All Brands" || phone.brand === selectedBrand;
    const conditionMatch = selectedCondition === "All Conditions" || phone.condition === selectedCondition;
    const keywordMatch = searchKeyword === "" || 
      phone.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      phone.brand.toLowerCase().includes(searchKeyword.toLowerCase());
    
    const priceMatch = (!priceRange.min || phone.price >= parseInt(priceRange.min)) &&
                      (!priceRange.max || phone.price <= parseInt(priceRange.max));
    
    return locationMatch && brandMatch && conditionMatch && keywordMatch && priceMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPhones.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPhones = filteredPhones.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setSelectedLocation("All Locations");
    setSelectedBrand("All Brands");
    setSelectedCondition("All Conditions");
    setPriceRange({ min: "", max: "" });
    setSearchKeyword("");
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <div className="phones-container">
      <div className="phones-header">
        <h1 className="page-title">Premium Smartphones</h1>
        <p className="page-subtitle">Discover the latest and greatest mobile phones from top brands</p>
      </div>

      <div className="phones-content">
        {/* Sidebar Filters */}
        <div className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
          {/* Mobile Close Button */}
          <button 
            className="mobile-filter-close"
            onClick={() => setShowFilters(false)}
            aria-label="Close filters"
          >
            <FaTimes />
          </button>
          
          <div className="filters-header">
            <h3><FaFilter /> FILTERS</h3>
            <button className="reset-btn" onClick={resetFilters}>
              RESET <span>×</span>
            </button>
          </div>

          {/* Location Filter */}
          <div className="filter-section">
            <h4><FaMapMarkerAlt /> LOCATION</h4>
            <div className="search-location">
              <input 
                type="text" 
                placeholder="SEARCH LOCATION"
                className="location-search"
              />
              <FaSearch />
            </div>
            <div className="location-checkboxes">
              {locations.slice(1).map(location => (
                <label key={location} className="location-checkbox">
                  <input 
                    type="checkbox" 
                    checked={selectedLocation === location}
                    onChange={() => setSelectedLocation(selectedLocation === location ? "All Locations" : location)}
                  />
                  <span className="checkmark"></span>
                  {location}
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-section">
            <h4>BRAND</h4>
            <select 
              className="filter-dropdown"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Condition Filter */}
          <div className="filter-section">
            <h4>CONDITION</h4>
            <select 
              className="filter-dropdown"
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
            >
              {conditions.map(condition => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <h4>PRICE RANGE</h4>
            <div className="price-inputs">
              <input 
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                className="price-input"
              />
              <input 
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                className="price-input"
              />
            </div>
          </div>

          {/* Keywords Filter */}
          <div className="filter-section">
            <h4>KEYWORDS</h4>
            <input 
              type="text"
              placeholder="Search phones..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="keywords-input"
            />
          </div>

          <button className="filter-apply-btn">FILTER</button>
        </div>

        {/* Main Content */}
        <div className="phones-main">
          {/* Mobile Filter Toggle */}
          <button 
            className="mobile-filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters ({filteredPhones.length})
          </button>

          {/* Results Header */}
          <div className="results-header">
            <span className="results-count">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredPhones.length)} of {filteredPhones.length} phones
              {totalPages > 1 && (
                <span className="page-info"> • Page {currentPage} of {totalPages}</span>
              )}
            </span>
          </div>

          {/* Phones Grid */}
          <div className="phones-grid">
            {paginatedPhones.map((phone) => {
              return (
                <div 
                  key={phone.id} 
                  className="phone-card"
                >
                  <div className="phone-image-container">
                    <img 
                      src={phone.image} 
                      alt={phone.name}
                      className="phone-img"
                    />
                    <div className="image-indicators">
                      {[...Array(4)].map((_, index) => (
                        <div 
                          key={index}
                          className={`indicator ${index === 0 ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="phone-info">
                    <h3 className="phone-name">{phone.name}</h3>
                    <div className="phone-price">${phone.price.toFixed(2)}</div>
                    
                    <div className="phone-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Brand</span>
                        <span className="detail-value">{phone.brand}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Storage</span>
                        <span className="detail-value">{phone.storage}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Condition</span>
                        <span className="detail-value">{phone.condition}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">
                          <FaMapMarkerAlt className="location-icon" />
                          {phone.location}
                        </span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button 
                        className="more-details-btn"
                        onClick={() => navigate(`/phones/${phone.id}`)}
                      >
                        More details
                      </button>
                      <button 
                        className="cart-icon-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart functionality here
                        }}
                      >
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

           
           
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Phones;