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
