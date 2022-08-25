import React from "react";

import styles from "./serviceFive.module.scss";

const Service5 = () => {
  return (
    <div className={styles.wrapper}>
      <h3>REKRUTACJA DO STUDIUM ORGANISTOWSKIEGO ROZPOCZĘTA – 2021 r.</h3>
      <p>
        Zapraszamy w swoje progi wszystkich kochających piękną liturgię i muzykę
        organową.
      </p>
      <p>
        <span>Absolwent</span> Studium otrzymuje dyplom, który jest niezbędnym
        warunkiem podjęcia funkcji organisty w parafii.
      </p>
      <p>
        <span>Zajęcia w Studium </span> odbywają się na dwóch „poziomach”:
        podstawowym (I stopień) i podyplomowym (II stopień). Poziom podstawowy
        trwa 4 lata, dla zaczynających od „0” jest dodatkowo rok propedeutyczny.
        Wykłady odbywają się w soboty (od października do czerwca) wraz z
        lekcjami gry na fortepianie i organach.
      </p>
      <p>
        <span>Do Studium przyjmowani są </span> wszyscy kandydaci (nie ma
        żadnych ograniczeń wiekowych), którzy w przyszłości chcą pełnić posługę
        organisty lub już ją pełnią, a nie posiadają żadnego wykształcenia
        muzycznego do pełnienia tej funkcji.
      </p>
      <p>
        <span>Warunkiem przyjęcia do Studium</span> jest słuch muzyczny i
        poczucie rytmu, które sprawdza powołana w tym celu komisja.
      </p>
      <p>
        <span>
          Od kandydata ubiegającego się o przyjęcie do Studium wymaga się{" "}
        </span>
        następujące dokumenty: podanie, życiorys, ostatnie świadectwo szkoły
        ogólnokształcącej, świadectwo wykształcenia muzycznego (jeśli takie
        posiada), opinia proboszcza o kandydacie oraz dwie fotografie.
      </p>
      <p>
        <span>
          Egzamin wstępny odbędzie się 18 września 2021 r. (sobota) o godz. 9.00{" "}
        </span>
        w Studium Organistowskim w Tarnowie.
      </p>
      <p>
        <span>Dokumenty należy wysłać e-mail'em na adres: </span>
        <a href="mailto:muzyka@diecezja.tarnow.pl">
          muzyka@diecezja.tarnow.pl
        </a>{" "}
        lub <a href="mailto:gpiekarz@interia.pl">gpiekarz@interia.pl</a>{" "}
        <span>
          (tylko podanie i życiorys wraz z podaniem swojego numeru telefonu.
          Pozostałe dokumentu jak świadectwa, opinia ks. proboszcza i zdjęcia
          można przynieść na egzamin wstępny) do 30 czerwca 2021 r.
        </span>
        Dodatkowy termin: do <span>15 września 2021 r. </span>(w miarę wolnych
        miejsc). W razie pytań proszę dzwonić <span>(tel: 606 332 134).</span>
      </p>
      <p className={styles.sign}>
        ks. dr Grzegorz Piekarz - dyr. DSO w Tarnowie
      </p>
      <p className={styles.post}>
        PS. Szczegóły patrz:{" "}
        <a target="blank" href="https://www.muzyka.diecezja.tarnow.pl/">
          www.muzyka.diecezja.tarnow.pl
        </a>{" "}
        Diecezjalne Studium Organistowskie
      </p>
    </div>
  );
};

export default Service5;
