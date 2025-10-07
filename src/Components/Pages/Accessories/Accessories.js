import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Accessories.css";
import earbuds from "../../../Assets/Img/earbuds.jpg";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes } from "react-icons/fa";
// import Pagination from "../Phones/Pagination";

const accessoriesData = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    brand: "Apple",
    category: "Audio",
    price: 65,
    image: earbuds,
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    brand: "JBL",
    category: "Audio",
    price: 80,
    image: "https://via.placeholder.com/220x220?text=Speaker",
    location: "Kandy",
    condition: "Used",
    storage: "N/A",
  },
  {
    id: 3,
    name: "Wired Headphones",
    brand: "Sony",
    category: "Audio",
    price: 35,
    image: "https://via.placeholder.com/220x220?text=Headphones",
    location: "Galle",
    condition: "Good",
    storage: "N/A",
  },
  {
    id: 4,
    name: "Fast Charger 25W",
    brand: "Samsung",
    category: "Chargers",
    price: 25,
    image: "https://via.placeholder.com/220x220?text=Fast+Charger",
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 5,
    name: "Wireless Charger Pad",
    brand: "Apple",
    category: "Chargers",
    price: 40,
    image: "https://via.placeholder.com/220x220?text=Wireless+Pad",
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 6,
    name: "Car Charger Dual USB",
    brand: "Anker",
    category: "Chargers",
    price: 18,
    image: "https://via.placeholder.com/220x220?text=Car+Charger",
    location: "Kandy",
    condition: "Good",
    storage: "N/A",
  },
  {
    id: 7,
    name: "Transparent Phone Case",
    brand: "Spigen",
    category: "Cases",
    price: 15,
    image: "https://via.placeholder.com/220x220?text=Clear+Case",
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 8,
    name: "Rugged Shockproof Case",
    brand: "OtterBox",
    category: "Cases",
    price: 22,
    image: "https://via.placeholder.com/220x220?text=Rugged+Case",
    location: "Galle",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 9,
    name: "Flip Leather Wallet Case",
    brand: "Bellroy",
    category: "Cases",
    price: 30,
    image: "https://via.placeholder.com/220x220?text=Wallet+Case",
    location: "Colombo",
    condition: "Used",
    storage: "N/A",
  },
  {
    id: 10,
    name: "Tempered Glass Protector",
    brand: "Zagg",
    category: "Protection",
    price: 12,
    image: "https://via.placeholder.com/220x220?text=Screen+Protector",
    location: "Kandy",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 11,
    name: "Camera Lens Protector",
    brand: "ESR",
    category: "Protection",
    price: 8,
    image: "https://via.placeholder.com/220x220?text=Lens+Protector",
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 12,
    name: "Privacy Glass",
    brand: "Tech21",
    category: "Protection",
    price: 18,
    image: "https://via.placeholder.com/220x220?text=Privacy+Glass",
    location: "Galle",
    condition: "Brand New",
    storage: "N/A",
  },
];

function Accessories() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Filter accessories based on search and filters
  const filteredAccessories = accessoriesData.filter((accessory) => {
    const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accessory.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || accessory.category === categoryFilter;
    const matchesCondition = conditionFilter === "All" || accessory.condition === conditionFilter;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredAccessories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAccessories = filteredAccessories.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, conditionFilter]);

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setConditionFilter("All");
    setShowFilters(false);
  };

  return (
    <div className="accessories-container">
      <div className="accessories-content">
        <div className="header-section">
          <h1 className="page-title">Accessories Store</h1>
          <p className="page-subtitle">
            Find the perfect accessories for your devices
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search accessories or brands..."
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
                  <option value="Audio">Audio</option>
                  <option value="Chargers">Chargers</option>
                  <option value="Cases">Cases</option>
                  <option value="Protection">Protection</option>
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
                  <option value="Used">Used</option>
                  <option value="Good">Good</option>
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
            <FaFilter /> Filters ({filteredAccessories.length})
          </button>

          {/* Results Header */}
          <div className="results-header">
            <span className="results-count">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAccessories.length)} of {filteredAccessories.length} accessories
              {totalPages > 1 && (
                <span className="page-info"> • Page {currentPage} of {totalPages}</span>
              )}
            </span>
          </div>

          {/* Accessories Grid */}
          <div className="accessories-grid">
            {paginatedAccessories.map((accessory) => {
              return (
                <div 
                  key={accessory.id} 
                  className="accessory-card"
                >
                  <div className="accessory-image-container">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name}
                      className="accessory-img"
                    />
                  </div>

                  <div className="accessory-info">
                    <h3 className="accessory-name">{accessory.name}</h3>
                    <div className="accessory-price">${accessory.price.toFixed(2)}</div>
                    
                    <div className="accessory-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Brand</span>
                        <span className="detail-value">{accessory.brand}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Category</span>
                        <span className="detail-value">{accessory.category}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Condition</span>
                        <span className="detail-value">{accessory.condition}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">
                          <FaMapMarkerAlt className="location-icon" />
                          {accessory.location}
                        </span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button 
                        className="more-details-btn"
                        onClick={() => navigate(`/accessories/${accessory.id}`)}
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

          {/* Pagination Component */}
          {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredAccessories.length}
            startIndex={startIndex}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Accessories;
