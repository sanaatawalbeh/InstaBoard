import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import "../styles/LikedUsers.css";

export default function LikedUsers({ lightMode }) {
  const [likedUsers, setLikedUsers] = useState([]);

  const loadLikedUsers = () => {
    const stored = JSON.parse(localStorage.getItem("likedUsers")) || [];
    setLikedUsers(stored);
  };

  useEffect(() => {
    loadLikedUsers();
  }, []);

  return (
    <div className={`liked-users-page ${lightMode ? "light" : "dark"}`}>
      <h3 className="user-count">You Liked {likedUsers.length} Users</h3>
      {likedUsers.length === 0 ? (
        <p className="user-count">No liked users yet.</p>
      ) : (
        <div className="team-grid">
          {likedUsers.map((user) => (
            <UserCard
              key={user.login.uuid}
              user={user}
              updateLikes={loadLikedUsers}
              lightMode={lightMode} // تمرير Light Mode لكل كارد
            />
          ))}
        </div>
      )}
    </div>
  );
}
