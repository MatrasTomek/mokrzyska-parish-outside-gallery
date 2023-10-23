import React from "react";
import styles from "./tamporay.module.scss";

const Temporary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}></div>

      {/* <h2>
        „Wierzę w Kościół Chrystusowy” to hasło 41. Pieszej Pielgrzymki
        Tarnowskiej na Jasną Górę, która rozpocznie się 17 sierpnia 2023 r.
        Eucharystią o godz. 6.30 sprawowaną na placu katedralnym w Tarnowie.
      </h2>
      <p>
        {" "}
        Radio RDN będzie transmitowało Msze św. z Tarnowa oraz w dniu wejścia z
        Częstochowy o godz. 17.00, a także przekazywało relacje z pielgrzymki.
      </p>
      <p>
        {" "}
        Zapisy na Pielgrzymkę będą prowadzone tak jak w latach ubiegłych, w
        naszej parafii przez czerwiec i lipiec, a w sierpniu w miejscach
        organizacji grupy.
      </p>
      <p>
        Koszt uczestnictwa w PPT wynosi 200,00 zł od osoby. Jeśli z domu idzie
        więcej osób, następna płaci 150,00 zł, a trzecia osoba z domu płaci
        100,00zł. Każde dziecko z rodziny w wieku szkoły podstawowej płaci tylko
        75,00 zł, resztę dopłaca Caritas.
      </p>
      <p>
        Więcej informacji o pielgrzymce można uzyskać na stronach internetowych
        Pielgrzymki{" "}
        <a href="http://pielgrzymkatarnowska.pl" target="blanc">
          www.pielgrzymkatarnowska.pl
        </a>
      </p> */}
      <div className={styles.confession}>
        <h3>SPOWIEDŹ
PRZED UROCZYSTOŚCIĄ WSZYSTKICH ŚWIĘTYCH
 - 2023r.</h3>
        <table>
          <tr>
            <th>Lp.</th>
            <th>Data</th>
            <th>Parafia</th>
            <th>Godzina</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>21.10.2023r. sobota</td>
            <td>Przyborów</td>
            <td>
              <p>14.00 – 17.00 </p>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>26.10.2023r. czwartek</td>
            <td><p>Maszkienice</p>
            <p>Rudy Rysie</p></td>
            <td>
              <p>16.00 - 17.30</p>
              <p>16.30 - 17.30</p>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>27.10.2023r. piątek</td>
            <td><p>Borzęcin Górny</p><p>Mokrzyska</p></td>
            <td>
              <p>14.30 - 17.00</p>
              <p>16.00 - 17.30</p>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>28.10.2023r. sobota</td>
            <td><p>Bucze</p><p>Borzęcin Dolny</p><p>Bielcza</p></td>
            <td>
              <p>09.00 - 10.30</p>
              <p>09.30 - 11.00</p>
              <p>15.00 - 16.30</p>
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>28.10.2023r. poniedziałek</td>
            <td>Szczepanów</td>
            <td>
              <p>15.00 – 18.00 </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Temporary;
