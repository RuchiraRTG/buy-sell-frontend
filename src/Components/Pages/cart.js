import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import {
	FaShoppingCart,
	FaTrash,
	FaPlus,
	FaMinus,
	FaArrowRight,
	FaBoxOpen,
	FaAppleAlt,
} from "react-icons/fa";
import "./cart.css";

const CART_KEY = "cartItems";

function Cart() {
	const navigate = useNavigate();
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const saved = localStorage.getItem(CART_KEY);
		if (!saved) {
			setCartItems([]);
			return;
		}

		try {
			const parsed = JSON.parse(saved);
			setCartItems(Array.isArray(parsed) ? parsed : []);
		} catch (error) {
			setCartItems([]);
		}
	}, []);

	const saveCart = (items) => {
		localStorage.setItem(CART_KEY, JSON.stringify(items));
	};

	const calculations = useMemo(() => {
		const subtotal = cartItems.reduce((sum, item) => {
			return sum + Number(item.price) * (item.quantity || 1);
		}, 0);
		const taxRate = 0.08;
		const tax = subtotal * taxRate;
		const total = subtotal + tax;

		return {
			subtotal: parseFloat(subtotal.toFixed(2)),
			tax: parseFloat(tax.toFixed(2)),
			total: parseFloat(total.toFixed(2)),
			itemCount: cartItems.length,
		};
	}, [cartItems]);

	const handleQtyChange = (id, newQty) => {
		if (newQty <= 0) {
			handleRemove(id);
			return;
		}

		const updated = cartItems.map((item) =>
			item.id === id ? { ...item, quantity: newQty } : item
		);
		setCartItems(updated);
		saveCart(updated);
	};

	const handleRemove = (id) => {
		const updated = cartItems.filter((item) => item.id !== id);
		setCartItems(updated);
		saveCart(updated);
	};

	const handleClear = () => {
		setCartItems([]);
		localStorage.removeItem(CART_KEY);
	};

	const handleCheckout = () => {
		alert(
			`Checkout for $${calculations.total} with ${calculations.itemCount} item(s). This is a demo!`
		);
	};

	return (
		<>
			<Navbar />

			<main className="cart-page">
				<section className="cart-hero">
					<div className="cart-hero-content">
						<span className="cart-pill">
							<FaShoppingCart /> Your Cart
						</span>
						<h1>Shopping Cart</h1>
						<p>
							Review your items and proceed to checkout. You can adjust quantities
							or remove items as needed.
						</p>
					</div>
					<div className="cart-hero-panel">
						<div className="cart-stat">
							<span>Items</span>
							<strong>{calculations.itemCount}</strong>
						</div>
						<div className="cart-stat">
							<span>Subtotal</span>
							<strong>${calculations.subtotal.toLocaleString()}</strong>
						</div>
						<div className="cart-stat">
							<span>Total</span>
							<strong className="total-price">${calculations.total.toLocaleString()}</strong>
						</div>
					</div>
				</section>

				<section className="cart-body">
					{cartItems.length === 0 ? (
						<div className="cart-empty">
							<FaBoxOpen className="empty-icon" />
							<h3>Your cart is empty</h3>
							<p>
								Add items from Phones, Electronics, or Property listings to get started.
								Your cart will be saved while you shop.
							</p>
							<div className="cart-empty-actions">
								<button
									className="cart-btn primary"
									onClick={() => navigate("/Phones")}
								>
									<FaArrowRight /> Browse phones
								</button>
								<button
									className="cart-btn ghost"
									onClick={() => navigate("/electronics")}
								>
									Browse electronics
								</button>
								<button
									className="cart-btn ghost"
									onClick={() => navigate("/lands")}
								>
									View properties
								</button>
							</div>
						</div>
					) : (
						<div className="cart-content">
							<div className="cart-items-section">
								<div className="cart-items-header">
									<h2>Items in cart ({calculations.itemCount})</h2>
									{cartItems.length > 0 && (
										<button
											className="cart-btn danger"
											onClick={handleClear}
										>
											<FaTrash /> Clear cart
										</button>
									)}
								</div>

								<div className="cart-items-list">
									{cartItems.map((item) => (
										<article key={item.id} className="cart-item">
											<div className="cart-item-image">
												<img
													src={
														item.image ||
														"https://via.placeholder.com/120x120?text=Item"
													}
													alt={item.title || "Cart item"}
												/>
											</div>

											<div className="cart-item-details">
												<h4>{item.title || "Untitled item"}</h4>
												<p className="cart-item-meta">
													{item.category && (
														<span className="cart-item-category">
															{item.category}
														</span>
													)}
													{item.location && (
														<span className="cart-item-location">
															📍 {item.location}
														</span>
													)}
												</p>
											</div>

											<div className="cart-item-price">
												<span className="price-label">Price</span>
												<span className="price-value">
													${Number(item.price || 0).toLocaleString()}
												</span>
											</div>

											<div className="cart-item-quantity">
												<span className="qty-label">Qty</span>
												<div className="qty-control">
													<button
														className="qty-btn"
														onClick={() =>
															handleQtyChange(
																item.id,
																(item.quantity || 1) - 1
															)
														}
													>
														<FaMinus />
													</button>
													<span className="qty-display">
														{item.quantity || 1}
													</span>
													<button
														className="qty-btn"
														onClick={() =>
															handleQtyChange(
																item.id,
																(item.quantity || 1) + 1
															)
														}
													>
														<FaPlus />
													</button>
												</div>
											</div>

											<div className="cart-item-total">
												<span className="total-label">Total</span>
												<span className="total-value">
													$
													{(
														Number(item.price || 0) *
														(item.quantity || 1)
													).toLocaleString()}
												</span>
											</div>

											<button
												className="cart-item-remove"
												onClick={() => handleRemove(item.id)}
												title="Remove item"
											>
												<FaTrash />
											</button>
										</article>
									))}
								</div>
							</div>

							<aside className="cart-summary">
								<div className="summary-card">
									<h3>Order Summary</h3>

									<div className="summary-row">
										<span>Subtotal</span>
										<span>${calculations.subtotal.toLocaleString()}</span>
									</div>

									<div className="summary-row">
										<span>Tax (8%)</span>
										<span>${calculations.tax.toLocaleString()}</span>
									</div>

									<div className="summary-divider"></div>

									<div className="summary-row total-row">
										<span>Total</span>
										<strong>${calculations.total.toLocaleString()}</strong>
									</div>

									<button
										className="cart-btn primary full-width"
										onClick={handleCheckout}
									>
										<FaShoppingCart /> Proceed to Checkout
									</button>

									<button
										className="cart-btn ghost full-width"
										onClick={() => navigate("/Phones")}
									>
										<FaArrowRight /> Continue Shopping
									</button>

									<div className="summary-info">
										<p>✓ Secure checkout powered by trusted payment methods</p>
										<p>✓ Free shipping on orders over $100</p>
										<p>✓ 30-day return policy</p>
									</div>
								</div>
							</aside>
						</div>
					)}
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Cart;
