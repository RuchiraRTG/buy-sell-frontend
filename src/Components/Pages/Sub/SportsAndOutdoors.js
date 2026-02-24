import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SportsAndOutdoors.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes, FaHeart } from "react-icons/fa";

const STORAGE_KEY = "wishlistItems";

const sportsData = [
  {
    id: 1,
    name: "Professional Yoga Mat Set",
    category: "Fitness",
    price: 65,
    image: "https://via.placeholder.com/220x220?text=Yoga+Mat",
    location: "Colombo",
    condition: "Brand New",
    brand: "ProFit",
  },
  {
    id: 2,
    name: "Mountain Biking Helmet",
    category: "Cycling",
    price: 120,
    image: "https://via.placeholder.com/220x220?text=Bike+Helmet",
    location: "Kandy",
    condition: "Brand New",
    brand: "CycleMax",
  },
  {
    id: 3,
    name: "Camping Tent 4-Person",
    category: "Camping",
    price: 280,
    image: "https://via.placeholder.com/220x220?text=Camping+Tent",
    location: "Galle",
    condition: "New",
    brand: "OutdoorGear",
  },
  {
    id: 4,
    name: "Basketball Hoop Set",
    category: "Sports",
    price: 150,
    image: "https://via.placeholder.com/220x220?text=Basketball+Hoop",
    location: "Colombo",
    condition: "Brand New",
    brand: "SportPro",
  },
  {
    id: 5,
    name: "Hiking Boot Collection",
    category: "Footwear",
    price: 185,
    image: "https://via.placeholder.com/220x220?text=Hiking+Boots",
    location: "Negombo",
    condition: "Brand New",
    brand: "TrailBlaze",
  },
  {
    id: 6,
    name: "Portable Fishing Rod Set",
    category: "Fishing",
    price: 95,
    image: "https://via.placeholder.com/220x220?text=Fishing+Rod",
    location: "Colombo",
    condition: "New",
    brand: "CatchMaster",
  },
];

function SportsAndOutdoors() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [wishlistItems, setWishlistItems] = useState([]);

  const filteredItems = sportsData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    const matchesCondition = conditionFilter === "All" || item.condition === conditionFilter;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, conditionFilter]);

  const readWishlist = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
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

  const toggleWishlist = (item) => {
    const wishlistId = `sports-${item.id}`;
    const payload = {
      id: wishlistId,
      title: item.name,
      price: item.price,
      image: item.image,
      location: item.location,
      condition: item.condition,
      category: item.category,
      route: `/sports/${item.id}`,
      description: `${item.brand} - ${item.category}`,
    };

    const exists = wishlistItems.some((wItem) => wItem.id === wishlistId);
    const nextItems = exists
      ? wishlistItems.filter((wItem) => wItem.id !== wishlistId)
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
            <h1 className="page-title">Sports and Outdoors</h1>
            <p className="page-subtitle">
              Browse gear for fitness, travel, and outdoor fun
            </p>

            <div className="search-container">
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search gear or brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm("")}>
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>

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
                    <option value="Fitness">Fitness</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Camping">Camping</option>
                    <option value="Sports">Sports</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Fishing">Fishing</option>
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
                    <option value="New">New</option>
                    <option value="Used">Used</option>
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
              <FaFilter /> Filters ({filteredItems.length})
            </button>

            <div className="results-header">
              <span className="results-count">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredItems.length)} of {filteredItems.length} products
                {totalPages > 1 && (
                  <span className="page-info"> • Page {currentPage} of {totalPages}</span>
                )}
              </span>
            </div>

            <div className="accessories-grid">
              {paginatedItems.map((item) => (
                <div key={item.id} className="accessory-card">
                  <div className="accessory-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="accessory-img"
                    />
                  </div>

                  <div className="accessory-info">
                    <h3 className="accessory-name">{item.name}</h3>
                    <div className="accessory-price">${item.price.toLocaleString()}</div>
                    
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
                        onClick={() => navigate(`/sports/${item.id}`)}
                      >
                        More details
                      </button>
                      <button
                        className={`wishlist-icon-btn ${isWishlisted(`sports-${item.id}`) ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(item);
                        }}
                      >
                        <FaHeart />
                      </button>
                      <button 
                        className="cart-icon-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SportsAndOutdoors;
