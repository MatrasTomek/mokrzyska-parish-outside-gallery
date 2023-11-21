import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/11_forum_nauczycieli_wychowawcow.png"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>XI FORMU NAUCZYCIELI I WYCHOWAWCÓW - Wychowawcy na współczesne czasy.</h3>
          </div>
          <div className={`${styles.img} ${styles.img1}`}></div>
        </a>
      </div>
    </div>
  );
};

export default NewsView;
