import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Rekrutacja.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Rekrutacja do Studium Organistowskiego</h3>
          </div>
          <div className={`${styles.img} ${styles.img1}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/zaproszenie_bezplatne_wydarzenia.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Zaproszenie na bezpłatne wydarzenia w styczniu 2024 roku od Fundacji "Auxilium"</h3>
          </div>
          {/* <div className={`${styles.img} ${styles.img1}`}></div> */}
        </a>
      </div>
    </div>
  );
};

export default NewsView;
