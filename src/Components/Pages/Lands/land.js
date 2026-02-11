import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./land.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes, FaHome, FaBuilding, FaHeart } from "react-icons/fa";

const STORAGE_KEY = "wishlistItems";

const propertyData = [
  {
    id: 1,
    name: "Modern Villa with Pool",
    type: "House",
    category: "Residential",
    price: 450000,
    image: "https://via.placeholder.com/220x220?text=Modern+Villa",
    location: "Colombo",
    condition: "Brand New",
    size: "3500 sqft",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 2,
    name: "Downtown Apartment",
    type: "Apartment",
    category: "Residential",
    price: 185000,
    image: "https://via.placeholder.com/220x220?text=Apartment",
    location: "Kandy",
    condition: "Renovated",
    size: "1200 sqft",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 3,
    name: "Beachfront Condo",
    type: "Condo",
    category: "Residential",
    price: 320000,
    image: "https://via.placeholder.com/220x220?text=Beachfront+Condo",
    location: "Galle",
    condition: "Excellent",
    size: "1800 sqft",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 4,
    name: "Commercial Office Space",
    type: "Office",
    category: "Commercial",
    price: 550000,
    image: "https://via.placeholder.com/220x220?text=Office+Space",
    location: "Colombo",
    condition: "Modern",
    size: "5000 sqft",
    bedrooms: 0,
    bathrooms: 4,
  },
  {
    id: 5,
    name: "Retail Shop with Parking",
    type: "Retail",
    category: "Commercial",
    price: 280000,
    image: "https://via.placeholder.com/220x220?text=Retail+Shop",
    location: "Negombo",
    condition: "Good",
    size: "2200 sqft",
    bedrooms: 0,
    bathrooms: 2,
  },
  {
    id: 6,
    name: "Industrial Warehouse",
    type: "Warehouse",
    category: "Commercial",
    price: 720000,
    image: "https://via.placeholder.com/220x220?text=Warehouse",
    location: "Colombo",
    condition: "Renovated",
    size: "12000 sqft",
    bedrooms: 0,
    bathrooms: 3,
  },
  {
    id: 7,
    name: "Luxury Penthouse",
    type: "Penthouse",
    category: "Residential",
    price: 890000,
    image: "https://via.placeholder.com/220x220?text=Penthouse",
    location: "Colombo",
    condition: "Brand New",
    size: "4200 sqft",
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 8,
    name: "Countryside Cottage",
    type: "House",
    category: "Residential",
    price: 165000,
    image: "https://via.placeholder.com/220x220?text=Cottage",
    location: "Kandy",
    condition: "Good",
    size: "2000 sqft",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 9,
    name: "Agricultural Land",
    type: "Land",
    category: "Land",
    price: 95000,
    image: "https://via.placeholder.com/220x220?text=Agricultural+Land",
    location: "Galle",
    condition: "Vacant",
    size: "10 acres",
    bedrooms: 0,
    bathrooms: 0,
  },
  {
    id: 10,
    name: "Residential Plot",
    type: "Land",
    category: "Land",
    price: 120000,
    image: "https://via.placeholder.com/220x220?text=Residential+Plot",
    location: "Colombo",
    condition: "Ready to Build",
    size: "8000 sqft",
    bedrooms: 0,
    bathrooms: 0,
  },
  {
    id: 11,
    name: "Studio Apartment",
    type: "Apartment",
    category: "Residential",
    price: 98000,
    image: "https://via.placeholder.com/220x220?text=Studio",
    location: "Kandy",
    condition: "Good",
    size: "600 sqft",
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 12,
    name: "Shopping Complex",
    type: "Commercial",
    category: "Commercial",
    price: 1250000,
    image: "https://via.placeholder.com/220x220?text=Shopping+Complex",
    location: "Colombo",
    condition: "Brand New",
    size: "25000 sqft",
    bedrooms: 0,
    bathrooms: 8,
  },
];

function PropertyForSale() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Filter properties based on search and filters
  const filteredProperties = propertyData.filter((property) => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || property.category === categoryFilter;
    const matchesCondition = conditionFilter === "All" || property.condition === conditionFilter;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, conditionFilter]);

  const readWishlist = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return [];
    }

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    setWishlistItems(readWishlist());
  }, []);

  const isWishlisted = (wishlistId) =>
    wishlistItems.some((item) => item.id === wishlistId);

  const toggleWishlist = (property) => {
    const wishlistId = `property-${property.id}`;
    const payload = {
      id: wishlistId,
      title: property.name,
      price: property.price,
      image: property.image,
      location: property.location,
      condition: property.condition,
      category: property.category,
      route: `/property/${property.id}`,
      description: `${property.type} - ${property.size}`,
    };

    const exists = wishlistItems.some((item) => item.id === wishlistId);
    const nextItems = exists
      ? wishlistItems.filter((item) => item.id !== wishlistId)
      : [payload, ...wishlistItems];

    setWishlistItems(nextItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setConditionFilter("All");
    setShowFilters(false);
  };

  return (
    <>
      <Navbar />
      <div className="accessories-container">
      <div className="accessories-content">
        <div className="header-section">
          <h1 className="page-title">Property For Sale</h1>
          <p className="page-subtitle">
            Find your dream property - residential, commercial, or land
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Filter Section */}
          <div className="filters-section">
            <div className="filter-row">
              <div className="filter-group">
                <label className="filter-label">Category</label>
                <select 
                  value={categoryFilter} 
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="All">All Categories</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Condition</label>
                <select 
                  value={conditionFilter} 
                  onChange={(e) => setConditionFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="All">All Conditions</option>
                  <option value="Brand New">Brand New</option>
                  <option value="Renovated">Renovated</option>
                  <option value="Good">Good</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Modern">Modern</option>
                  <option value="Vacant">Vacant</option>
                  <option value="Ready to Build">Ready to Build</option>
                </select>
              </div>
            </div>

            {(searchTerm || categoryFilter !== "All" || conditionFilter !== "All") && (
              <button className="clear-filters" onClick={clearFilters}>
                <FaTimes /> Clear all filters
              </button>
            )}
          </div>
        </div>

        <div className="content-section">
          <button className="mobile-filter-btn" onClick={() => setShowFilters(!showFilters)}>
            <FaFilter /> Filters ({filteredProperties.length})
          </button>

          {/* Results Header */}
          <div className="results-header">
            <span className="results-count">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProperties.length)} of {filteredProperties.length} properties
              {totalPages > 1 && (
                <span className="page-info"> • Page {currentPage} of {totalPages}</span>
              )}
            </span>
          </div>

          {/* Properties Grid */}
          <div className="accessories-grid">
            {paginatedProperties.map((property) => {
              return (
                <div 
                  key={property.id} 
                  className="accessory-card"
                >
                  <div className="accessory-image-container">
                    <img 
                      src={property.image} 
                      alt={property.name}
                      className="accessory-img"
                    />
                  </div>

                  <div className="accessory-info">
                    <h3 className="accessory-name">{property.name}</h3>
                    <div className="accessory-price">${property.price.toLocaleString()}</div>
                    
                    <div className="accessory-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Type</span>
                        <span className="detail-value">{property.type}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Category</span>
                        <span className="detail-value">{property.category}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Size</span>
                        <span className="detail-value">{property.size}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">
                          <FaMapMarkerAlt className="location-icon" />
                          {property.location}
                        </span>
                      </div>
                      {property.bedrooms > 0 && (
                        <>
                          <div className="detail-item">
                            <span className="detail-label">Bedrooms</span>
                            <span className="detail-value">{property.bedrooms}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Bathrooms</span>
                            <span className="detail-value">{property.bathrooms}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="card-footer">
                      <button 
                        className="more-details-btn"
                        onClick={() => navigate(`/property/${property.id}`)}
                      >
                        More details
                      </button>
                      <button
                        className={`wishlist-icon-btn ${isWishlisted(`property-${property.id}`) ? "active" : ""}`}
                        aria-label="Save to wishlist"
                        title="Save to wishlist"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(property);
                        }}
                      >
                        <FaHeart />
                      </button>
                      <button 
                        className="cart-icon-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to favorites functionality here
                        }}
                      >
                        <FaHome />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Component */}
          {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredProperties.length}
            startIndex={startIndex}
          /> */}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default PropertyForSale;
