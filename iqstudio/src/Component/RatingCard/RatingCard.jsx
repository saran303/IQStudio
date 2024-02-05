import React from "react";
import cardImg from "../../assets/cardImg.png";
import styles from "./RatingCard.module.css";

const RatingCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h5>Why Choose us?</h5>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img src={cardImg} alt="giftImg" />
          <h6>98% Success Rate</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.middleCard}>
          <img src={cardImg} alt="giftImg" />
          <h6>99% Success Rate</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.card}>
          <img src={cardImg} alt="giftImg" />
          <h6>99% Success Rate</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
