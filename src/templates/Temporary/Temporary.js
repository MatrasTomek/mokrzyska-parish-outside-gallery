import React from "react";
import styles from "./tamporay.module.scss";

const Temporary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}></div>

      <h2>Program Rekolekcji Wielkopostnych 2023</h2>
      <h2>
        PARAFIA NAJŚWIĘTSZEGO SERCA PANA JEZUSA W MOKRZYSKACH. PROWADZĄCY – KS.
        dr hab. JÓZEF MŁYŃSKI
      </h2>
      <h2>
        -Profesor Uniwersytetu Kardynała Stefana Wyszyńskiego w Warszawie-
      </h2>
      <div className={styles.element}>
        <p>
          <span>6 NIEDZIELA WIELKIEGO POSTU – 2 kwietnia -NIEDZIELA- 2023</span>
        </p>
        <p>7.30 Msza święta z homilią dla wszystkich</p>
        <p>10.00 Modlitwa różańcowa</p>
        <p>10.30 Msza święta z homilią dla wszystkich</p>
        <p>15.00 Gorzkie Żale z kazaniem pasyjnym</p>
        <p>15.45 Msza święta</p>
      </div>
      <div className={styles.element}>
        <p>
          <span>PONIEDZIAŁEK – 3 kwietnia -PONIEDZIAŁEK- 2023</span>
        </p>
        <p>7.45 Modlitwy poranne</p>
        <p>8.00 Msza święta z homilią dla wszystkich</p>
        <p>9.00 – 10.30 Sakrament pokuty</p>
        <p>
          10.30 Rekolekcje szkolne. Msza św. z homilią dla wszystkich dzieci
          klas I-VIII
        </p>
        <p>16.00 – 17.30 Sakrament pokuty</p>
        <p>
          <span>
            18.00 - Msza św. z nauką rekolekcyjną dla rodzin z błogosławieństwem
            Lourdzkim.
          </span>
        </p>
      </div>
      <div className={styles.element}>
        <p>
          <span>WTOREK – 4 kwietnia -WTOREK- 2023</span>
        </p>
        <p>7.45 Modlitwy poranne</p>
        <p>8.00 Msza święta z homilią dla wszystkich</p>
        <p>
          9.30 Rekolekcje szkolne. Msza św. z homilią dla wszystkich dzieci klas
          I-VIII
        </p>
        <p>13.30 Odwiedziny chorych w parafii</p>
        <p>
          <span>
            17.00 Droga Krzyżowa dla wszystkich -ulicą Dobrego Pasterza i
            Siostry Faustyny- z Apostołami Narodu Polskiego:, św. Janem Pawłem
            II oraz z bł. Kard. Stefanem Wyszyńskim.
          </span>
        </p>
        <p>18.00 Msza święta z homilią dla wszystkich</p>
        <p>
          Ofiara z każdej Mszy świętej w tym dniu przeznaczona jest dla Ojca
          Rekolekcjonisty.
        </p>
      </div>
      <div className={styles.element}>
        <p>
          <span>ŚRODA – 5 kwietnia -ŚRODA- 2022</span>
          <p>
            10.00 - Rekolekcje szkolne. Droga Krzyżowa dla wszystkich dzieci dla
            klas I-VIII
          </p>
          <p className={styles.italian}>
            Każdy kto wysłucha trzech nauk rekolekcyjnych, wyspowiada się,
            przyjmie Komunię świętą oraz nie ma przywiązania do grzechu
            śmiertelnego, może uzyskać odpust zupełny i ofiarować go za siebie
            lub kogoś ze zmarłych.
          </p>
        </p>
      </div>
      {/* <div className={styles.confession}>
        <h3>Harmonogram Dekanalnej spowiedzi wielkopostnej - 2022r.</h3>
        <table>
          <tr>
            <th>Lp.</th>
            <th>Data</th>
            <th>Parafia</th>
            <th>Godzina</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>04.04. Poniedziałek</td>
            <td>Borzęcin Górny</td>
            <td>
              <p>14.30 – 16.00 </p>
              <p>16.30 – 18.00</p>
              <p>19.00 – 20.00</p>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>05.04. Wtorek</td>
            <td>Maszkienice</td>
            <td>
              <p>09.00 - 10.00</p>
              <p>15.00 - 16.30</p>
              <p>17.00 - 18.00</p>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>09.04. Sobota</td>
            <td>Borzęcin Dolny</td>
            <td>
              <p>9.00 - 10.30</p>
              <p>11.00 - 12.00</p>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>09.04. Sobota</td>
            <td>Bucze</td>
            <td>
              <p>9.00 - 10.30</p>
              <p>11.00 - 12.00</p>
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>09.04. Sobota</td>
            <td>Bielcza</td>
            <td>
              <p>14.00 - 15.30</p>
              <p>16.00 - 17.00</p>
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>11.04. Poniedziałek</td>
            <td>Mokrzyska</td>
            <td>
              <p>09.00 - 10.00</p>
              <p>15.00 - 16.30</p>
              <p>17.00 - 18.00</p>
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td>12.04. Wtorek</td>
            <td>
              Szczepanów{" "}
              <span>Godz. 19.oo Droga Krzyżowa ulicami Szczepanowa</span>
            </td>
            <td>
              <p>08.30 - 10.00 </p>
              <p>10.30 - 12.00</p>
              <p>15.30 - 17.00</p>
              <p>17.30 - 19.00</p>
            </td>
          </tr>
        </table>
      </div> */}
    </div>
  );
};

export default Temporary;
