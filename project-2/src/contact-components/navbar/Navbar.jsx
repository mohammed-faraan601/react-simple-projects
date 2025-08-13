import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <div>
        <img src="/images/nav_logo.png" alt="logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default Navbar;
