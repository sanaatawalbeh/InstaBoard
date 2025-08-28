import React from "react";
import "../styles/Footer.css";

export default function Footer({ lightMode }) {
  return (
    <footer className={lightMode ? "footer-light" : "footer-dark"}>
      <p>&copy; {new Date().getFullYear()} InstaBoard. All rights reserved.</p>
    </footer>
  );
}
