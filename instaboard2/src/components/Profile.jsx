import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selectedUser"));
    setUser(stored);
  }, []);

  if (!user) return <p>Loading...</p>;

  const fullName = `${user.name.first} ${user.name.last}`;
  const userName = `${user.name.first}${user.name.last}`;

  const toggleFollow = () => {
    if (isFollowing) {
      setShowModal(true); // Ask before unfollowing
    } else {
      setIsFollowing(true);
    }
  };

  const confirmUnfollow = () => {
    setIsFollowing(false);
    setShowModal(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={user.picture.large}
          alt={fullName}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>{fullName}</h2>
          <p className="user-email">{user.email}</p>
          <p className="user-Location">
            Location :{user.location.country}-{user.location.city}
          </p>
          <p className="user-Regestration-Date">RegesterationAge :{user.registered.date}</p>

          <p className="user-Age">Age :{user.dob.age}</p>

          <div className="stats">
            <span>
              <strong>0</strong> Posts
            </span>
            <span>
              <strong>340</strong> Followers
            </span>
            <span>
              <strong>180</strong> Following
            </span>
          </div>
          <button
            className={`follow-btn ${isFollowing ? "following" : ""}`}
            onClick={toggleFollow}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
      <div className="no-posts">
        <h2>No posts yet</h2>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>Are you sure you want to unfollow this user {userName} ?</p>
            <div className="modal-buttons">
              <button onClick={confirmUnfollow}>Unfollow</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <button className="back-btn" onClick={() => navigate("/team")}>
        ← Back to Team
      </button>
    </div>
  );
}
