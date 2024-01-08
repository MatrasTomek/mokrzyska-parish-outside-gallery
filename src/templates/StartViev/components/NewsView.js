import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      {/* <div className={styles.newsItem}>
        <a
          href="./documents/news/koncert_kolend.jpg"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Koncert Kolęd i Pastorałek - 7 stycznia 2024 Mokrzyska</h3>
          </div>
          <div className={`${styles.img} ${styles.img1}`}></div>
        </a>
      </div> */}
    </div>
  );
};

export default NewsView;
