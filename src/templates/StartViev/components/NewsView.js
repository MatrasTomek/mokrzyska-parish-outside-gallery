import React from "react";
import { Document, Page } from "react-pdf";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>
        <div className={styles.newsTitle}>
          {" "}
          <h5>13.06.2023</h5>
          <h3>Diecezjalne Studium Rodziny</h3>
        </div>
        <div className={`${styles.img} ${styles.img1}`}></div>
      </div>
      <div className={styles.newsItem}>
        <div className={styles.newsTitle}>
          {" "}
          <h5>12.06.2023</h5>
          <h3>Pielgrzymka do Włoch</h3>
        </div>
        <div className={styles.pdf}>
          <Document file="../../../assets/newsItems/Program_pielgrzymki_wlochy.pdf"></Document>
        </div>
      </div>
    </div>
  );
};

export default NewsView;
