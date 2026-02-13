import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaCar, 
  FaHome, 
  FaMobileAlt, 
  FaCouch,
  FaTshirt,
  FaSeedling,
  FaFlag,
  FaBriefcase,
  FaGraduationCap,
  FaCoffee,
  FaGamepad,
  FaHeartbeat,
  FaChevronRight,
  FaHeadset,
  FaClock,
  FaUsers
} from "react-icons/fa";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import "./Home.css";

function HomePage() {
  const navigate = useNavigate();

  const mainCategories = [
    {
      title: "VEHICLES",
      count: "16,291 Vehicle Ads Available",
      icon: FaCar,
      gradient: "from-pink-100 to-pink-200",
      route: "/vehical"
    },
    {
      title: "PROPERTIES",
      count: "12,228 Property Ads Available",
      icon: FaHome,
      gradient: "from-pink-100 to-pink-200",
      route: "/lands"
    },
    {
      title: "ELECTRONICS",
      count: "968 Electronics Ads Available",
      icon: FaMobileAlt,
      gradient: "from-pink-100 to-pink-200",
      route: "/phones"
    },
    {
      title: "HOME & LIVING",
      count: "245 Home & Living Ads Available",
      icon: FaCouch,
      gradient: "from-pink-100 to-pink-200",
      route: "/accessories"
    }
  ];

  const subCategories = [
    { name: "Automotive parts", icon: FaCar, count: "78 ads", color: "text-red-500", bg: "bg-red-50" },
    { name: "Health and Beauty", icon: FaHeartbeat, count: "64 ads", color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Toys & Games", icon: FaGamepad, count: "25 ads", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Education", icon: FaGraduationCap, count: "36 ads", color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Other", icon: FaBriefcase, count: "57 ads", color: "text-green-500", bg: "bg-green-50" },
    { name: "Sports & Outdoors", icon: FaSeedling, count: "42 ads", color: "text-teal-500", bg: "bg-teal-50" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-clip bg-gradient-to-br from-blue-100 via-indigo-100 to-violet-100 text-[#0b1220] py-20 md:py-25 border-b border-indigo-200/30">
        <div className="absolute inset-0 bg-indigo-50/40 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none animate-float"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none animate-float delay-300"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-xs mb-3 text-indigo-500 font-medium opacity-0 animate-fade-in-down delay-100">DISCOVER YOUR MARKETPLACE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-1 opacity-0 animate-fade-in-up delay-200">
              Find Everything in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">One Place</span>
            </h1>
            <p className="text-slate-600 mt-6 mb-10 leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
              Buy and sell vehicles, properties, electronics, home & living items, and more with ease. Your trusted marketplace for everything.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 text-sm mb-12 opacity-0 animate-slide-in-left delay-500">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-100/50 hover:scale-105 transition-transform duration-300">
                <FaHeadset className="text-blue-500" /> Wide Selection
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-violet-100/50 hover:scale-105 transition-transform duration-300">
                <FaClock className="text-violet-500" /> Easy Listing
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-100/50 hover:scale-105 transition-transform duration-300">
                <FaUsers className="text-blue-400" /> Secure Trading
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main Categories Grid */}
      <section className="main-categories-section">
        <div className="container-main">
          <div className="categories-grid">
            {mainCategories.map((category, index) => (
              <div
                key={index}
                className={`category-card bg-gradient-to-br ${category.gradient}`}
                onClick={() => navigate(category.route)}
              >
                <div className="category-header">
                  <h3 className="category-title">
                    {category.title} <FaChevronRight />
                  </h3>
                  <p className="category-count">{category.count}</p>
                </div>
                <div className="category-icon-wrapper">
                  <category.icon className="category-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Categories */}
      <section className="sub-categories-section">
        <div className="container-main">
          <div className="sub-categories-marquee">
            <div className="sub-categories-grid">
              {subCategories.map((category, index) => (
                <div
                  key={`subcat-${index}`}
                  className="sub-category-card"
                >
                  <div className={`sub-category-icon ${category.bg}`}>
                    <category.icon className={category.color} />
                  </div>
                  <div className="sub-category-info">
                    <h4 className="sub-category-name">{category.name}</h4>
                    <p className="sub-category-count">{category.count}</p>
                  </div>
                  <FaChevronRight className="sub-category-arrow" />
                </div>
              ))}
              {subCategories.map((category, index) => (
                <div
                  key={`subcat-dup-${index}`}
                  className="sub-category-card"
                >
                  <div className={`sub-category-icon ${category.bg}`}>
                    <category.icon className={category.color} />
                  </div>
                  <div className="sub-category-info">
                    <h4 className="sub-category-name">{category.name}</h4>
                    <p className="sub-category-count">{category.count}</p>
                  </div>
                  <FaChevronRight className="sub-category-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="vehicle-types-section">
        <div className="container-main">
          <div className="vehicle-types-row">
            <div className="vehicle-type-column">
              <h3 className="vehicle-type-title">Discover Vehicles by Type to Suit Your Needs</h3>
              <button className="explore-btn">
                Explore All Vehicles <FaChevronRight />
              </button>
              <div className="vehicle-mascot">
                {/* Placeholder for vehicle illustration */}
                <div className="mascot-placeholder">🚗</div>
              </div>
            </div>
            <div className="vehicle-type-column">
              <h3 className="vehicle-type-title">Explore Your Favorite Vehicles by Car Models</h3>
              <button className="explore-btn">
                Explore All Vehicles <FaChevronRight />
              </button>
              <div className="vehicle-brands">
                <div className="brand-item">Toyota Prius</div>
                <div className="brand-item">Toyota Camry</div>
                <div className="brand-item">Toyota CHR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
