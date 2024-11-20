import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>

        <a
          href="./documents/news/3_forum_rad_duspasterskich.png"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Pielgrzymi Nadzieji - III FORUM PARAFIALNYCH RAD DUSZPASTERSKICH</h3>
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

    </div>
  );
};

export default NewsView;
