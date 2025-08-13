import React from 'react'
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={`${styles.navbar} container`} >
      <div className='logo'>
        <img src="/images/nav_logo.png" alt="logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
