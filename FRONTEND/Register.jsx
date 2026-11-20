
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Registration form submitted");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Left Branding Section */}
        <div className="auth-brand">
          <div className="brand-logo">PLANORA.</div>

          <div className="brand-content">
            <h2>Start planning your success.</h2>
            <p>
              Create your account and bring all your
              tasks, plans, and goals together in one place.
            </p>
          </div>

          <div className="brand-footer">
            Your productivity journey starts here.
          </div>
        </div>

        {/* Registration Form */}
        <div className="auth-form-section">
          <h1>Create Account</h1>

          <p className="auth-subtitle">
            Join Planora and start organizing your day.
          </p>

          <form className="auth-form" onSubmit={handleRegister}>

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerEmail">Email Address</label>
              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerPassword">Password</label>

              <div className="password-wrapper">
                <input
                  id="registerPassword"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 6 characters"
                  minLength={6}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="password-wrapper">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-button">
              Create My Account
            </button>

          </form>

          <p className="auth-bottom-text">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;
