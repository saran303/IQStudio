import React from "react";
import styles from "./Faq.module.css";
import plusSymbol from '../../assets/plusSymbol.png'

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.header5}>FAQ</h5>
      <div className={styles.childWrapper}>
        <p className={styles.rightPara}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className={styles.leftPart}>
          <div>
            <h6>Do I need a personal injury report?</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <hr />
          <div className={styles.question}>
            <h6>How much is my case worth?</h6>
            <img src={plusSymbol} alt="Plus Symbol" className={styles.imgTag}/>
          </div>
          <hr />
          <div className={styles.question}>
            <h6>What should I do after car accidect</h6>
            <img src={plusSymbol} alt="Plus Symbol" className={styles.imgTag}/>
          </div>
          <hr />
          <div className={styles.question}>
            <h6>How much is my case worth?</h6>
            <img src={plusSymbol} alt="Plus Symbol" className={styles.imgTag}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
