import React from 'react'
import styles from './Intrest.module.css'

const Intrest = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Area of Practices</h3>
      <div className={styles.gridContainer}>
        <div className={styles.item1}>BUSINESS LAW</div>
        <div className={styles.item2}>Partnership LAW</div>
        <div className={styles.item3}>REAL ESTATE LAW</div>
        <div className={styles.item4}>BUSINESS LAW</div>
        <div className={styles.item5}>LANDLORD DISPUTES</div>
        <div className={styles.item6}>ELDER ABUSE</div>
      </div>
    </div>
  )
}

export default Intrest