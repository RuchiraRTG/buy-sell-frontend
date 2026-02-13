import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./vehical.css";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes, FaHeart, FaCar, FaMotorcycle, FaTachometerAlt } from "react-icons/fa";

const vehiclesData = [
  {
    id: 1,
    name: "Toyota Land Cruiser Prado",
    brand: "Toyota",
    type: "SUV",
    price: 45000,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500",
    location: "Colombo",
    condition: "Excellent",
    year: 2020,
    mileage: "45,000 km",
    fuelType: "Diesel",
    transmission: "Automatic",
    description: "Well-maintained Toyota Land Cruiser Prado with full service history. Premium SUV with exceptional off-road capabilities.",
    color: "White Pearl"
  },
  {
    id: 2,
    name: "Honda Civic 2022",
    brand: "Honda",
    type: "Sedan",
    price: 28000,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500",
    location: "Gampaha",
    condition: "Brand New",
    year: 2022,
    mileage: "12,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    description: "Latest Honda Civic with advanced safety features and fuel-efficient engine. Perfect for city driving.",
    color: "Metallic Gray"
  },
  {
    id: 3,
    name: "Suzuki Alto 800",
    brand: "Suzuki",
    type: "Hatchback",
    price: 8500,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
    location: "Kandy",
    condition: "Good",
    year: 2018,
    mileage: "68,000 km",
    fuelType: "Petrol",
    transmission: "Manual",
    description: "Economical and reliable Suzuki Alto 800. Great fuel efficiency and low maintenance costs.",
    color: "Red"
  },
  {
    id: 4,
    name: "BMW X5 M Sport",
    brand: "BMW",
    type: "SUV",
    price: 75000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
    location: "Colombo",
    condition: "Excellent",
    year: 2021,
    mileage: "28,000 km",
    fuelType: "Diesel",
    transmission: "Automatic",
    description: "Luxury BMW X5 M Sport with premium features and powerful performance. Immaculate condition.",
    color: "Black Sapphire"
  },
  {
    id: 5,
    name: "Nissan Caravan",
    brand: "Nissan",
    type: "Van",
    price: 22000,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500",
    location: "Kalutara",
    condition: "Good",
    year: 2017,
    mileage: "95,000 km",
    fuelType: "Diesel",
    transmission: "Manual",
    description: "Spacious Nissan Caravan ideal for commercial use or family trips. Well-maintained with regular servicing.",
    color: "Silver"
  },
  {
    id: 6,
    name: "Yamaha FZ V3",
    brand: "Yamaha",
    type: "Motorcycle",
    price: 3200,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
    location: "Galle",
    condition: "Excellent",
    year: 2021,
    mileage: "8,500 km",
    fuelType: "Petrol",
    transmission: "Manual",
    description: "Sporty Yamaha FZ V3 with excellent performance. Low mileage and well-maintained.",
    color: "Matte Black"
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    type: "Sedan",
    price: 65000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500",
    location: "Colombo",
    condition: "Brand New",
    year: 2023,
    mileage: "5,000 km",
    fuelType: "Hybrid",
    transmission: "Automatic",
    description: "Latest Mercedes-Benz E-Class with cutting-edge technology and luxurious interior. Showroom condition.",
    color: "Obsidian Black"
  },
  {
    id: 8,
    name: "Toyota Hiace",
    brand: "Toyota",
    type: "Van",
    price: 32000,
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=500",
    location: "Matara",
    condition: "Good",
    year: 2019,
    mileage: "72,000 km",
    fuelType: "Diesel",
    transmission: "Manual",
    description: "Reliable Toyota Hiace perfect for transport business. Spacious and fuel-efficient.",
    color: "White"
  },
  {
    id: 9,
    name: "Honda CBR 250R",
    brand: "Honda",
    type: "Motorcycle",
    price: 4500,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500",
    location: "Negombo",
    condition: "Excellent",
    year: 2020,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Manual",
    description: "Powerful Honda CBR 250R sports bike. Perfect for both city riding and long tours.",
    color: "Racing Red"
  }
];

const locations = [
  "All Locations",
  "Colombo",
  "Gampaha",
  "Kalutara", 
  "Kandy",
  "Matara",
  "Galle",
  "Negombo",
  "Batticaloa"
];

const brands = [
  "All Brands",
  "Toyota",
  "Honda",
  "Suzuki",
  "BMW",
  "Nissan",
  "Yamaha",
  "Mercedes-Benz"
];

const vehicleTypes = [
  "All Types",
  "SUV",
  "Sedan",
  "Hatchback",
  "Van",
  "Motorcycle"
];

const conditions = [
  "All Conditions",
  "Brand New",
  "Excellent",
  "Good", 
  "Fair"
];

const STORAGE_KEY = "wishlistItems";

function Vehicles() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  
  const itemsPerPage = 9;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLocation, selectedBrand, selectedType, selectedCondition, searchKeyword, priceRange.min, priceRange.max]);

  const filteredVehicles = vehiclesData.filter(vehicle => {
    const locationMatch = selectedLocation === "All Locations" || vehicle.location === selectedLocation;
    const brandMatch = selectedBrand === "All Brands" || vehicle.brand === selectedBrand;
    const typeMatch = selectedType === "All Types" || vehicle.type === selectedType;
    const conditionMatch = selectedCondition === "All Conditions" || vehicle.condition === selectedCondition;
    const keywordMatch = searchKeyword === "" || 
      vehicle.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchKeyword.toLowerCase());
    
    const priceMatch = (!priceRange.min || vehicle.price >= parseInt(priceRange.min)) &&
                      (!priceRange.max || vehicle.price <= parseInt(priceRange.max));
    
    return locationMatch && brandMatch && typeMatch && conditionMatch && keywordMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVehicles = filteredVehicles.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setSelectedLocation("All Locations");
    setSelectedBrand("All Brands");
    setSelectedType("All Types");
    setSelectedCondition("All Conditions");
    setPriceRange({ min: "", max: "" });
    setSearchKeyword("");
    setCurrentPage(1);
  };

  const isWishlisted = (wishlistId) =>
    wishlistItems.some((item) => item.id === wishlistId);

  const toggleWishlist = (vehicle) => {
    const wishlistId = `vehicles-${vehicle.id}`;
    const payload = {
      id: wishlistId,
      title: vehicle.name,
      price: vehicle.price,
      image: vehicle.image,
      location: vehicle.location,
      condition: vehicle.condition,
      category: "Vehicles",
      route: `/vehicles/${vehicle.id}`,
      description: vehicle.description,
    };

    const exists = wishlistItems.some((item) => item.id === wishlistId);
    const nextItems = exists
      ? wishlistItems.filter((item) => item.id !== wishlistId)
      : [payload, ...wishlistItems];

    setWishlistItems(nextItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
  };

  return (
    <>
      <Navbar />
      <div className="vehicles-container">
        <div className="vehicles-header">
          <h1 className="page-title">Vehicle Marketplace</h1>
          <p className="page-subtitle">Find your perfect ride - Cars, SUVs, Motorcycles and more</p>
        </div>

        <div className="vehicles-content">
          {/* Sidebar Filters */}
          <div className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
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

            {/* Vehicle Type Filter */}
            <div className="filter-section">
              <h4>VEHICLE TYPE</h4>
              <select 
                className="filter-dropdown"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {vehicleTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
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
                placeholder="Search vehicles..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="keywords-input"
              />
            </div>

            <button className="filter-apply-btn">FILTER</button>
          </div>

          {/* Main Content */}
          <div className="vehicles-main">
            <button 
              className="mobile-filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter /> Filters ({filteredVehicles.length})
            </button>

            <div className="results-header">
              <span className="results-count">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredVehicles.length)} of {filteredVehicles.length} vehicles
                {totalPages > 1 && (
                  <span className="page-info"> • Page {currentPage} of {totalPages}</span>
                )}
              </span>
            </div>

            <div className="vehicles-grid">
              {paginatedVehicles.map((vehicle) => {
                return (
                  <div 
                    key={vehicle.id} 
                    className="vehicle-card"
                  >
                    <div className="vehicle-image-container">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="vehicle-img"
                      />
                      <div className="vehicle-type-badge">
                        {vehicle.type === "Motorcycle" ? <FaMotorcycle /> : <FaCar />}
                        {vehicle.type}
                      </div>
                    </div>

                    <div className="vehicle-info">
                      <h3 className="vehicle-name">{vehicle.name}</h3>
                      <div className="vehicle-price">${vehicle.price.toLocaleString()}</div>
                      
                      <div className="vehicle-details-grid">
                        <div className="detail-item">
                          <span className="detail-label">Year</span>
                          <span className="detail-value">{vehicle.year}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Mileage</span>
                          <span className="detail-value">
                            <FaTachometerAlt className="detail-icon" />
                            {vehicle.mileage}
                          </span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Fuel</span>
                          <span className="detail-value">{vehicle.fuelType}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Location</span>
                          <span className="detail-value">
                            <FaMapMarkerAlt className="location-icon" />
                            {vehicle.location}
                          </span>
                        </div>
                      </div>

                      <div className="card-footer">
                        <button 
                          className="more-details-btn"
                          onClick={() => navigate(`/vehicles/${vehicle.id}`)}
                        >
                          More details
                        </button>
                        <button
                          className={`wishlist-icon-btn ${isWishlisted(`vehicles-${vehicle.id}`) ? "active" : ""}`}
                          aria-label="Save to wishlist"
                          title="Save to wishlist"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(vehicle);
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

export default Vehicles;
