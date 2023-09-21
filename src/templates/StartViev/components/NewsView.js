import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Plan_skarby_podkarpacia.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Plan Wycieczko – Pielgrzymki „Skarby Podkarpacia”</h3>
          </div>
          <div className={`${styles.img} ${styles.img3}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/czarny_potok.jpg"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Diecezjalne spotkanie Nauczycieli i Wychowawców</h3>
          </div>
          <div className={`${styles.img} ${styles.img6}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/ku_trzezwosci.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Ku trzeźwości z Kościołem</h3>
          </div>
          <div className={`${styles.img} ${styles.img5}`}></div>
        </a>
      </div>
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
    </div>
  );
};

export default NewsView;
