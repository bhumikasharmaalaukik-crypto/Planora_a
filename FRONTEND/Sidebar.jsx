
import { NavLink } from "react-router-dom";

function Sidebar({ isDarkMode, onToggleTheme }) {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-logo">PLANORA.</h2>

      <p className="sidebar-heading">MENU</p>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard" className="sidebar-link">
          <span>▦</span> Dashboard
        </NavLink>

        <button className="sidebar-link">
          <span>☷</span> My Tasks
        </button>

        <button className="sidebar-link">
          <span>✓</span> Completed
        </button>

      </nav>

      <div className="sidebar-bottom">

        <p className="sidebar-heading">PREFERENCES</p>

        <button className="sidebar-link">
          <span>⚙</span> Settings
        </button>

        {/* Dark Mode Toggle */}
        <button
          className="sidebar-link theme-toggle"
          onClick={onToggleTheme}
        >
          <span>{isDarkMode ? "☀️" : "🌙"}</span>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <NavLink to="/login" className="sidebar-link logout-link">
          <span>↪</span> Logout
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;
