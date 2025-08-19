 

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

// Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Use your real API later; mock shown here:
    const mockUser = { username: "ruchira123", email: "ruchira@example.com", role: "Admin" };
    const t = setTimeout(() => setUser(mockUser), 400);
    return () => clearTimeout(t);

    // Real call:
    // axios.get("/api/user/profile", { withCredentials: true })
    //   .then(res => setUser(res.data))
    //   .catch(console.error);
  }, []);

  const handleUpdate = () => {
    console.log("Update clicked");
    // open modal / navigate to edit page
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;
    // await axios.delete("/api/user/delete", { withCredentials: true });
    alert("Account deleted (demo)");
  };

  if (!user) return <div className="profile-page"><p>Loading profile...</p></div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>My Profile</h2>
        <div className="profile-details">
          <div className="profile-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
          <div className="profile-actions">
            <button className="update-btn" onClick={handleUpdate}>Update</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

