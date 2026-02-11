 

// import React, { useState, useEffect } from "react";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Simulate API response (mock JSON data)
//     const mockUser = {
//       username: "ruchira123",
//       email: "ruchira@example.com",
//       role: "Admin"
//     };

//     // Fake API delay
//     setTimeout(() => {
//       setUser(mockUser);
//     }, 1000);
//   }, []);

//   const handleUpdate = () => {
//     console.log("Update button clicked");
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete your account?")) {
//       alert("Account deleted (demo)");
//     }
//   };

//   if (!user) return <p>Loading profile...</p>;

//   return (
//     <div className="profile-container">
//       <h2>My Profile</h2>
//       <div className="profile-details">
//         <div className="profile-info">
//           <p><strong>Username:</strong> {user.username}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Role:</strong> {user.role}</p>
//         </div>
//         <div className="profile-actions">
//           <button className="update-btn" onClick={handleUpdate}>Update</button>
//           <button className="delete-btn" onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import {
  FaUserCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClipboardList,
  FaCog,
  FaCreditCard,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const mockUser = {
      name: "Ruchira Senanayake",
      username: "ruchira123",
      email: "ruchira@example.com",
      phone: "+94 77 123 4567",
      address: "No. 24, Green Avenue, Colombo",
      nic: "981234567V",
      city: "Colombo",
      postalCode: "00700",
      joined: "March 2024",
    };
    const t = setTimeout(() => setUser(mockUser), 400);
    return () => clearTimeout(t);
  }, []);

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-loading">Loading profile...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="profile-page">
        <section className="profile-shell">
          <aside className="profile-sidebar">
            <div className="profile-avatar">
              <FaUserCircle />
            </div>
            <h2>{user.name}</h2>
            <p className="profile-handle">@{user.username}</p>

            <nav className="profile-nav">
              <button className="profile-nav-item active">
                <FaUserCircle /> Profile Overview
              </button>
              <button className="profile-nav-item" onClick={() => navigate("/my-ads")}
              >
                <FaClipboardList /> My Ads
              </button>
              <button className="profile-nav-item" onClick={() => navigate("/settings")}
              >
                <FaCog /> Settings
              </button>
              <button className="profile-nav-item" onClick={() => navigate("/payments")}
              >
                <FaCreditCard /> Payment Details
              </button>
            </nav>

            <button className="profile-logout">
              <FaSignOutAlt /> Sign out
            </button>
          </aside>

          <section className="profile-content">
            <div className="profile-header">
              <div>
                <span className="profile-pill">Account</span>
                <h1>My Profile</h1>
                <p>Manage your personal info and see account details in one place.</p>
              </div>
              <button className="profile-edit">
                <FaEdit /> Edit Profile
              </button>
            </div>

            <div className="profile-cards">
              <article className="profile-card profile-card-full">
                <h3>My Profile</h3>
                <div className="profile-detail-grid">
                  <div>
                    <span>Name</span>
                    <strong>{user.name}</strong>
                  </div>
                  <div>
                    <span>Joined</span>
                    <strong>{user.joined}</strong>
                  </div>
                  <div>
                    <span>NIC</span>
                    <strong>{user.nic}</strong>
                  </div>
                  <div>
                    <span>City</span>
                    <strong>{user.city}</strong>
                  </div>
                  <div>
                    <span>Postal Code</span>
                    <strong>{user.postalCode}</strong>
                  </div>
                </div>
                <div className="profile-detail-list">
                  <div className="profile-detail-item">
                    <FaPhoneAlt />
                    <div>
                      <span>Phone Number</span>
                      <strong>{user.phone}</strong>
                    </div>
                  </div>
                  <div className="profile-detail-item">
                    <FaEnvelope />
                    <div>
                      <span>Email Address</span>
                      <strong>{user.email}</strong>
                    </div>
                  </div>
                  <div className="profile-detail-item">
                    <FaMapMarkerAlt />
                    <div>
                      <span>Address</span>
                      <strong>{user.address}</strong>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

