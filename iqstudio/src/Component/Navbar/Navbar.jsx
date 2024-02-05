import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import NavComponents from '../NavComponents/NavComponents'
import NavButton from '../NavButton/NavButton'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo />
        <NavComponents />
        <NavButton />
    </div>
  )
}

export default Navbar