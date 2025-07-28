import { Link } from "react-router-dom";
import {
  FaUsers,
  FaInfoCircle,
  FaArrowRight,
  FaUserFriends,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>
          Welcome to <span className="highlight">InstaBoard</span>
        </h1>
        <p className="home-subtitle">
          Discover amazing people , Like your favorites , Stay connected.
        </p>

        <div className="home-buttons">
          <Link to="/team" className="home-btn">
            <FaUsers /> Meet The Team <FaArrowRight />
          </Link>
          <Link to="/about" className="home-btn outline">
            <FaInfoCircle /> About Us
          </Link>
        </div>
      </div>

      <div className="features-wrapper">
        <h2 className="features-title">Our Features</h2>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3>
              <div className="icon-wrapper">
                <FaSearch />
              </div>
              Explore Profiles
            </h3>
            <p>Get to know random users from around the world in one click.</p>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3>
              <div className="icon-wrapper">
                <FaHeart />
              </div>
              Like Users
            </h3>
            <p>Mark your favorites and save them locally using localStorage.</p>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3>
              <div className="icon-wrapper">
                <FaInfoCircle />
              </div>
              View Details
            </h3>
            <p>See full user info including email, location, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
