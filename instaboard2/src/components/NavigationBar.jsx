import { NavLink, Routes, Route } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaHeart,
  FaRegGem,
} from "react-icons/fa";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Team from "./Team/Team";
import LikedUsers from "./LikedUsers";
import Profile from "./Profile";
import NotFound from "../Pages/NotFound";
import "../styles/NavigationBar.css";

export default function NavigationBar() {

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          <FaRegGem className="logo-icon glowing-icon" />
          <span className="logo-text glowing-text">InstaBoard</span>
        </h2>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            <div className="nav-item">
              <FaHome className="nav-icon" />
              <span className="nav-label">Home</span>
            </div>
          </NavLink>

          <NavLink to="/about" className="nav-link">
            <div className="nav-item">
              <FaInfoCircle className="nav-icon" />
              <span className="nav-label">About</span>
            </div>
          </NavLink>

          <NavLink to="/team" className="nav-link">
            <div className="nav-item">
              <FaUsers className="nav-icon" />
              <span className="nav-label">Team</span>
            </div>
          </NavLink>

          <NavLink to="/liked-users" className="nav-link">
            <div className="nav-item">
              <FaHeart className="nav-icon" />
              <span className="nav-label">Likes</span>
            </div>
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/liked-users" element={<LikedUsers />} />
        <Route path="/profile/:uuid" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
