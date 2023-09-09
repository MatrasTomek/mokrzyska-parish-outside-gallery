import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/skarby_podkarpacia.png"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Wycieczka „Skarby Podkarpacia”</h3>
          </div>
          <div className={`${styles.img} ${styles.img4}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Rekrutacja.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Rekrutacja na studia magisterskie z teologii</h3>
          </div>
          <div className={`${styles.img} ${styles.img3}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Diecezjalne_Studium_Rodziny.png"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Diecezjalne Studium Rodziny</h3>
          </div>
          <div className={`${styles.img} ${styles.img1}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Program_pielgrzymki_IT_2023.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Pielgrzymka do Włoch</h3>
          </div>
          <div className={`${styles.img} ${styles.img2}`}></div>
        </a>
      </div>
    </div>
  );
};

export default NewsView;
