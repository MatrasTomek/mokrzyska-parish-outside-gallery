import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>

        <a
          href="./documents/news/Komunikat_UNS_Jana_Pawła_II.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Komunikat o Uniwersytecie Nauczania Społecznego Jana Pawła II.</h3>
          </div>

        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Stanowczy_sprzeciw_wobec_działań_MEN.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>„Stanowczy sprzeciw wobec działań MEN”
Oświadczenie Dyrektorów Wydziałów Katechetycznych</h3>
          </div>

        </a>
      </div>
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
    </div>
  );
};

export default NewsView;
