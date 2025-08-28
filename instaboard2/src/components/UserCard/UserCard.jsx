import React, { useState, useEffect } from "react";
import "./UserCard.css";
import { FaHeart, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user, onClick, updateLikes, lightMode }) {
  const [showEmail, setShowEmail] = useState(false);
  const [liked, setLiked] = useState(false);
  const fullName = `${user.name.first} ${user.name.last}`;
  const navigate = useNavigate();

  const goToProfile = () => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    navigate(`/profile/${user.login.uuid}`);
  };

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedUsers")) || [];
    const isLiked = savedLikes.some((u) => u.login.uuid === user.login.uuid);
    setLiked(isLiked);
  }, [user]);

  const toggleLike = () => {
    let savedLikes = JSON.parse(localStorage.getItem("likedUsers")) || [];

    if (liked) {
      savedLikes = savedLikes.filter((u) => u.login.uuid !== user.login.uuid);
    } else {
      savedLikes.push(user);
    }

    localStorage.setItem("likedUsers", JSON.stringify(savedLikes));
    setLiked(!liked);
    if (updateLikes) updateLikes();
  };

  return (
    <div className={`user-card ${lightMode ? "light" : "dark"}`}>
      <img src={user.picture.large} alt={fullName} className="user-avatar" />

      <h3 className="user-name">{fullName}</h3>

      {showEmail && (
        <p className="user-email">
          <FaEnvelope style={{ marginRight: "6px" }} />
          {user.email}
        </p>
      )}

      <div className="card-actions">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          <FaHeart />
        </button>

        <button
          className="icon-button"
          onClick={() => setShowEmail(!showEmail)}
          title={showEmail ? "Hide Email" : "Show Email"}
        >
          <FaEnvelope />
        </button>

        <button
          className="icon-button"
          onClick={goToProfile}
          title="Show Details"
        >
          <FaInfoCircle />
        </button>
      </div>
    </div>
  );
}
