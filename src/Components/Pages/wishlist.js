import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import {
	FaHeart,
	FaTrash,
	FaMapMarkerAlt,
	FaTag,
	FaBoxOpen,
	FaArrowRight,
} from "react-icons/fa";
import "./wishlist.css";

const STORAGE_KEY = "wishlistItems";

function Wishlist() {
	const navigate = useNavigate();
	const [items, setItems] = useState([]);

	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (!saved) {
			setItems([]);
			return;
		}

		try {
			const parsed = JSON.parse(saved);
			setItems(Array.isArray(parsed) ? parsed : []);
		} catch (error) {
			setItems([]);
		}
	}, []);

	const totals = useMemo(() => {
		const count = items.length;
		const totalValue = items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
		return { count, totalValue };
	}, [items]);

	const handleRemove = (id) => {
		const nextItems = items.filter((item) => item.id !== id);
		setItems(nextItems);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
	};

	const handleClear = () => {
		setItems([]);
		localStorage.removeItem(STORAGE_KEY);
	};

	return (
		<>
			<Navbar />

			<main className="wishlist-page">
				<section className="wishlist-hero">
					<div className="wishlist-hero-content">
						<span className="wishlist-pill">
							<FaHeart /> Saved ads
						</span>
						<h1>Wishlist</h1>
						<p>
							Keep track of the ads you love. Add items from Phones,
							Electronics, or Property and manage them here.
						</p>
						<div className="wishlist-hero-actions">
							<button
								className="wishlist-btn primary"
								onClick={() => navigate("/Phones")}
							>
								Explore phones <FaArrowRight />
							</button>
							<button
								className="wishlist-btn ghost"
								onClick={() => navigate("/electronics")}
							>
								Browse electronics
							</button>
						</div>
					</div>
					<div className="wishlist-hero-panel">
						<div className="wishlist-stat">
							<span>Saved items</span>
							<strong>{totals.count}</strong>
						</div>
						<div className="wishlist-stat">
							<span>Estimated total</span>
							<strong>${totals.totalValue.toLocaleString()}</strong>
						</div>
						<div className="wishlist-stat">
							<span>Last update</span>
							<strong>{new Date().toLocaleDateString()}</strong>
						</div>
					</div>
				</section>

				<section className="wishlist-body">
					<div className="wishlist-body-header">
						<h2>Your saved ads</h2>
						{items.length > 0 && (
							<button className="wishlist-btn danger" onClick={handleClear}>
								<FaTrash /> Clear all
							</button>
						)}
					</div>

					{items.length === 0 ? (
						<div className="wishlist-empty">
							<FaBoxOpen />
							<h3>No saved ads yet</h3>
							<p>
								When you save an ad, it will appear here so you can compare it
								later.
							</p>
							<div className="wishlist-empty-actions">
								<button
									className="wishlist-btn primary"
									onClick={() => navigate("/Phones")}
								>
									Start saving
								</button>
								<button
									className="wishlist-btn ghost"
									onClick={() => navigate("/lands")}
								>
									View property
								</button>
							</div>
						</div>
					) : (
						<div className="wishlist-grid">
							{items.map((item) => (
								<article className="wishlist-card" key={item.id}>
									<div className="wishlist-card-media">
										<img
											src={
												item.image ||
												"https://via.placeholder.com/400x300?text=Saved+Ad"
											}
											alt={item.title || "Saved ad"}
										/>
										{item.condition && (
											<span className="wishlist-badge">{item.condition}</span>
										)}
									</div>

									<div className="wishlist-card-content">
										<h3>{item.title || "Untitled ad"}</h3>
										<div className="wishlist-meta">
											<span>
												<FaTag /> ${Number(item.price || 0).toLocaleString()}
											</span>
											{item.location && (
												<span>
													<FaMapMarkerAlt /> {item.location}
												</span>
											)}
										</div>
										{item.category && (
											<div className="wishlist-category">{item.category}</div>
										)}
										{item.description && <p>{item.description}</p>}
									</div>

									<div className="wishlist-card-actions">
										{item.route && (
											<button
												className="wishlist-btn ghost"
												onClick={() => navigate(item.route)}
											>
												View details
											</button>
										)}
										<button
											className="wishlist-btn danger"
											onClick={() => handleRemove(item.id)}
										>
											<FaTrash /> Remove
										</button>
									</div>
								</article>
							))}
						</div>
					)}
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Wishlist;
