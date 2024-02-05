import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.introHeader}>
        <h5>Let’s Introduce</h5>
        <h5>Ourself</h5>
      </div>
      <div>
        <hr className={styles.verticalLine} />
      </div>
      <div className={styles.description}>
        <h6>Criminal Lawyer</h6>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
