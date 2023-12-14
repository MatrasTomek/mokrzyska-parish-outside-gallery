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
              backgroundImage: `url(images/forum_rad_2023/12.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            II Forum Parafialnych Rad Duszpasterskich, Tarnów 25 listopada 2023. ,
            </h4>
          </div>
          <Link to="/forum-rad-23">
            <Button name="zobacz" />
          </Link>
        </div>

      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/wycieczka_lso_2023/4.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Wycieczka Liturgicznej Służby Ołtarza oraz Dziewczęcej Słuzby Maryjnej w Pieniny.
            </h4>
          </div>
          <Link to="/wycieczka-lso-23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/podkarpacie_2023/7.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Pielgrzymko-wycieczka do Kalwarii Pacławskiej, Krasiczyna i Przemyśla w dniu 7 października 2023 roku.
            </h4>
          </div>
          <Link to="/podkarpacie-2023">
            <Button name="zobacz" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridViev;
