import React from 'react'
import styles from './Footer.module.css'
import Logo from '../Logo/Logo'
import NavComponents from '../NavComponents/NavComponents'
import insta from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import socmedia from '../../assets/socmedia.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.wrapper}>
        <div className={styles.navFooter}>
            <Logo />
            <NavComponents />
            <div className={styles.socmediaPic}>
                <img src={insta} alt="Insta" />
                <img src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={socmedia} alt="MediaPic" />
            </div>
        </div>
        <div className={styles.footerCon}>
            <p>© ${currentYear} Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer