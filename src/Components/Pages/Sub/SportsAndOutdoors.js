import React from "react";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import "./SportsAndOutdoors.css";

function SportsAndOutdoors() {
  return (
    <>
      <Navbar />
      <div className="vehicles-container">
        <div className="vehicles-header">
          <h1 className="page-title">Sports and Outdoors</h1>
          <p className="page-subtitle">Browse gear for fitness, travel, and outdoor fun.</p>
        </div>
        <div className="vehicles-content">
          <div className="vehicles-main">
            <div className="results-header">
              <p className="results-count">No listings yet. Add items to see them here.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SportsAndOutdoors;
