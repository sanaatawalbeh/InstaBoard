import "../styles/About.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About InstaBoard</h1>

      <p className="about-text">
        <strong>InstaBoard</strong> is a sleek React app where you can discover
        random people, view their profiles, and like your favorites. It's built
        to help me practice core React concepts such as{" "}
        <span className="highlight">routing</span>,
        <span className="highlight">hooks</span>,{" "}
        <span className="highlight">props</span>, and{" "}
        <span className="highlight">localStorage</span> — all while having fun.
      </p>

      <div className="about-team">
        <h2 className="about-subtitle">
          <FaCode className="icon-inline" /> Meet the Creator
        </h2>
        <p className="about-text">
          Crafted with care using <span className="highlight">React</span>,
          <span className="highlight"> React Router</span>, and a passion for
          clean, elegant UI.
        </p>

        <div className="creator-info">
          <h3 className="creator-name">Sana'a Tawalbeh</h3>
          <p className="creator-role">Frontend Developer | React Enthusiast</p>

          <div className="creator-links">
            <a
              href="https://github.com/sanaatawalbeh"
              target="_blank"
              rel="noopener noreferrer"
              className="creator-btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanaa-tawalbeh-959911318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="creator-btn outline"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
