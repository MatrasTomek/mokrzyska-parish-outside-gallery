import React from "react";
import styles from "./newsView.module.scss";

const NewsView = () => {
  return (
    <div className={styles.newsWrapper}>
      <h2>Aktualności</h2>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/plakat_2023_Bochnia.jpg"
          target="blank"
        >
          <div className={styles.newsTitle}>
            {" "}
            <h3>MARYJA WZOREM KOŚCIOŁA, W KTÓRY WIERZYMY</h3>
            <p>- to hasło będzie nam towarzyszyć podczas tegorocznego
<span>Tygodnia Maryjnego z Odpustem ku czci Matki Bożej Różańcowej w Bochni</span>,
który potrwa <span>od 1 do 7 października 2023 r</span>.
.
            </p>

          </div>
          <div className={`${styles.img} ${styles.img2}`}></div>
        </a>
      </div>
      <div className={styles.newsItem}>
        <a
          href="./documents/news/studnie_w_czadzie.pdf"
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
    </div>
  );
};

export default NewsView;
