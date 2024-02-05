import React from 'react'
import styles from './NavComponents.module.css'

const NavComponents = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.button}>Home</p>
        <p className={styles.button}>Attorneys</p>
        <p className={styles.button}>Practice Areas</p>
        <p className={styles.button}>About Us</p>
    </div>
  )
}

export default NavComponents