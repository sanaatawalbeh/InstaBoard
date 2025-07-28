import { FaExclamationTriangle } from "react-icons/fa";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-icon-wrapper">
        <FaExclamationTriangle className="notfound-icon" />
      </div>
      <div className="notfound-text">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="notfound-home-button">
          Back to Home
        </a>
      </div>
    </div>
  );
}
