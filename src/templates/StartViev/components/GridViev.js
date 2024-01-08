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
              backgroundImage: `url(images/koncert_koled_2024/7.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Koncert Kolęd i Pastorałek - 7 stycznia 2024 Mokrzyska.
            </h4>
          </div>
          <Link to="/koncert-koled-24">
            <Button name="zobacz" />
          </Link>
        </div>

      <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/kaplica_prace_2024/6.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
            Nasze prace przy Kaplicy Cmentarnej.
            </h4>
          </div>
          <Link to="/kaplica-prace-24">
            <Button name="zobacz" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GridViev;
