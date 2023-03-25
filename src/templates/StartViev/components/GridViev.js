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
              backgroundImage: `url(images/plac_zabaw_2023/11.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
              Otwarcie i poświęcenie nowego urządzenia na placu zabaw w
              Przedszkolu
            </h4>
            <h4></h4>
          </div>
          <Link to="/plac-zabaw">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/rocznicz_p.Koczwary_2023/34.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>134 rocznica urodzin płk. Józefa Koczwary</h4>
            <h4></h4>
          </div>
          <Link to="/rocznica-plk-koczwara">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/koncert_kolend_2023/2.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Koncert kolęd i pastorałek</h4>
            <h4></h4>
          </div>
          <Link to="/kolendy-2023">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/d_babci_2023/53.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Dzień Babci i Dziadka 2023</h4>
            <h4></h4>
          </div>
          <Link to="/dzien-babci">
            <Button name="zobacz" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridViev;
