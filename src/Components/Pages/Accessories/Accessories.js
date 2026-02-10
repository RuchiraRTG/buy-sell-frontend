import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Accessories.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import earbuds from "../../../Assets/Img/earbuds.jpg";
import iphone15pro from "../../../Assets/Img/ip15pro.avif";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes } from "react-icons/fa";
// import Pagination from "../Phones/Pagination";

const electronicsData = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Phones",
    price: 980,
    image: iphone15pro,
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 2,
    name: "Galaxy S24",
    brand: "Samsung",
    category: "Phones",
    price: 820,
    image: "https://via.placeholder.com/220x220?text=Galaxy+S24",
    location: "Kandy",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    brand: "Apple",
    category: "Laptops",
    price: 999,
    image: "https://via.placeholder.com/220x220?text=MacBook+Air+M2",
    location: "Galle",
    condition: "Good",
    storage: "N/A",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    brand: "Dell",
    category: "Laptops",
    price: 850,
    image: "https://via.placeholder.com/220x220?text=Dell+XPS+13",
    location: "Colombo",
    condition: "Used",
    storage: "N/A",
  },
  {
    id: 5,
    name: "Wireless Earbuds Pro",
    brand: "Sony",
    category: "Audio",
    price: 160,
    image: earbuds,
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 6,
    name: "JBL Flip 6",
    brand: "JBL",
    category: "Audio",
    price: 95,
    image: "https://via.placeholder.com/220x220?text=JBL+Flip+6",
    location: "Kandy",
    condition: "Used",
    storage: "N/A",
  },
  {
    id: 7,
    name: "PlayStation 5",
    brand: "Sony",
    category: "Gaming",
    price: 520,
    image: "https://via.placeholder.com/220x220?text=PlayStation+5",
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 8,
    name: "Xbox Series S",
    brand: "Microsoft",
    category: "Gaming",
    price: 260,
    image: "https://via.placeholder.com/220x220?text=Xbox+Series+S",
    location: "Galle",
    condition: "Good",
    storage: "N/A",
  },
  {
    id: 9,
    name: "Canon EOS M50",
    brand: "Canon",
    category: "Cameras",
    price: 480,
    image: "https://via.placeholder.com/220x220?text=Canon+EOS+M50",
    location: "Colombo",
    condition: "Used",
    storage: "N/A",
  },
  {
    id: 10,
    name: "GoPro Hero 11",
    brand: "GoPro",
    category: "Cameras",
    price: 360,
    image: "https://via.placeholder.com/220x220?text=GoPro+Hero+11",
    location: "Kandy",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 11,
    name: "Apple Watch SE",
    brand: "Apple",
    category: "Wearables",
    price: 240,
    image: "https://via.placeholder.com/220x220?text=Apple+Watch+SE",
    location: "Colombo",
    condition: "Brand New",
    storage: "N/A",
  },
  {
    id: 12,
    name: "Philips Smart TV 55\"",
    brand: "Philips",
    category: "Home",
    price: 450,
    image: "https://via.placeholder.com/220x220?text=Smart+TV+55",
    location: "Galle",
    condition: "Brand New",
    storage: "N/A",
  },
];

function Electronics() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Filter electronics based on search and filters
  const filteredElectronics = electronicsData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    const matchesCondition = conditionFilter === "All" || item.condition === conditionFilter;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredElectronics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedElectronics = filteredElectronics.slice(startIndex, startIndex + itemsPerPage);

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
    <>
      <Navbar />
      <div className="accessories-container">
      <div className="accessories-content">
        <div className="header-section">
          <h1 className="page-title">Electronics Store</h1>
          <p className="page-subtitle">
            Discover the latest electronics for work, play, and home
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search electronics or brands..."
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
                  <option value="Phones">Phones</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Cameras">Cameras</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Home">Home</option>
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
            <FaFilter /> Filters ({filteredElectronics.length})
          </button>

          {/* Results Header */}
          <div className="results-header">
            <span className="results-count">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredElectronics.length)} of {filteredElectronics.length} electronics
              {totalPages > 1 && (
                <span className="page-info"> • Page {currentPage} of {totalPages}</span>
              )}
            </span>
          </div>

          {/* Electronics Grid */}
          <div className="accessories-grid">
            {paginatedElectronics.map((item) => {
              return (
                <div 
                  key={item.id} 
                  className="accessory-card"
                >
                  <div className="accessory-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="accessory-img"
                    />
                  </div>

                  <div className="accessory-info">
                    <h3 className="accessory-name">{item.name}</h3>
                    <div className="accessory-price">${item.price.toFixed(2)}</div>
                    
                    <div className="accessory-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Brand</span>
                        <span className="detail-value">{item.brand}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Category</span>
                        <span className="detail-value">{item.category}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Condition</span>
                        <span className="detail-value">{item.condition}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">
                          <FaMapMarkerAlt className="location-icon" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button 
                        className="more-details-btn"
                        onClick={() => navigate(`/electronics/${item.id}`)}
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
            totalItems={filteredElectronics.length}
            startIndex={startIndex}
          /> */}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Electronics;
