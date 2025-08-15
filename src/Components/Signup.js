import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-page">
      {/* Left Side - Image */}
      <div className="signup-image">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
          alt="Signup Visual"
        />
      </div>

      {/* Right Side - Form */}
      <div className="signup-form-container">
        <div className="signup-card">
          <h2>Create Your Account</h2>
          <p className="subtitle">Join us today! It only takes a minute.</p>

          <form>
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />

            <button type="submit">Register</button>
          </form>

          <p className="login-text">
            Already have an account?  <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
