import React, { useState } from "react";
import "./Accessories.css";
import earbuds from "../../../Assets/Img/earbuds.jpg";
import { FaStar, FaCartPlus, FaBolt } from "react-icons/fa";

const accessoriesData = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    category: "Audio",
    price: 65,
    discount: 15,
    rating: 4.5,
    image: earbuds,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 80,
    discount: 10,
    rating: 4.7,
    image: "https://via.placeholder.com/220x220?text=Speaker",
  },
  {
    id: 3,
    name: "Wired Headphones",
    category: "Audio",
    price: 35,
    discount: 5,
    rating: 4.3,
    image: "https://via.placeholder.com/220x220?text=Headphones",
  },
  {
    id: 4,
    name: "Fast Charger 25W",
    category: "Chargers",
    price: 25,
    discount: 8,
    rating: 4.6,
    image: "https://via.placeholder.com/220x220?text=Fast+Charger",
  },
  {
    id: 5,
    name: "Wireless Charger Pad",
    category: "Chargers",
    price: 40,
    discount: 12,
    rating: 4.4,
    image: "https://via.placeholder.com/220x220?text=Wireless+Pad",
  },
  {
    id: 6,
    name: "Car Charger Dual USB",
    category: "Chargers",
    price: 18,
    discount: 5,
    rating: 4.2,
    image: "https://via.placeholder.com/220x220?text=Car+Charger",
  },
  {
    id: 7,
    name: "Transparent Phone Case",
    category: "Cases",
    price: 15,
    discount: 10,
    rating: 4.1,
    image: "https://via.placeholder.com/220x220?text=Clear+Case",
  },
  {
    id: 8,
    name: "Rugged Shockproof Case",
    category: "Cases",
    price: 22,
    discount: 15,
    rating: 4.8,
    image: "https://via.placeholder.com/220x220?text=Rugged+Case",
  },
  {
    id: 9,
    name: "Flip Leather Wallet Case",
    category: "Cases",
    price: 30,
    discount: 20,
    rating: 4.5,
    image: "https://via.placeholder.com/220x220?text=Wallet+Case",
  },
  {
    id: 10,
    name: "Tempered Glass Protector",
    category: "Protection",
    price: 12,
    discount: 5,
    rating: 4.6,
    image: "https://via.placeholder.com/220x220?text=Screen+Protector",
  },
  {
    id: 11,
    name: "Camera Lens Protector",
    category: "Protection",
    price: 8,
    discount: 5,
    rating: 4.4,
    image: "https://via.placeholder.com/220x220?text=Lens+Protector",
  },
  {
    id: 12,
    name: "Privacy Glass",
    category: "Protection",
    price: 18,
    discount: 12,
    rating: 4.3,
    image: "https://via.placeholder.com/220x220?text=Privacy+Glass",
  },
];

function Accessories() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleBuyNow = (item) => {
    alert(`You bought: ${item.name} ✅`);
  };

  const filteredAccessories =
    filter === "All"
      ? accessoriesData
      : accessoriesData.filter((acc) => acc.category === filter);

  return (
    <div className="accessories-container">
      <h1 className="page-title">Shop Accessories</h1>

      {/* Category Filter */}
      <div className="category-filter">
        {["All", "Audio", "Chargers", "Cases", "Protection"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="accessories-grid">
        {filteredAccessories.map((item) => (
          <div className="accessory-card" key={item.id}>
            <span className="discount-badge">-{item.discount}%</span>
            <img src={item.image} alt={item.name} className="accessory-img" />
            <h3>{item.name}</h3>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.floor(item.rating) ? "#FFD700" : "#ccc"}
                />
              ))}
              <span className="rating-num">{item.rating}</span>
            </div>
            <p className="price">
              <span className="old-price">
                ${Math.round(item.price + item.price * (item.discount / 100))}
              </span>
              <span className="new-price">${item.price}</span>
            </p>
            <div className="action-btns">
              <button
                className="add-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                <FaCartPlus /> Add to Cart
              </button>
              <button
                className="buy-now-btn"
                onClick={() => handleBuyNow(item)}
              >
                <FaBolt /> Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Info */}
      <div className="cart-summary">
        <h2>🛒 Cart: {cart.length} items</h2>
      </div>
    </div>
  );
}

export default Accessories;
