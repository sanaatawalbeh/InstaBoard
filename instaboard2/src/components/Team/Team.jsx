import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import "./Team.css";

export default function Team({ lightMode }) {
  const DEFAULT_COUNT = 4;

  const [teamMembers, setTeamMembers] = useState([]);
  const [page, setPage] = useState(1);
  const [inputCount, setInputCount] = useState(DEFAULT_COUNT);

  const fetchUsers = (count, pageNum) => {
    fetch(`https://randomuser.me/api/?results=${count}&page=${pageNum}`)
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers((prev) => [...prev, ...data.results]);
      });
  };

  useEffect(() => {
    if (teamMembers.length === 0 && page === 1) {
      fetchUsers(DEFAULT_COUNT, 1);
    }
  }, []);

  useEffect(() => {
    if (page === 1) return;
    fetchUsers(inputCount, page);
  }, [page]);

  const handleApply = () => {
    setTeamMembers([]);
    setPage(1);
    fetchUsers(inputCount, 1);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={`team-page ${lightMode ? "light" : "dark"}`}>
      <h1 className="team-title">Our Team</h1>

      <div className="team-controls">
        <div className="custom-number-input">
          <button onClick={() => setInputCount((v) => Math.max(v - 1, 1))}>
            -
          </button>
          <input type="text" value={inputCount} readOnly />
          <button onClick={() => setInputCount((v) => Math.min(v + 1, 100))}>
            +
          </button>
        </div>

        <button onClick={handleApply} className="apply-btn">
          Apply
        </button>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <UserCard
            key={idx}
            user={member}
            onClick={() => {}}
            lightMode={lightMode} // تمرير Light Mode لكل كارد
          />
        ))}
      </div>
      <button className="load-more-btn" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}
