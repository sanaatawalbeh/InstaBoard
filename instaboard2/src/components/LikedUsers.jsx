import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import "../styles/LikedUsers.css"
export default function LikedUsers() {
  const [likedUsers, setLikedUsers] = useState([]);

  const loadLikedUsers = () => {
    const stored = JSON.parse(localStorage.getItem("likedUsers")) || [];
    setLikedUsers(stored);
  };

  useEffect(() => {
    loadLikedUsers();
  }, []);

  return (
    <div className="liked-users-page">
      <h3>You Liked {likedUsers.length} Users</h3>
      {likedUsers.length === 0 ? (
        <p>No liked users yet.</p>
      ) : (
        <div className="team-grid">
          {likedUsers.map((user) => (
            <UserCard
              key={user.login.uuid}
              user={user}
              updateLikes={loadLikedUsers}
            />
          ))}
        </div>
      )}
    </div>
  );
}
