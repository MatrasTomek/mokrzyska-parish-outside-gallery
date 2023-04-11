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
              backgroundImage: `url(images/wielkanoc_wystroj_2023/1.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Wielkanoc 2023 - wystrój Kościoła</h4>
            <h4></h4>
          </div>
          <Link to="/wystroj_23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/wielki_piatek_2023/4.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Triduum Paschalne, Mokrzyska 2023 - Wielki Piątek</h4>
            <h4></h4>
          </div>
          <Link to="/w_piatek_23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/n_palmowa_2023/8.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Niedziela Palmowa</h4>
            <h4></h4>
          </div>
          <Link to="/niedziela-palmowa">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/rekolekcje_wlp_2023/10.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Rekolekcje Wielkopostne Przedszkolaków - 2023</h4>
            <h4></h4>
          </div>
          <Link to="/rekolekcje-przedszkole">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/zawody_1_2023/8.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Dekanalny Turniej Piłki Nożnej Halowej.</h4>
            <h4> Borzęcin 25 III 2023.</h4>
          </div>
          <Link to="/turniej-borzecin">
            <Button name="zobacz" />
          </Link>
        </div>
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
      </div>
    </div>
  );
};

export default GridViev;
