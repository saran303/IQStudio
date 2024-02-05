import React from 'react'
import styles from './Suscribe.module.css'

const Suscribe = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.head1}>Subscribe Our Newsletter</h1>
        <form action="" className={styles.form}>
            <input type="text" placeholder='Name:' className={styles.fname}/>
            <input type="email" placeholder='Enter your email' className={styles.email}/>
            <button className={styles.sendBtn}>Send</button>
        </form>
    </div>
  )
}

export default Suscribe