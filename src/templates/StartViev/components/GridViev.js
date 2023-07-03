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
            <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/zakonczenie_roku_2023/29.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
             Uroczysta Msza święta na zakończenie roku szkolno-przedszkolnego - Mokrzyska 22.06.2023r.
            </h4>
          </div>
          <Link to="/zakonczenie_23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/b_cialo_2023/153.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
              Uroczystość Najświętszego Ciała i Krwi Chrystusa - Mokrzyska
              8.06.2023r.
            </h4>
          </div>
          <Link to="/boze-cialo-23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/spotkanie_rad_2023/152.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>"Majówka 2023" - Spotkanie modlitewne Grup Parafialnych.</h4>
          </div>
          <Link to="/majowka-spotkanie-23">
            <Button name="zobacz" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GridViev;
