import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Auth.css";

function Login() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
  e.preventDefault();

  navigate("/dashboard");
};

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Left Branding Section */}
        <div className="auth-brand">
          <div className="brand-logo">PLANORA.</div>

          <div className="brand-content">
            <h2>Make every day a productive one.</h2>
            <p>
              Organize your tasks, manage your time,
              and turn your goals into achievements.
            </p>
          </div>

          <div className="brand-footer">
            Plan smarter. Stay organized. Get things done.
          </div>
        </div>

        {/* Login Form */}
        <div className="auth-form-section">
          <h1>Welcome Back!</h1>

          <p className="auth-subtitle">
            Enter your details to access your Planora account.
          </p>

          <form className="auth-form" onSubmit={handleLogin}>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            <div className="auth-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="auth-link"
                onClick={(e) => e.preventDefault()}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="auth-button">
              Login to Planora
            </button>

          </form>

          <p className="auth-bottom-text">
            Don't have an account?{" "}
            <Link to="/register" className="auth-link">
              Create Account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
