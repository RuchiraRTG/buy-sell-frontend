import React from "react";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import "./ToysAndGames.css";

function ToysAndGames() {
  return (
    <>
      <Navbar />
      <div className="vehicles-container">
        <div className="vehicles-header">
          <h1 className="page-title">Toys and Games</h1>
          <p className="page-subtitle">Find toys, puzzles, and gaming gear for all ages.</p>
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

export default ToysAndGames;
