import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import {
	FaBell,
	FaTrash,
	FaCheckCircle,
	FaCircle,
	FaHeart,
	FaTag,
	FaDollarSign,
	FaComment,
	FaClock,
	FaCheckDouble,
} from "react-icons/fa";
import "./notification.css";

const NOTIFICATIONS_KEY = "userNotifications";

const DEFAULT_NOTIFICATIONS = [
	{
		id: 1,
		type: "price_drop",
		title: "Price Drop Alert",
		message: "iPhone 15 Pro price dropped from $1200 to $1150",
		icon: "dollar",
		read: false,
		timestamp: new Date(Date.now() - 1000 * 60 * 5),
		actionUrl: "/Phones",
	},
	{
		id: 2,
		type: "wishlist",
		title: "Item Back in Stock",
		message: "Galaxy S24 is now available in your wishlist",
		icon: "heart",
		read: false,
		timestamp: new Date(Date.now() - 1000 * 60 * 30),
		actionUrl: "/wishlist",
	},
	{
		id: 3,
		type: "seller_message",
		title: "New Seller Message",
		message: "John Doe replied to your inquiry about MacBook Air M2",
		icon: "message",
		read: false,
		timestamp: new Date(Date.now() - 1000 * 60 * 120),
		actionUrl: "/profile",
	},
	{
		id: 4,
		type: "new_listing",
		title: "New Listing Match",
		message: "Sony WH-1000XM5 headphones posted in Electronics",
		icon: "tag",
		read: true,
		timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
		actionUrl: "/electronics",
	},
	{
		id: 5,
		type: "order_update",
		title: "Order Status Updated",
		message: "Your order for iPhone 15 case has been shipped",
		icon: "check",
		read: true,
		timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
		actionUrl: "/profile",
	},
];

function Notifications() {
	const navigate = useNavigate();
	const [notifications, setNotifications] = useState([]);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		const saved = localStorage.getItem(NOTIFICATIONS_KEY);
		if (!saved) {
			setNotifications(DEFAULT_NOTIFICATIONS);
			localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(DEFAULT_NOTIFICATIONS));
		} else {
			try {
				const parsed = JSON.parse(saved);
				setNotifications(Array.isArray(parsed) ? parsed : DEFAULT_NOTIFICATIONS);
			} catch (error) {
				setNotifications(DEFAULT_NOTIFICATIONS);
			}
		}
	}, []);

	const filteredNotifications =
		filter === "unread"
			? notifications.filter((n) => !n.read)
			: notifications;

	const unreadCount = notifications.filter((n) => !n.read).length;

	const handleMarkAsRead = (id) => {
		const updated = notifications.map((n) =>
			n.id === id ? { ...n, read: true } : n
		);
		setNotifications(updated);
		localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
	};

	const handleMarkAllAsRead = () => {
		const updated = notifications.map((n) => ({ ...n, read: true }));
		setNotifications(updated);
		localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
	};

	const handleDelete = (id) => {
		const updated = notifications.filter((n) => n.id !== id);
		setNotifications(updated);
		localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
	};

	const handleDeleteAll = () => {
		setNotifications([]);
		localStorage.removeItem(NOTIFICATIONS_KEY);
	};

	const getNotificationIcon = (type) => {
		switch (type) {
			case "dollar":
				return <FaDollarSign className="notification-type-icon" />;
			case "heart":
				return <FaHeart className="notification-type-icon" />;
			case "message":
				return <FaComment className="notification-type-icon" />;
			case "tag":
				return <FaTag className="notification-type-icon" />;
			case "check":
				return <FaCheckCircle className="notification-type-icon" />;
			default:
				return <FaBell className="notification-type-icon" />;
		}
	};

	const formatTime = (date) => {
		const now = new Date();
		const diffMs = now - new Date(date);
		const diffMins = Math.floor(diffMs / 60000);
		const diffHours = Math.floor(diffMins / 60);
		const diffDays = Math.floor(diffHours / 24);

		if (diffMins < 1) return "just now";
		if (diffMins < 60) return `${diffMins}m ago`;
		if (diffHours < 24) return `${diffHours}h ago`;
		if (diffDays < 7) return `${diffDays}d ago`;

		return new Date(date).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		});
	};

	return (
		<>
			<Navbar />

			<main className="notifications-page">
				<section className="notifications-hero">
					<div className="notifications-hero-content">
						<span className="notifications-pill">
							<FaBell /> Real-time Updates
						</span>
						<h1>Notifications</h1>
						<p>
							Stay informed about price drops, new listings, seller messages,
							and more. Never miss an important update.
						</p>
					</div>
					<div className="notifications-hero-panel">
						<div className="notifications-stat">
							<span>Unread</span>
							<strong className="unread-badge">{unreadCount}</strong>
						</div>
						<div className="notifications-stat">
							<span>Total</span>
							<strong>{notifications.length}</strong>
						</div>
						<div className="notifications-stat">
							<span>Status</span>
							<strong>{unreadCount === 0 ? "All Read" : "Pending"}</strong>
						</div>
					</div>
				</section>

				<section className="notifications-body">
					<div className="notifications-body-header">
						<div className="notifications-filters">
							<button
								className={`filter-btn ${filter === "all" ? "active" : ""}`}
								onClick={() => setFilter("all")}
							>
								All Notifications ({notifications.length})
							</button>
							<button
								className={`filter-btn ${filter === "unread" ? "active" : ""}`}
								onClick={() => setFilter("unread")}
							>
								Unread ({unreadCount})
							</button>
						</div>

						<div className="notifications-actions">
							{unreadCount > 0 && (
								<button
									className="notifications-btn ghost"
									onClick={handleMarkAllAsRead}
									title="Mark all as read"
								>
									<FaCheckDouble /> Mark all read
								</button>
							)}
							{notifications.length > 0 && (
								<button
									className="notifications-btn danger"
									onClick={handleDeleteAll}
									title="Delete all notifications"
								>
									<FaTrash /> Clear all
								</button>
							)}
						</div>
					</div>

					{filteredNotifications.length === 0 ? (
						<div className="notifications-empty">
							<FaBell className="empty-icon" />
							<h3>No notifications yet</h3>
							<p>
								{filter === "unread"
									? "You're all caught up! Check back later for updates."
									: "Start following listings and sellers to receive notifications."}
							</p>
							<button
								className="notifications-btn primary"
								onClick={() => navigate("/Phones")}
							>
								Browse listings
							</button>
						</div>
					) : (
						<div className="notifications-list">
							{filteredNotifications.map((notification) => (
								<article
									key={notification.id}
									className={`notification-item ${!notification.read ? "unread" : ""}`}
								>
									<div className="notification-indicator">
										{!notification.read && <FaCircle className="unread-dot" />}
									</div>

									<div className="notification-icon-badge">
										{getNotificationIcon(notification.icon)}
									</div>

									<div className="notification-content">
										<div className="notification-header">
											<h4>{notification.title}</h4>
											<span className="notification-time">
												<FaClock className="time-icon" />
												{formatTime(notification.timestamp)}
											</span>
										</div>
										<p className="notification-message">{notification.message}</p>
									</div>

									<div className="notification-actions">
										{!notification.read && (
											<button
												className="action-btn mark-read"
												onClick={() => handleMarkAsRead(notification.id)}
												title="Mark as read"
											>
												Mark read
											</button>
										)}
										{notification.actionUrl && (
											<button
												className="action-btn view"
												onClick={() => navigate(notification.actionUrl)}
											>
												View
											</button>
										)}
										<button
											className="action-btn delete"
											onClick={() => handleDelete(notification.id)}
											title="Delete notification"
										>
											<FaTrash />
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

export default Notifications;
