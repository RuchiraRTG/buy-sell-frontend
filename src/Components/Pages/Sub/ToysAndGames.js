import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ToysAndGames.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes, FaHeart } from "react-icons/fa";

const STORAGE_KEY = "wishlistItems";

const toysData = [
  {
    id: 1,
    name: "LEGO Technic Building Set",
    category: "Building Blocks",
    price: 120,
    image: "https://via.placeholder.com/220x220?text=LEGO+Set",
    location: "Colombo",
    condition: "Brand New",
    brand: "LEGO",
  },
  {
    id: 2,
    name: "PlayStation 5 Games Bundle",
    category: "Video Games",
    price: 280,
    image: "https://via.placeholder.com/220x220?text=PS5+Games",
    location: "Kandy",
    condition: "Brand New",
    brand: "Sony",
  },
  {
    id: 3,
    name: "Wireless Remote Control Car",
    category: "RC Toys",
    price: 85,
    image: "https://via.placeholder.com/220x220?text=RC+Car",
    location: "Galle",
    condition: "New",
    brand: "TechToys",
  },
  {
    id: 4,
    name: "Board Game Collection (6 Games)",
    category: "Board Games",
    price: 150,
    image: "https://via.placeholder.com/220x220?text=Board+Games",
    location: "Colombo",
    condition: "Brand New",
    brand: "GameMaster",
  },
  {
    id: 5,
    name: "Interactive Robot Toy",
    category: "Electronic Toys",
    price: 95,
    image: "https://via.placeholder.com/220x220?text=Robot+Toy",
    location: "Negombo",
    condition: "Brand New",
    brand: "RoboKids",
  },
  {
    id: 6,
    name: "3D Puzzle Collection (12 Designs)",
    category: "Puzzles",
    price: 65,
    image: "https://via.placeholder.com/220x220?text=3D+Puzzles",
    location: "Colombo",
    condition: "New",
    brand: "PuzzlePro",
  },
];

function ToysAndGames() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [wishlistItems, setWishlistItems] = useState([]);

  const filteredItems = toysData.filter((item) => {
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
    const wishlistId = `toys-${item.id}`;
    const payload = {
      id: wishlistId,
      title: item.name,
      price: item.price,
      image: item.image,
      location: item.location,
      condition: item.condition,
      category: item.category,
      route: `/toys/${item.id}`,
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
            <h1 className="page-title">Toys and Games</h1>
            <p className="page-subtitle">
              Find toys, puzzles, and gaming gear for all ages
            </p>

            <div className="search-container">
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search toys or games..."
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
                    <option value="Building Blocks">Building Blocks</option>
                    <option value="Video Games">Video Games</option>
                    <option value="RC Toys">RC Toys</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Electronic Toys">Electronic Toys</option>
                    <option value="Puzzles">Puzzles</option>
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
                    <option value="Like New">Like New</option>
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
                        onClick={() => navigate(`/toys/${item.id}`)}
                      >
                        More details
                      </button>
                      <button
                        className={`wishlist-icon-btn ${isWishlisted(`toys-${item.id}`) ? "active" : ""}`}
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

export default ToysAndGames;
