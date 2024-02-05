import React from 'react'
import styles from './TeamInfo.module.css'
import danial from '../../assets/danial.png'
import sanfole from '../../assets/sanfole.png'
import cesforila from '../../assets/cesforila.png'
import colleen from '../../assets/colleen.png'
import haldone from '../../assets/haldone.png'
import nik from '../../assets/nik.png'

const TeamInfo = () => {
  return (
    <div className={styles.wrapper}>
        <h3>Our Team</h3>
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img src={danial} alt="" />
                <div className={styles.description}>
                    <h5>Danial Def</h5>
                    <p>301 Cases</p>
                </div>
            </div>
            <div className={styles.cardMiddle}>
                <img src={sanfole} alt="Danial" />
                <div className={styles.description}>
                    <h5>Sanfole</h5>
                    <p>850 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={cesforila} alt="Cesforila" />
                <div className={styles.description}>
                    <h5>Cesforila</h5>
                    <p>470 Cases</p>
                </div>
            </div>
        </div>
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img src={colleen} alt="" />
                <div className={styles.description}>
                    <h5>Colleen</h5>
                    <p>180 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={haldone} alt="" />
                <div className={styles.description}>
                    <h5>Haldone</h5>
                    <p>212 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={nik} alt="" />
                <div className={styles.description}>
                    <h5>Nik Jeo</h5>
                    <p>350 Cases</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamInfo