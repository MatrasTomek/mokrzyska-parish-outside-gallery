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
            <h3>Budujemu studnie w Czadzie</h3>
            <p>W dniu dzisiejszym rusza akcja pomocy misjom przez budowanie
                studni głębinowych, dzięki zbiórce zużytych (dobrych i zepsutych)
                przedmiotów codziennego użytku. W tym przypadku chodzi o telefony
                komórkowe (klawiszowe), smartfony, tablety i laptopy.
                Diecezja tarnowska dzięki jej misjonarzom w Afryce wybudowała już 192
                studnie głębinowe sfinansowane przez różne podmioty (kolędnicy misyjni,
                różni ofiarodawcy - w tym księża sercanie, a także Dzieło Misyjne
                Diecezji Tarnowskiej z funduszu uzyskanego za sprzedaż makulatury i
                plastikowych nakrętek).
            </p>
            <p>W naszej parafii prowadzona również będzie zbiórka do 22 października. Zużyte sprzęty można
            składać w zakrystii lub na plebanii. Z góry dziękuję za włączenie się w tę akcję pomocy misjonarzom.</p>
          </div>
          <div className={`${styles.img} ${styles.img3}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/Plan_skarby_podkarpacia.pdf"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>Plan Wycieczko – Pielgrzymki „Skarby Podkarpacia”</h3>
          </div>
          <div className={`${styles.img} ${styles.img4}`}></div>
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
