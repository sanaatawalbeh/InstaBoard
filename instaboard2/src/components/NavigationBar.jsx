import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaHeart,
  FaRegGem,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "../styles/NavigationBar.css";

export default function NavigationBar({ lightMode, setLightMode }) {
  const currentPath = window.location.hash.replace("#", "") || "/";

  return (
    <>
      <nav className={`navbar ${lightMode ? "light" : "dark"}`}>
        <h2 className="logo">
          <FaRegGem className="logo-icon glowing-icon" />
          <span className="logo-text glowing-text">InstaBoard</span>
        </h2>

        <div className="nav-links">
          <NavLink
            to="/"
            className={`nav-link ${currentPath === "/" ? "active" : ""}`}
          >
            <div className="nav-item">
              <FaHome className="nav-icon" />
              <span className="nav-label">Home</span>
            </div>
          </NavLink>

          <NavLink
            to="/about"
            className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
          >
            <div className="nav-item">
              <FaInfoCircle className="nav-icon" />
              <span className="nav-label">About</span>
            </div>
          </NavLink>

          <NavLink
            to="/team"
            className={`nav-link ${currentPath === "/team" ? "active" : ""}`}
          >
            <div className="nav-item">
              <FaUsers className="nav-icon" />
              <span className="nav-label">Team</span>
            </div>
          </NavLink>

          <NavLink
            to="/liked-users"
            className={`nav-link ${
              currentPath === "/liked-users" ? "active" : ""
            }`}
          >
            <div className="nav-item">
              <FaHeart className="nav-icon" />
              <span className="nav-label">Likes</span>
            </div>
          </NavLink>
        </div>

        <button
          className="mode-toggle-btn"
          onClick={() => setLightMode(!lightMode)}
        >
          {lightMode ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </>
  );
}
