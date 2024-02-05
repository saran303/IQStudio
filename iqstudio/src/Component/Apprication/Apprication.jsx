import React from 'react'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import styles from './Apprication.module.css'
import jane from '../../assets/jane.png'
import devon from '../../assets/devon.png'
import robert from '../../assets/robert.png'

const Apprication = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.headWrapper}>
            <h3>What says our happy Clients</h3>
            <div className={styles.imgDiv}>
                <img src={leftArrow} alt="LeftArrow" />
                <img src={rightArrow} alt="RightArrow" />
            </div> 
        </div>
        <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img src={jane} alt="giftImg" />
          <h5>Jane Cooper</h5>
          <h6>Ceo of Hunt</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className={styles.middleCard}>
          <img src={devon} alt="giftImg" />
          <h5>Devon Lane</h5>
          <h6>Ceo of Hunt</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className={styles.card}>
          <img src={robert} alt="giftImg" />
          <h5>Robert Fox</h5>
          <h6>Ceo of Hunt</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Apprication