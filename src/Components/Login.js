import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      {/* Left Side - Image */}
      <div className="login-image">
        <img
          src="https://images.unsplash.com/photo-1508948956644-0017e845d797"
          alt="Login Visual"
        />
      </div>

      {/* Right Side - Form */}
      <div className="login-form-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Login to continue</p>

          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/Signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
 