import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Buttons/Button";

import styles from "./gridViev.module.scss";

const GridViev = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/podkarpacie_2023/9.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Pielgrzymko-wycieczka do Kalwarii Pacławskiej, Krasiczyna i Przemyśla w dniu 7 października 2023 roku.
            </h4>
          </div>
          <Link to="/podkarpacie-23">
            <Button name="zobacz" />
          </Link>
        </div>
      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/piknik_2023/10.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Piknik Parafialny - Parafia z sercem - Mokrzyska 20.08.2023r.
            </h4>
          </div>
          <Link to="/piknik-23">
            <Button name="zobacz" />
          </Link>
        </div>
      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/figura_2023/4.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Nasze prace przy demontażu figury Najświetszego Serca Pana Jezusa</h4>
          </div>
          <Link to="/figura-23">
            <Button name="zobacz" />
          </Link>
        </div>
      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/ogrodzenie_2023/4.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Prace przy ogrodzeniu parafialnym</h4>
          </div>
          <Link to="/ogrodzenie-23">
            <Button name="zobacz" />
          </Link>
        </div>
      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/parking_2023/23.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Prace przy alejkach cmentarnych na naszym cmentarzu parafialnym
            </h4>
          </div>
          <Link to="/cmentarz-23">
            <Button name="zobacz" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridViev;
