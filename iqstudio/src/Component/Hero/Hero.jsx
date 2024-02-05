import React from 'react'
import HeroImg from '../../assets/heroImg.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
        <div className={styles.paragraph}>
            <h1 className={styles.header1}>You don’t have to </h1>
            <h1 className={styles.header2}>Fight them Alone.</h1>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <form className={styles.emailFrom}>
                <input type="email" className={styles.emailInput} placeholder='Enter your email address'/>
                <button className={styles.button}>Let’s Talk</button>
            </form>
        </div>
        <div>
            <img src={HeroImg} alt="HeroImg" className={styles.heroImgStyle} />
        </div>
    </div>
  )
}

export default Hero