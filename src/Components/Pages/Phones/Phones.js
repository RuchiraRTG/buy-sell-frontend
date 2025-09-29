import React, { useState } from "react";
import "./Phones.css";
import iPhone15Pro from "../../../Assets/Img/iPhone15Pro.webp";
import oneplus12 from "../../../Assets/Img/oneplus12.png";
import s24 from "../../../Assets/Img/s24.jpg";
import { FaStar, FaCartPlus, FaBolt, FaMapMarkerAlt, FaSearch, FaFilter, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const phonesData = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1200,
    discount: 8,
    rating: 4.8,
    image: iPhone15Pro,
    location: "Colombo",
    condition: "Brand New",
    storage: "256GB"
  },
  {
    id: 2,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 800,
    discount: 12,
    rating: 4.6,
    image: oneplus12,
    location: "Gampaha",
    condition: "Like New",
    storage: "128GB"
  },
  {
    id: 3,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 900,
    discount: 15,
    rating: 4.7,
    image: s24,
    location: "Kandy",
    condition: "Brand New",
    storage: "256GB"
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 1000,
    discount: 10,
    rating: 4.7,
    image: "https://via.placeholder.com/220x220?text=iPhone+14+Pro",
    location: "Colombo",
    condition: "Excellent",
    storage: "128GB"
  },
  {
    id: 5,
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1100,
    discount: 18,
    rating: 4.8,
    image: "https://via.placeholder.com/220x220?text=Galaxy+S23+Ultra",
    location: "Matale",
    condition: "Brand New",
    storage: "512GB"
  },
  {
    id: 6,
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 700,
    discount: 20,
    rating: 4.5,
    image: "https://via.placeholder.com/220x220?text=OnePlus+11",
    location: "Kalutara",
    condition: "Like New",
    storage: "256GB"
  },
  {
    id: 7,
    name: "iPhone 13 Pro Max",
    brand: "Apple",
    price: 950,
    discount: 15,
    rating: 4.6,
    image: "https://via.placeholder.com/220x220?text=iPhone+13+Pro+Max",
    location: "Nuwaraeliya",
    condition: "Excellent",
    storage: "256GB"
  },
  {
    id: 8,
    name: "Galaxy A54",
    brand: "Samsung",
    price: 400,
    discount: 25,
    rating: 4.3,
    image: "https://via.placeholder.com/220x220?text=Galaxy+A54",
    location: "Batticaloa",
    condition: "Brand New",
    storage: "128GB"
  },
  {
    id: 9,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 850,
    discount: 12,
    rating: 4.7,
    image: "https://via.placeholder.com/220x220?text=Pixel+8+Pro",
    location: "Trincomalee",
    condition: "Like New",
    storage: "256GB"
  },
  {
    id: 10,
    name: "iPhone 12 Mini",
    brand: "Apple",
    price: 600,
    discount: 30,
    rating: 4.4,
    image: "https://via.placeholder.com/220x220?text=iPhone+12+Mini",
    location: "Colombo",
    condition: "Good",
    storage: "128GB"
  },
  {
    id: 11,
    name: "Galaxy Note 20",
    brand: "Samsung",
    price: 650,
    discount: 22,
    rating: 4.5,
    image: "https://via.placeholder.com/220x220?text=Galaxy+Note+20",
    location: "Gampaha",
    condition: "Excellent",
    storage: "256GB"
  },
  {
    id: 12,
    name: "OnePlus Nord 3",
    brand: "OnePlus",
    price: 450,
    discount: 18,
    rating: 4.2,
    image: "https://via.placeholder.com/220x220?text=OnePlus+Nord+3",
    location: "Kandy",
    condition: "Brand New",
    storage: "128GB"
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
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const itemsPerPage = 8;

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
              Showing {paginatedPhones.length} of {filteredPhones.length} phones
            </span>
          </div>

          {/* Phones Grid */}
          <div className="phones-grid">
            {paginatedPhones.map((phone) => {
              return (
                <div key={phone.id} className="phone-card">
                  <div className="phone-image-container">
                    <img 
                      src={phone.image} 
                      alt={phone.name}
                      className="phone-img"
                    />
                  </div>

                  <div className="phone-info">
                    <h3 className="phone-name">{phone.name}</h3>
                    <div className="phone-details">
                      <span className="phone-brand">{phone.brand}</span>
                      <span className="phone-storage">{phone.storage}</span>
                    </div>
                    <div className="phone-condition">{phone.condition}</div>
                    <div className="phone-location">
                      <FaMapMarkerAlt /> {phone.location}
                    </div>

                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          style={{
                            color: i < Math.floor(phone.rating) ? "#fbbf24" : "#e5e7eb",
                          }}
                        />
                      ))}
                      <span className="rating-num">{phone.rating}</span>
                    </div>

                    <div className="price-section">
                      <span className="new-price">${phone.price}</span>
                    </div>

                    <div className="action-btns">
                      <button className="add-cart-btn">
                        <FaCartPlus /> Add to Cart
                      </button>
                      <button className="buy-now-btn">
                        <FaBolt /> Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaChevronLeft /> Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        className={`pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return <span key={pageNumber} className="pagination-ellipsis">...</span>;
                  }
                  return null;
                })}
              </div>

              <button 
                className="pagination-btn"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Phones;