import React from "react";
import styles from "./tamporay.module.scss";

const Temporary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}></div>
      <div className={styles.confession}>
        <h3>SPOWIEDŹ
        PRZED UROCZYSTOŚCIĄ BOŻEGO NARODZENIA
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
            <td>16.12.2023r. sobota</td>
            <td><p>Bucze</p></td>
            <td>
              <p>09.00 - 12.00</p>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>16.12.2023r. sobota</td>
            <td>Bielcza</td>
            <td>
              <p>14.00 – 17.00 </p>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>18.12.2023r. poniedziałek</td>
            <td>Rudy Rysie</td>
            <td>
              <p>16.30 – 18.00 </p>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>19.12.2023r. wtorek</td>
            <td>Przyborów</td>
            <td>
              <p>15.30 – 17.00 </p>
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>20.12.2023r. środa</td>
            <td><p>Borzęcin Dolny</p>
           </td>
            <td>
              <p>15.00 - 18.00</p>
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>20.12.2023r. środa</td>
            <td>Maszkienice</td>
            <td>
              <p>14.30 – 17.30 </p>
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td>21.12.2023r. czwartek</td>
            <td><p>Borzęcin Górny</p></td>
            <td>
              <p>15.00 - 18.30</p>
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td>21.12.2023r. czwartek</td>
            <td>Mokrzyska</td>
            <td>
              <p>14.30 – 15.45 </p>
              <p>16.15 – 17.30 </p>
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td>21.12.2023r. piątek</td>
            <td>Szczepanów</td>
            <td>
              <p>8.30 – 10.00 </p>
              <p>10.30 – 12.00 </p>
              <p>15.30 – 17.00 </p>
              <p>17.30 – 18.00 </p>
              <p>18.30 – 19.30 </p>
            </td>
          </tr>

        </table>
      </div>
    </div>
  );
};

export default Temporary;
