import React from "react";
import "../styles/Footer.css"; 

export default function Footer() {
  return (
    <footer >
      <p>&copy; {new Date().getFullYear()} InstaBoard. All rights reserved.</p>
    </footer>
  );
}


